'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
    }, []);

    return (
        <div className="relative h-[92vh] w-full overflow-hidden bg-deep-emerald font-sans">
            {/* Background Video/Image */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                    poster="/images/home/hero-poster.png"
                >
                    <source src="/Hero-Section.mp4" type="video/mp4" />
                </video>
                {/* Overlay - deeper luxury gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-emerald-950/20 to-emerald-950/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-off-white px-4 md:px-8 max-w-5xl mx-auto">
                <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block py-2 px-6 text-[10px] tracking-[0.4em] uppercase font-medium text-white/90 border border-white/30 bg-black/20 backdrop-blur-md mb-2">
                        Bespoke Sri Lanka
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif tracking-normal leading-[1.05] text-white drop-shadow-2xl">
                        Discover the <span className="italic font-light text-antique-gold">Elite</span> <br />
                        Island Experience
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed tracking-wide drop-shadow-md">
                        Curated itineraries, private chauffeur-guides, and unparalleled luxury —
                        crafted around you by our dedicated concierge team.
                    </p>

                    {/* Primary CTA */}
                    <div className="mt-10 flex flex-col items-center gap-4">
                        <Link href="/inquire">
                            <Button className="h-14 px-12 bg-transparent border border-white hover:bg-white hover:text-deep-emerald text-white font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-500 rounded-none flex items-center gap-4 group">
                                Request a Curated Proposal
                                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <p className="text-off-white/50 text-xs tracking-[0.15em] uppercase font-light">
                            Reply within 2 hours · No obligation · Fully bespoke
                        </p>
                    </div>
                </div>

                {/* Trust micro-badges — floating at bottom */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-off-white/50 text-[11px] tracking-[0.15em] uppercase font-light">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-antique-gold/60" />
                            Private Transfers
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-antique-gold/60" />
                            24/7 Concierge
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-antique-gold/60" />
                            Fixed-Price Guarantee
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
