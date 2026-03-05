'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const MOMENTS = [
    {
        time: '6:30 AM',
        label: 'Dawn',
        caption: 'Ascend Sigiriya before the crowds — golden light breaks over the ancient fortress as mist lifts from the jungle canopy.',
        image: '/images/home/journey-dawn.webp',
    },
    {
        time: '2:00 PM',
        label: 'Afternoon',
        caption: 'Walk through emerald tea fields in Ella, guided by a third-generation planter who knows every rolling hill by name.',
        image: '/images/home/journey-afternoon.webp',
    },
    {
        time: '6:45 PM',
        label: 'Dusk',
        caption: 'A private veranda dinner overlooking the Indian Ocean — candlelit, unhurried, with a menu crafted around your preferences.',
        image: '/images/home/journey-dusk.webp',
    },
];

export default function JourneyDayStory() {
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0.05, 0.22], [0, 1]);
    const y = useTransform(scrollYProgress, [0.05, 0.22], [40, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #0a1f15 0%, #07291b 100%)',
            }}
        >
            {/* Subtle noise overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px 128px',
                }}
            />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Header */}
                <motion.div
                    style={{ opacity: prefersReducedMotion ? 1 : opacity, y: prefersReducedMotion ? 0 : y }}
                    className="text-center mb-16 md:mb-20 will-change-transform"
                >
                    <span className="block text-[10px] tracking-[0.3em] font-nav text-antique-gold/70 uppercase mb-4 font-semibold">
                        Experience Preview
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-4">
                        A Day on Your{' '}
                        <span className="italic font-light text-antique-gold">Journey</span>
                    </h2>
                    <p className="text-sm font-nav text-white/40 tracking-wide max-w-lg mx-auto">
                        From first light to final course — every moment designed with intention.
                    </p>
                </motion.div>

                {/* Timeline — 3 moments */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {MOMENTS.map((moment, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-6 bg-deep-emerald/30">
                                <Image
                                    src={moment.image}
                                    alt={moment.caption}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                                />
                                {/* Subtle vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                            </div>

                            {/* Time label */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-antique-gold font-display text-lg">
                                    {moment.time}
                                </span>
                                <span className="h-px flex-1 bg-antique-gold/20" />
                                <span className="text-[10px] tracking-[0.2em] font-nav uppercase text-white/30 font-medium">
                                    {moment.label}
                                </span>
                            </div>

                            {/* Caption */}
                            <p className="text-white/70 font-light text-sm leading-relaxed">
                                {moment.caption}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Connecting line (desktop only) */}
                <div className="hidden md:block mt-12">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-antique-gold/20 to-transparent" />
                </div>
            </div>
        </section>
    );
}
