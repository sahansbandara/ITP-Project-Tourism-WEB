'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';

const testimonials = [
    {
        title: 'A Honeymoon Beyond Imagination',
        quote:
            "Yatara didn\u2019t just plan our honeymoon \u2014 they orchestrated a love letter to Sri Lanka. Every detail, from the private tuk-tuk through Galle Fort to sunrise at Sigiriya, was flawless.",
        author: 'Charlotte & James',
        origin: 'United Kingdom',
    },
    {
        title: 'Personal Attention Like No Other',
        quote:
            'As someone who has traveled extensively through Asia, I can say the level of personal attention Yatara provides is genuinely rare. Our guide felt like a friend, not a service.',
        author: 'Marc Delafosse',
        origin: 'France',
    },
    {
        title: 'Effortless Family Adventure',
        quote:
            'We had three children under 10 and Yatara made it effortless. The private vehicle, the curated kid-friendly stops, the concierge checking in daily \u2014 it was a dream.',
        author: 'Sarah Mitchell',
        origin: 'Australia',
    },
    {
        title: 'Exceeded Every Expectation',
        quote:
            "The fixed-price guarantee gave us peace of mind, and the itinerary exceeded our expectations in every way. We\u2019re already planning our return.",
        author: 'Thomas & Anna Weber',
        origin: 'Germany',
    },
    {
        title: 'A Culinary Journey of Discovery',
        quote:
            'The attention to culinary detail was extraordinary. Every meal was a discovery \u2014 from street-side hoppers to private dining at a tea estate. Unforgettable.',
        author: 'Yuki Tanaka',
        origin: 'Japan',
    },
];

export default function RealExperiencesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Background parallax: ±40px
    const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
    // Watermark parallax: ±20px (different speed)
    const watermarkY = useTransform(scrollYProgress, [0, 1], [20, -20]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center"
        >
            {/* Layer A: Background image with parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y: prefersReducedMotion ? 0 : bgY }}
            >
                {/* Slight overscale to prevent edges showing during parallax */}
                <div className="absolute inset-[-40px] w-[calc(100%+80px)] h-[calc(100%+80px)]">
                    <Image
                        src="/images/home/curated-hillcountry.png"
                        alt="Scenic Sri Lanka landscape"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        quality={85}
                        loading="lazy"
                    />
                </div>
            </motion.div>

            {/* Layer B: Gradient overlay */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.60) 100%)',
                }}
            />

            {/* Layer C: Watermark text with separate parallax */}
            <motion.div
                className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none select-none"
                style={{ y: prefersReducedMotion ? 0 : watermarkY }}
            >
                <span
                    className="font-display uppercase tracking-wider text-white whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(80px, 12vw, 200px)',
                        opacity: 0.08,
                    }}
                >
                    Real Stories
                </span>
            </motion.div>

            {/* Layer D: Foreground slider content */}
            <div className="relative z-[3] w-full max-w-4xl mx-auto px-6 py-24">
                {/* Section label */}
                <p className="text-center font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-antique-gold mb-12">
                    Real Experiences
                </p>

                {/* Swiper slider */}
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop
                    speed={700}
                    autoplay={{ delay: 6000, disableOnInteraction: true }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="w-full"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="text-center px-4 md:px-12">
                                <h3 className="font-display text-lg md:text-xl text-antique-gold/80 italic mb-8">
                                    {t.title}
                                </h3>
                                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-10 font-light">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <div>
                                    <p className="font-nav text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
                                        {t.author}
                                    </p>
                                    <p className="font-nav text-[10px] tracking-widest uppercase text-white/50 mt-1.5">
                                        {t.origin}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation arrows — positioned mid-height of the section */}
                <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-between px-0 md:px-0">
                    <button
                        aria-label="Previous testimonial"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="pointer-events-auto -ml-2 md:-ml-6 lg:-ml-16 p-3 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        aria-label="Next testimonial"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="pointer-events-auto -mr-2 md:-mr-6 lg:-mr-16 p-3 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
