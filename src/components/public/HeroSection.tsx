'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
    {
        tagline: 'Elite',
        title: 'Island Experience',
        subtitle: 'Discover the',
        description: 'Curated itineraries, private chauffeur-guides, and unparalleled luxury — crafted around you by our dedicated concierge team.',
    },
    {
        tagline: 'Timeless',
        title: 'Heritage Journeys',
        subtitle: 'Explore',
        description: 'Ancient kingdoms, sacred temples, and colonial grandeur — unlock 3,000 years of living history with private expert historians.',
    },
    {
        tagline: 'Pristine',
        title: 'Coastal Retreats',
        subtitle: 'Unwind in',
        description: 'From Mirissa\'s whale-watching shores to Trincomalee\'s turquoise waters — private beach villas and curated coastal escapes.',
    },
];

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
    }, []);

    // Auto-cycle slides
    useEffect(() => {
        const interval = setInterval(() => {
            handleSlideChange((currentSlide + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleSlideChange = (index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 400);
    };

    const slide = heroSlides[currentSlide];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-deep-emerald font-sans">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full scale-105"
                    style={{ animation: 'parallaxDrift 20s ease-in-out alternate infinite' }}
                    poster="/images/home/hero-poster.png"
                >
                    <source src="/Hero-Section.mp4" type="video/mp4" />
                </video>
                {/* Multi-layer overlay for cinematic depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-emerald-950/20 to-emerald-950/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-emerald-950/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-off-white px-4 md:px-8 max-w-6xl mx-auto">
                <div className={`text-center space-y-8 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    {/* Label Badge */}
                    <span className="inline-block py-2.5 px-8 text-[10px] tracking-[0.4em] uppercase font-medium text-white/90 liquid-glass-button mb-4">
                        Bespoke Sri Lanka
                    </span>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display tracking-tight leading-[1.02] text-white drop-shadow-2xl">
                        {slide.subtitle} <span className="italic font-light text-antique-gold">{slide.tagline}</span> <br />
                        {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed tracking-wide drop-shadow-md">
                        {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
                        <Link href="/inquire">
                            <Button className="h-14 px-12 bg-transparent border border-white/40 hover:bg-white hover:text-deep-emerald text-white font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-500 rounded-none flex items-center gap-4 group backdrop-blur-sm">
                                Request a Curated Proposal
                                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/build-tour">
                            <Button className="h-14 px-12 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-antique-gold hover:text-deep-emerald hover:border-antique-gold font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-500 rounded-none">
                                Build Your Tour
                            </Button>
                        </Link>
                    </div>

                    <p className="text-off-white/40 text-xs tracking-[0.15em] uppercase font-light">
                        Reply within 2 hours · No obligation · Fully bespoke
                    </p>
                </div>

                {/* Slide Navigation Dots */}
                <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-3">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSlideChange(idx)}
                            className={`transition-all duration-500 rounded-full ${currentSlide === idx
                                    ? 'w-10 h-2 bg-antique-gold'
                                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                                }`}
                        />
                    ))}
                </div>

                {/* Trust micro-badges — floating at bottom */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-off-white/40 text-[11px] tracking-[0.15em] uppercase font-light">
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

            {/* Side nav arrows */}
            <button
                onClick={() => handleSlideChange((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full liquid-glass-button flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
                <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
                onClick={() => handleSlideChange((currentSlide + 1) % heroSlides.length)}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full liquid-glass-button flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
                <ChevronRight className="w-5 h-5 text-white" />
            </button>
        </div>
    );
}
