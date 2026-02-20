'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Loader2, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Dynamically import Leaflet components (SSR: false)
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Tooltip = dynamic(() => import('react-leaflet').then(mod => mod.Tooltip), { ssr: false });

import 'leaflet/dist/leaflet.css';

// Types natively matching the JSON
interface JataraDistrict {
    id: string;
    name: string;
    luxury_label: string;
    gems: string[];
    coordinates: [number, number]; // [lat, lng]
    transfer_start: number;
}

interface Place {
    _id: string;
    name: string;
    images: string[];
    category: string;
    districtId: any;
}

export default function InteractiveSriLankaMap() {
    const center: [number, number] = [7.8731, 80.7718];
    const [districts, setDistricts] = useState<JataraDistrict[]>([]);

    // Using string matching for active selection
    const [selectedDistrict, setSelectedDistrict] = useState<JataraDistrict | null>(null);
    const [places, setPlaces] = useState<Place[]>([]);
    const [loadingPlaces, setLoadingPlaces] = useState(false);

    // 1. Fetch JSON mapping array natively on mount
    useEffect(() => {
        fetch('/yatara-districts.json')
            .then(res => res.json())
            .then(data => setDistricts(data.districts))
            .catch(err => console.error("Could not load Yatara JSON", err));
    }, []);

    // 2. Fetch 'best-places' when a district is clicked via CMS mapping
    useEffect(() => {
        if (!selectedDistrict) return;

        setLoadingPlaces(true);
        // Find DB internal district ID mapping
        fetch('/api/districts')
            .then(res => res.json())
            .then(data => {
                const matchingDistrict = data.find((d: any) => d.name.toLowerCase() === selectedDistrict.name.toLowerCase());

                if (matchingDistrict) {
                    return fetch(`/api/places?districtId=${matchingDistrict._id}`);
                }
                throw new Error("District Not Found in core DB");
            })
            .then(res => res.json())
            .then(data => setPlaces(data.places || []))
            .catch(err => {
                console.warn(err);
                setPlaces([]);
            })
            .finally(() => setLoadingPlaces(false));
    }, [selectedDistrict]);

    return (
        <div className="flex flex-col lg:flex-row h-full min-h-[600px] md:min-h-[800px] border border-antique-gold/20 shadow-2xl overflow-hidden bg-off-white">

            {/* Left: Map Container */}
            <div className="w-full lg:w-2/3 h-[400px] lg:h-auto relative z-0 bg-[#e0e0e0]">
                {districts.length === 0 ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10">
                        <Loader2 className="w-8 h-8 text-deep-emerald animate-spin" />
                    </div>
                ) : null}

                {typeof window !== 'undefined' && (
                    <MapContainer
                        center={center}
                        zoom={7.2}
                        zoomControl={false}
                        scrollWheelZoom={true}
                        style={{ height: '100%', width: '100%', background: '#F8F9FA' }}
                    >
                        {/* Light minimal base map style */}
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                        />

                        {/* Map Points built iteratively from simplified JSON structure */}
                        {districts.map((district) => {
                            const isSelected = selectedDistrict?.id === district.id;

                            return (
                                <CircleMarker
                                    key={district.id}
                                    center={district.coordinates}
                                    radius={isSelected ? 14 : 10}
                                    pathOptions={{
                                        fillColor: '#043927', // Deep Emerald area
                                        color: '#D4AF37', // Gold border
                                        weight: isSelected ? 4 : 2,
                                        fillOpacity: isSelected ? 1 : 0.7
                                    }}
                                    eventHandlers={{
                                        click: () => setSelectedDistrict(district)
                                    }}
                                >
                                    <Tooltip direction="top" opacity={1} className="font-serif shadow-lg border-antique-gold/50 text-deep-emerald">
                                        <b>{district.name}</b><br />
                                        <span className="font-light text-xs">{district.luxury_label}</span>
                                    </Tooltip>
                                </CircleMarker>
                            );
                        })}
                    </MapContainer>
                )}

                {/* Map Overlay Instructions */}
                <div className="absolute top-6 left-6 z-[1000] bg-white/90 backdrop-blur-md border border-antique-gold/30 p-4 shadow-lg flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-deep-emerald animate-pulse" />
                    <p className="font-serif text-deep-emerald tracking-widest text-sm font-semibold uppercase">
                        Select an enclave to explore
                    </p>
                </div>
            </div>

            {/* Right: Side Panel for Place Cards */}
            <div className="w-full lg:w-1/3 bg-white flex flex-col border-t lg:border-t-0 lg:border-l border-antique-gold/20 relative z-10 h-[400px] lg:h-auto">
                <div className="p-8 pb-4 border-b border-deep-emerald/10 bg-deep-emerald/5">
                    <h2 className="text-3xl font-serif text-deep-emerald tracking-wide">
                        {selectedDistrict?.name || 'Discover Ceylon'}
                    </h2>
                    <p className="text-deep-emerald/60 font-light mt-1 text-sm tracking-widest uppercase">
                        {selectedDistrict ? selectedDistrict.luxury_label : 'Interactive Map Explorer'}
                    </p>

                    {selectedDistrict && (
                        <div className="mt-4 pt-4 border-t border-deep-emerald/10">
                            <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-antique-gold bg-antique-gold/10 px-3 py-1">
                                Transfers start at LKR {selectedDistrict.transfer_start.toLocaleString()}
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex-1 overflow-y-auto p-6 bg-off-white/30 custom-scrollbar">
                    {!selectedDistrict ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                            <MapPin className="w-12 h-12 text-antique-gold" strokeWidth={1} />
                            <p className="font-serif text-deep-emerald tracking-wide text-lg">
                                Your journey begins here.
                            </p>
                            <p className="font-light text-sm text-deep-emerald/70 max-w-[200px]">
                                Click directly on any marker on the map to uncover elite destinations.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-8 pb-10">

                            {/* Yatara Gems Display Native to JSON */}
                            <div className="space-y-4">
                                <h4 className="font-serif text-antique-gold tracking-widest uppercase text-xs">Curated Local Gems</h4>
                                <ul className="space-y-2">
                                    {selectedDistrict.gems.map((gem, index) => (
                                        <li key={index} className="flex items-center text-sm font-light text-deep-emerald tracking-wide">
                                            <div className="w-1.5 h-1.5 rounded-full bg-antique-gold mr-3"></div>
                                            {gem}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CMS 'best places' fetch display */}
                            <div>
                                <h4 className="font-serif text-antique-gold tracking-widest uppercase text-xs mb-4">Partner Estates & Attractions</h4>
                                {loadingPlaces ? (
                                    <div className="py-8 flex flex-col items-center justify-center space-y-4">
                                        <Loader2 className="w-8 h-8 text-antique-gold animate-spin" />
                                    </div>
                                ) : places.length === 0 ? (
                                    <div className="flex items-center gap-3 p-4 border border-deep-emerald/10 bg-white">
                                        <Search className="w-5 h-5 text-antique-gold opacity-50" strokeWidth={1} />
                                        <p className="font-light text-deep-emerald/60 text-xs">
                                            Concierge access recommended for this region.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-6">
                                        {places.map((place) => (
                                            <div key={place._id} className="group bg-white border border-deep-emerald/5 hover:border-antique-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden cursor-pointer">
                                                <div className="relative h-40 w-full bg-deep-emerald/10 overflow-hidden">
                                                    {place.images && place.images.length > 0 ? (
                                                        <Image
                                                            src={place.images[0]}
                                                            alt={place.name}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <MapPin className="w-8 h-8 text-antique-gold/30" />
                                                        </div>
                                                    )}
                                                    <div className="absolute top-3 right-3 bg-deep-emerald/80 backdrop-blur-md px-2 py-1 font-serif text-[10px] uppercase tracking-widest text-antique-gold">
                                                        {place.category}
                                                    </div>
                                                </div>
                                                <div className="p-4 flex items-center justify-between bg-white transform transition-transform group-hover:-translate-y-1">
                                                    <h3 className="font-serif text-md text-deep-emerald group-hover:text-antique-gold transition-colors">
                                                        {place.name}
                                                    </h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {selectedDistrict && (
                    <div className="p-4 border-t border-antique-gold/20 bg-white">
                        <Button className="w-full h-12 rounded-none bg-deep-emerald hover:bg-deep-emerald/90 text-antique-gold font-serif uppercase tracking-widest text-xs transition-colors border border-transparent hover:border-antique-gold/50 shadow-md">
                            Add to Bespoke Itinerary
                        </Button>
                    </div>
                )}
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(4, 57, 39, 0.05); 
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(212, 175, 55, 0.5); 
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(212, 175, 55, 1); 
                }
            `}</style>
        </div>
    );
}
