'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Plus } from 'lucide-react';

export default function AuthoritySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    /* ── Advanced Inner Parallax ──
       The container stays still, but the image inside moves.
    */
    const leftImageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
    const rightImageY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);

    // Float the center glass section
    const glassY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 lg:py-48 bg-white overflow-hidden"
        >
            {/* Pure white background, high-end constraint */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-center">

                {/* Walkers-style Massive Headline */}
                <div className="text-center mb-16 md:mb-24 z-20">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        <Leaf className="w-3.5 h-3.5" />
                        The Yatara Standard
                    </span>
                    <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-serif text-neutral-900 leading-[1.05] tracking-tight">
                        Sri Lanka&rsquo;s Premier
                        <br />
                        <span className="font-semibold text-neutral-800">Private Travel Curators</span>
                    </h2>
                </div>

                {/* ═══ Viewport-Constrained Asymmetric Grid ═══ */}
                <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 lg:min-h-[450px] xl:min-h-[550px]">

                    {/* ── Left Parallax Window ── */}
                    <div className="relative w-full md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[35%] aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 z-10">
                        <motion.div
                            style={{ y: leftImageY }}
                            className="absolute inset-0 w-full h-[130%] -top-[15%] will-change-transform"
                        >
                            <Image
                                src="/images/home/authority-left.webp"
                                alt="A traveler experiencing Sri Lanka's scenic beauty"
                                fill
                                sizes="(max-width: 1024px) 80vw, 30vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* ── Right Parallax Window ── */}
                    <div className="relative w-full md:absolute md:right-0 md:top-1/2 md:-translate-y-[40%] md:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/5 z-10">
                        <motion.div
                            style={{ y: rightImageY }}
                            className="absolute inset-0 w-full h-[130%] -top-[15%] will-change-transform"
                        >
                            <Image
                                src="/images/home/authority-right.webp"
                                alt="Aerial view of Sri Lanka's pristine coastline"
                                fill
                                sizes="(max-width: 1024px) 90vw, 40vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* ── Center Liquid Glass Content Panel ── */}
                    <motion.div
                        style={{ y: glassY }}
                        className="relative w-full md:w-[42%] z-30 mt-8 md:mt-0 will-change-transform"
                    >
                        {/* Genuine Liquid Glass Effect over White */}
                        <div className="bg-white/70 backdrop-blur-2xl border border-white p-8 lg:p-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group">

                            {/* Inner Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-5 leading-snug font-serif">
                                Experience the enchantment of Sri Lanka with Yatara Ceylon.
                            </h3>

                            <p className="text-neutral-600 text-[15px] md:text-base leading-[1.8] mb-8 font-light">
                                We meticulously craft private journeys across the island for discerning travelers—from bespoke honeymoon retreats and family adventures to curated group experiences marked by absolute exclusivity.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-4 text-neutral-800 text-[15px]">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-deep-emerald shrink-0" />
                                    Curated access to Sri Lanka&rsquo;s finest boutique stays
                                </li>
                                <li className="flex items-start gap-4 text-neutral-800 text-[15px]">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-deep-emerald shrink-0" />
                                    Trusted partner for premium global travel portfolios
                                </li>
                            </ul>

                            <Link
                                href="/about"
                                className="group/btn inline-flex items-center gap-4 transition-all duration-300"
                            >
                                <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-deep-emerald group-hover/btn:bg-neutral-900 transition-colors duration-300 shadow-md">
                                    <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </span>
                                <span className="text-[13px] tracking-[0.2em] font-bold text-neutral-900 uppercase group-hover/btn:text-deep-emerald transition-colors duration-300">
                                    Our Story
                                </span>
                            </Link>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
