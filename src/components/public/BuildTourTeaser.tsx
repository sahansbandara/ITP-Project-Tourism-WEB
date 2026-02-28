'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export default function BuildTourTeaser() {
    return (
        <section className="py-24 md:py-32 bg-deep-emerald text-white overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Copy */}
                    <div className="max-w-xl">
                        <span className="block text-[10px] tracking-[0.2em] font-nav text-antique-gold uppercase mb-6 font-semibold">
                            Yatara Interactive
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] mb-8">
                            Design Your <span className="italic text-antique-gold font-light">Perfect</span> Route
                        </h2>
                        <p className="text-white/70 font-light text-base md:text-lg leading-relaxed mb-10">
                            Don't settle for off-the-shelf packages. Use our proprietary bespoke builder to map out your journey district by district, tailoring pace and experiences to your exact preferences.
                        </p>

                        <ul className="space-y-4 mb-12">
                            <li className="flex items-center gap-4 text-sm font-nav tracking-wider text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-antique-gold" />
                                25 Curated Districts
                            </li>
                            <li className="flex items-center gap-4 text-sm font-nav tracking-wider text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-antique-gold" />
                                Intelligent Routing Engine
                            </li>
                            <li className="flex items-center gap-4 text-sm font-nav tracking-wider text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-antique-gold" />
                                Expert Review & Refinement
                            </li>
                        </ul>

                        <Link
                            href="/build-tour"
                            className="inline-flex h-14 items-center justify-center px-10 bg-antique-gold hover:bg-white text-deep-emerald transition-colors duration-500 rounded-none font-nav font-semibold tracking-[0.2em] text-[10px] uppercase group"
                        >
                            Start Building Now
                            <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Right Interactive Preview */}
                    <div className="relative aspect-[4/3] w-full max-w-[600px] mx-auto lg:ml-auto">
                        {/* Decorative background blocks */}
                        <div className="absolute -inset-4 bg-white/5 border border-white/10 rounded-xl transform rotate-3" />
                        <div className="absolute -inset-4 bg-antique-gold/10 border border-antique-gold/20 rounded-xl transform -rotate-2" />

                        {/* Main mock interface */}
                        <div className="absolute inset-0 bg-[#0a1f15] rounded-lg shadow-2xl border border-white/10 overflow-hidden flex flex-col">
                            {/* Browser/App Header */}
                            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-black/40">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            </div>

                            {/* Map Mockup Area */}
                            <div className="flex-1 relative bg-[#1a2e24]">
                                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                                {/* UI Elements over map */}
                                <div className="absolute top-6 left-6 w-48 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded text-white shadow-xl">
                                    <div className="text-[9px] font-nav uppercase tracking-widest text-antique-gold mb-2">Itinerary Stops</div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <MapPin className="w-4 h-4 text-white" />
                                        <span className="text-sm">Colombo</span>
                                    </div>
                                    <div className="h-4 border-l border-dashed border-white/30 ml-2 mb-3" />
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-4 h-4 text-antique-gold" />
                                        <span className="text-sm text-antique-gold">Galle Fort</span>
                                    </div>
                                </div>

                                {/* "Hover" element mockup */}
                                <div className="absolute bottom-10 right-10 bg-white text-deep-emerald p-4 rounded shadow-2xl w-56 transform translate-y-4 hover:translate-y-0 transition-transform duration-700 cursor-pointer">
                                    <Image src="/images/home/curated-southcoast.png" alt="preview" width={200} height={100} className="w-full h-24 object-cover rounded mb-3" />
                                    <div className="font-display text-lg mb-1">Galle</div>
                                    <div className="text-[10px] font-nav uppercase tracking-widest text-[#0a1f15]/50">Add to route</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
