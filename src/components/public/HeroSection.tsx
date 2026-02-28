'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative h-[95vh] min-h-[600px] max-h-[900px] w-full bg-deep-emerald flex items-center justify-center overflow-hidden">
            {/* Background Image (LCP) */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/home/hero-poster.png"
                    alt="Bespoke Sri Lanka Travel"
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover scale-105"
                    style={{ animation: 'parallaxDrift 30s ease-in-out alternate infinite' }}
                />
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f15]/80 via-[#0a1f15]/40 to-[#0a1f15]/90" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-12">
                <div className="animate-fade-in-up">
                    <span className="inline-block tracking-[0.3em] text-[10px] md:text-xs text-antique-gold font-nav uppercase mb-6 drop-shadow-sm font-semibold">
                        Yatara Ceylon
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-display text-white leading-[1.1] tracking-tight drop-shadow-lg mb-8 max-w-4xl mx-auto">
                        Curated Journeys For the <span className="italic text-antique-gold font-light">Discerning</span> Traveler
                    </h1>

                    <p className="text-white/80 font-nav font-light text-sm md:text-base tracking-widest max-w-2xl mx-auto mb-12">
                        EXPERIENCE SRI LANKA THROUGH EXCLUSIVE ACCESS AND UNPARALLELED LUXURY
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <Link href="/build-tour">
                            <Button className="h-[52px] md:h-14 px-10 md:px-12 bg-antique-gold hover:bg-white text-deep-emerald transition-colors duration-500 rounded-none font-nav font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase group">
                                Build Your Tour
                                <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] text-white/50 tracking-[0.15em] font-nav uppercase px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                            <span>500+ Itineraries</span>
                            <span className="w-1 h-1 rounded-full bg-antique-gold/50" />
                            <span>4.9/5 Rating</span>
                            <span className="w-1 h-1 rounded-full bg-antique-gold/50" />
                            <span>Local Specialists</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
