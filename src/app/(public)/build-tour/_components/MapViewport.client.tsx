'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { useBuildTourStore } from '@/lib/trip/store/useBuildTourStore';
import { getCategoryColor } from '@/lib/trip/types';
import type { Place } from '@/lib/trip/types';
import { MapPin, Route, Clock } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

// Stable refs for callbacks used inside Leaflet popup DOM listeners
const getStoreState = () => useBuildTourStore.getState();

export default function MapViewport() {
    const mapRef = useRef<any>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const markersRef = useRef<any>(null);
    const routeLayerRef = useRef<any>(null);
    const geoJsonLayerRef = useRef<any>(null);
    const highlightedLayerRef = useRef<any>(null);

    const places = useBuildTourStore((s) => s.places);
    const stops = useBuildTourStore((s) => s.stops);
    const route = useBuildTourStore((s) => s.route);
    const addStop = useBuildTourStore((s) => s.addStop);
    const isInStops = useBuildTourStore((s) => s.isInStops);
    const fetchRoute = useBuildTourStore((s) => s.fetchRoute);
    const hoveredPlaceId = useBuildTourStore((s) => s.hoveredPlaceId);

    const [L, setL] = useState<any>(null);
    const [geoData, setGeoData] = useState<any>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

    // Load Leaflet + GeoJSON data
    useEffect(() => {
        let cancelled = false;
        Promise.all([
            import('leaflet'),
            import('leaflet.markercluster'),
            fetch('/sri-lanka-districts.geojson').then((r) => r.json()),
        ]).then(([leaflet, , geo]) => {
            if (cancelled) return;
            setL(leaflet.default || leaflet);
            setGeoData(geo);
        });
        return () => { cancelled = true; };
    }, []);

    // Init map
    useEffect(() => {
        if (!L || !mapContainerRef.current || mapRef.current) return;

        const map = L.map(mapContainerRef.current, {
            center: [7.8731, 80.7718],
            zoom: 8,
            minZoom: 7,
            maxZoom: 15,
            zoomControl: false,
            attributionControl: false,
            maxBounds: [[5.5, 79.0], [10.2, 82.5]],
            maxBoundsViscosity: 0.8,
        });

        // Dark tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 19,
        }).addTo(map);

        L.control.zoom({ position: 'topright' }).addTo(map);

        mapRef.current = map;

        setTimeout(() => {
            map.invalidateSize();
        }, 250);

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, [L]);

    // Add GeoJSON district boundaries with hover + click
    useEffect(() => {
        if (!L || !mapRef.current || !geoData) return;

        if (geoJsonLayerRef.current) {
            mapRef.current.removeLayer(geoJsonLayerRef.current);
        }

        const defaultStyle = {
            fillColor: '#16a34a',
            weight: 1,
            opacity: 0.4,
            color: '#D4AF37',
            fillOpacity: 0.06,
        };

        const hoverStyle = {
            fillOpacity: 0.18,
            weight: 2,
            color: '#D4AF37',
            opacity: 0.8,
        };

        const selectedStyle = {
            fillColor: '#D4AF37',
            fillOpacity: 0.15,
            weight: 2.5,
            color: '#D4AF37',
            opacity: 1,
        };

        geoJsonLayerRef.current = L.geoJSON(geoData, {
            style: (feature: any) => {
                const name = (feature?.properties?.shapeName || '').replace(/\s*District$/i, '').trim();
                if (name === selectedDistrict) return selectedStyle;
                return defaultStyle;
            },
            onEachFeature: (feature: any, layer: any) => {
                const name = (feature.properties.shapeName || '')
                    .replace(/\s*District$/i, '')
                    .trim();
                layer.bindTooltip(name, {
                    permanent: false,
                    direction: 'center',
                    className: 'build-tour-district-tooltip',
                });

                // Hover effect
                layer.on('mouseover', () => {
                    if (name !== selectedDistrict) {
                        layer.setStyle(hoverStyle);
                    }
                });
                layer.on('mouseout', () => {
                    if (name !== selectedDistrict) {
                        layer.setStyle(defaultStyle);
                    }
                });

                // Click to select district
                layer.on('click', () => {
                    setSelectedDistrict((prev) => (prev === name ? null : name));
                });
            },
        }).addTo(mapRef.current);
    }, [L, geoData, selectedDistrict]);

    // Create place markers with clustering
    const updateMarkers = useCallback(() => {
        if (!L || !mapRef.current) return;

        // Remove old
        if (markersRef.current) {
            mapRef.current.removeLayer(markersRef.current);
        }

        const cluster = L.markerClusterGroup({
            maxClusterRadius: 50,
            iconCreateFunction: (c: any) => {
                const count = c.getChildCount();
                return L.divIcon({
                    html: `<div class="build-tour-cluster">${count}</div>`,
                    className: 'build-tour-cluster-wrapper',
                    iconSize: L.point(36, 36),
                });
            },
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
        });

        places.forEach((place: Place) => {
            const color = getCategoryColor(place.category);

            const icon = L.divIcon({
                html: `<div class="build-tour-pin ${getStoreState().isInStops(place.id) ? 'in-stops' : ''}" style="--pin-color: ${color}">
                    <div class="pin-dot"></div>
                </div>`,
                className: 'build-tour-pin-wrapper',
                iconSize: L.point(20, 20),
                iconAnchor: L.point(10, 10),
            });

            const marker = L.marker([place.lat, place.lng], { icon });

            // Generate popup content dynamically on open so it reflects current state
            marker.on('popupopen', () => {
                const currentlyInStops = getStoreState().isInStops(place.id);
                const popupEl = marker.getPopup()?.getElement();
                if (popupEl) {
                    const contentDiv = popupEl.querySelector('.leaflet-popup-content');
                    if (contentDiv) {
                        contentDiv.innerHTML = `<div class="build-tour-popup">
                            <div class="popup-category" style="color: ${color}">${place.category}</div>
                            <div class="popup-name">${place.name}</div>
                            <div class="popup-district">${place.district}</div>
                            <div class="popup-teaser">${place.teaser}</div>
                            ${!currentlyInStops ? `<button class="popup-add-btn" data-place-id="${place.id}">+ Add to Trip</button>` : '<div class="popup-added">✓ Added</div>'}
                        </div>`;

                        // Attach click handler using getStoreState() to avoid stale closures
                        const btn = contentDiv.querySelector(`[data-place-id="${place.id}"]`);
                        if (btn) {
                            btn.addEventListener('click', () => {
                                getStoreState().addStop(place);
                                marker.closePopup();
                            });
                        }
                    }
                }
            });

            // Bind an initial placeholder popup
            marker.bindPopup(
                `<div class="build-tour-popup">
                    <div class="popup-name">${place.name}</div>
                </div>`,
                { className: 'build-tour-popup-wrapper', maxWidth: 250 }
            );

            cluster.addLayer(marker);
        });

        mapRef.current.addLayer(cluster);
        markersRef.current = cluster;
    }, [L, places, stops.length]);

    useEffect(() => {
        updateMarkers();
    }, [updateMarkers, stops.length]);

    // Route polyline
    useEffect(() => {
        if (!L || !mapRef.current) return;

        if (routeLayerRef.current) {
            mapRef.current.removeLayer(routeLayerRef.current);
            routeLayerRef.current = null;
        }

        if (route?.geometry && route.geometry.length > 0) {
            routeLayerRef.current = L.polyline(route.geometry, {
                color: '#D4AF37',
                weight: 3,
                opacity: 0.8,
                dashArray: '10, 6',
                smoothFactor: 1,
            }).addTo(mapRef.current);
        } else if (stops.length >= 2) {
            // Fallback: straight lines between stops
            const positions = stops.map((s) => [s.place.lat, s.place.lng] as [number, number]);
            routeLayerRef.current = L.polyline(positions, {
                color: '#D4AF37',
                weight: 2,
                opacity: 0.5,
                dashArray: '8, 8',
            }).addTo(mapRef.current);
        }
    }, [L, route, stops]);

    // Fit bounds to stops with smooth animation
    useEffect(() => {
        if (!L || !mapRef.current || stops.length === 0) return;

        const bounds = L.latLngBounds(
            stops.map((s) => [s.place.lat, s.place.lng])
        );
        mapRef.current.fitBounds(bounds, {
            padding: [60, 60],
            maxZoom: 11,
            animate: true,
            duration: 0.8,
        });
    }, [L, stops]);

    // Fetch route when stops change
    useEffect(() => {
        const timer = setTimeout(() => { fetchRoute(); }, 500);
        return () => clearTimeout(timer);
    }, [stops, fetchRoute]);

    // Calculate unique districts in stops
    const uniqueDistricts = new Set(stops.map((s) => s.place.district));

    return (
        <div className="w-full h-full relative">
            <div ref={mapContainerRef} className="w-full h-full" />

            {/* Floating Stats Overlay */}
            <div className="absolute top-4 left-4 z-[1000]">
                <div className="map-stats-overlay rounded-xl px-4 py-3 flex items-center gap-5">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-antique-gold/70" />
                        <span className="text-white/80 text-[11px] font-serif">{stops.length}</span>
                        <span className="text-white/30 text-[9px] font-nav uppercase tracking-wider">stops</span>
                    </div>
                    {route && (
                        <>
                            <div className="w-px h-4 bg-white/10" />
                            <div className="flex items-center gap-1.5">
                                <Route className="w-3.5 h-3.5 text-antique-gold/70" />
                                <span className="text-white/80 text-[11px] font-serif">~{route.totalKm}</span>
                                <span className="text-white/30 text-[9px] font-nav uppercase tracking-wider">km</span>
                            </div>
                            <div className="w-px h-4 bg-white/10" />
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-antique-gold/70" />
                                <span className="text-white/80 text-[11px] font-serif">~{route.totalHours}</span>
                                <span className="text-white/30 text-[9px] font-nav uppercase tracking-wider">hrs</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Selected district indicator */}
            {selectedDistrict && (
                <div className="absolute top-4 right-16 z-[1000]">
                    <button
                        onClick={() => setSelectedDistrict(null)}
                        className="map-stats-overlay rounded-full px-3 py-1.5 flex items-center gap-2 hover:border-antique-gold/40 transition-all"
                    >
                        <span className="text-antique-gold text-[10px] font-nav uppercase tracking-wider">{selectedDistrict}</span>
                        <span className="text-white/30 text-[10px]">✕</span>
                    </button>
                </div>
            )}
        </div>
    );
}
