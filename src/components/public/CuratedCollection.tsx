'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useRef } from 'react';

const curatedJourneys = [
    {
        id: 'hill-country',
        title: 'The Hill Country Odyssey',
        description: 'A bespoke journey through misty tea plantations, colonial bungalows, and cascading waterfalls.',
        image: '/images/home/curated-hillcountry.png',
    },
    {
        id: 'southern-coast',
        title: 'Southern Coast Serenity',
        description: 'Private villas, secluded golden beaches, and the heritage of Galle Fort.',
        image: '/images/home/curated-southcoast.png',
    },
    {
        id: 'ancient-kingdoms',
        title: 'Ancient Kingdom Trails',
        description: 'Exclusive access to the cultural triangle — Sigiriya and Polonnaruwa with private historians.',
        image: '/images/home/curated-kingdoms.png',
    },
    {
        id: 'wildlife-safari',
        title: 'Wildlife & Safari Circuit',
        description: 'Leopards in Yala, elephants in Udawalawe — Sri Lanka\'s ultimate wildlife immersion.',
        image: '/images/home/signature-wildlife.png',
    },
    {
        id: 'spiritual-journey',
        title: 'Sacred Temple Pilgrimage',
        description: 'Ancient Buddhist temples, Hindu kovils, and colonial churches across 3,000 years of faith.',
        image: '/images/home/signature-heritage.png',
    },
];

export default function CuratedCollection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const amount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-32 bg-off-white text-deep-emerald relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-antique-gold/3 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] font-medium text-antique-gold uppercase">
                            Handpicked Experiences
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display text-deep-emerald leading-tight">
                            The Curated <span className="italic font-light">Collection</span>
                        </h2>
                        <div className="h-px w-24 bg-gradient-to-r from-antique-gold to-transparent mt-6" />
                    </div>

                    {/* Scroll controls */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full liquid-glass-card flex items-center justify-center hover:border-antique-gold/40 transition-all"
                        >
                            <ChevronLeft className="w-5 h-5 text-deep-emerald" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full liquid-glass-card flex items-center justify-center hover:border-antique-gold/40 transition-all"
                        >
                            <ChevronRight className="w-5 h-5 text-deep-emerald" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin -mx-4 px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {curatedJourneys.map((journey) => (
                        <div
                            key={journey.id}
                            className="group relative overflow-hidden rounded-2xl flex-shrink-0 w-[340px] md:w-[380px] h-[500px] snap-center cursor-pointer"
                        >
                            <Image
                                src={journey.image}
                                alt={journey.title}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-emerald/95 via-deep-emerald/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out z-10">
                                <h3 className="text-2xl font-display tracking-wide text-white mb-3 group-hover:text-antique-gold transition-colors duration-500 drop-shadow-md">
                                    {journey.title}
                                </h3>
                                <p className="text-white/70 font-light text-[13px] mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                                    {journey.description}
                                </p>
                                <Link
                                    href="/packages"
                                    className="inline-flex items-center text-[11px] tracking-[0.2em] text-antique-gold hover:text-white uppercase font-semibold transition-colors duration-300 w-max opacity-0 group-hover:opacity-100"
                                >
                                    View Journey <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
