'use client';

import Image from 'next/image';
import { MapPin, Mountain, Waves, TreePine, Landmark, Sun } from 'lucide-react';

const highlights = [
    { icon: Landmark, value: '8', label: 'UNESCO Heritage Sites' },
    { icon: TreePine, value: '26', label: 'National Parks' },
    { icon: Waves, value: '1,340 km', label: 'Coastline' },
    { icon: Mountain, value: '2,524 m', label: 'Highest Peak' },
    { icon: Sun, value: '365', label: 'Days of Adventure' },
    { icon: MapPin, value: '25', label: 'Curated Districts' },
];

const destinations = [
    { name: 'Sigiriya', image: '/dest_sigiriya_1772209095319.png' },
    { name: 'Galle', image: '/dest_galle_1772208964474.png' },
    { name: 'Ella', image: '/dest_ella_1772208997823.png' },
    { name: 'Colombo', image: '/dest_colombo_1772208944465.png' },
    { name: 'Trincomalee', image: '/dest_trincomalee_1772209175854.png' },
    { name: 'Nuwara Eliya', image: '/dest_nuwara_eliya_1772209058658.png' },
    { name: 'Yala', image: '/dest_yala_1772209015430.png' },
    { name: 'Anuradhapura', image: '/dest_anuradhapura_1772209111479.png' },
];

export default function DestinationShowcase() {
    return (
        <section className="relative overflow-hidden">
            {/* Why Sri Lanka — Dark Glass Section */}
            <div className="relative py-32 bg-deep-emerald text-off-white">
                {/* Decorative */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-antique-gold/5 rounded-full blur-3xl -ml-60 -mt-60" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-antique-gold/5 rounded-full blur-3xl -mr-40 -mb-40" />

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] font-medium text-antique-gold uppercase">
                            The Pearl of the Indian Ocean
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display text-off-white leading-tight">
                            Why <span className="italic font-light text-antique-gold">Sri Lanka</span>?
                        </h2>
                        <p className="text-off-white/60 font-light max-w-2xl mx-auto mt-6 text-[15px] leading-relaxed">
                            A compact island with extraordinary diversity — ancient civilizations, tropical rainforests,
                            pristine beaches, and endemic wildlife, all within a few hours of each other.
                        </p>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-antique-gold to-transparent mt-8 mx-auto" />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {highlights.map((h, idx) => (
                            <div key={idx} className="liquid-glass-card-dark rounded-xl p-6 text-center group">
                                <h.icon className="w-6 h-6 text-antique-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                                <p className="text-2xl font-display text-off-white mb-1">{h.value}</p>
                                <p className="text-[10px] tracking-[0.15em] uppercase text-off-white/40 font-light">{h.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Auto-scrolling Destination Strip */}
            <div className="bg-deep-emerald py-12 overflow-hidden border-t border-antique-gold/10">
                <div className="marquee-strip">
                    {/* Double the items for infinite scroll illusion */}
                    {[...destinations, ...destinations].map((dest, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[280px] mx-3 group relative rounded-xl overflow-hidden h-[200px]">
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-emerald/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-display text-lg tracking-wide">{dest.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
