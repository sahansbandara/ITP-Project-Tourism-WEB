'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AuthoritySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    /* ── More pronounced parallax (Walkers-level) ── */
    const leftY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rightY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const leftScale = useTransform(scrollYProgress, [0, 0.4, 1], [1.08, 1, 0.96]);
    const rightScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.06]);

    /* ── Slow reveal for center text ── */
    const textOpacity = useTransform(scrollYProgress, [0.08, 0.3], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.08, 0.3], [60, 0]);

    /* ── Image inner zoom on scroll (Ken Burns-like) ── */
    const leftImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1]);
    const rightImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1.15]);

    /* ── Subtle rotation for depth ── */
    const leftRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);
    const rightRotate = useTransform(scrollYProgress, [0, 1], [1, -1]);

    return (
        <section
            ref={sectionRef}
            className="relative py-28 md:py-36 lg:py-44 bg-gradient-to-b from-[#FDFCFA] via-[#FAF8F5] to-[#F5F2ED] overflow-hidden"
        >
            {/* Background accents */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-antique-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deep-emerald/[0.02] rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

                    {/* ── Left Image (portrait — strong parallax) ── */}
                    <motion.div
                        style={{ y: leftY, scale: leftScale, rotate: leftRotate }}
                        className="lg:col-span-4 order-2 lg:order-1 lg:-mt-4 will-change-transform"
                    >
                        <div className="relative aspect-[2/3] w-full max-w-[400px] mx-auto lg:mx-0 rounded-[24px] overflow-hidden shadow-2xl shadow-black/10">
                            <motion.div
                                style={{ scale: leftImageScale }}
                                className="absolute inset-0 will-change-transform"
                            >
                                <Image
                                    src="/images/home/authority-left.webp"
                                    alt="A traveler experiencing Sri Lanka's scenic beauty"
                                    fill
                                    sizes="(max-width: 1024px) 80vw, 33vw"
                                    className="object-cover"
                                />
                            </motion.div>
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* ── Center Text Block (slow scroll-driven fade) ── */}
                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        className="lg:col-span-4 order-1 lg:order-2 flex flex-col justify-center lg:pt-16 lg:pb-8 will-change-transform"
                    >
                        {/* Micro-proof tag */}
                        <span className="inline-block text-[10px] tracking-[0.35em] font-medium text-antique-gold/80 uppercase mb-6">
                            Curated Private Travel&ensp;•&ensp;Sri Lanka
                        </span>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display text-deep-emerald leading-[1.15] mb-6">
                            Sri Lanka&rsquo;s Private
                            <br />
                            Travel{' '}
                            <span className="italic font-light">Curators</span>
                        </h2>

                        {/* Body */}
                        <p className="text-deep-emerald/60 font-light text-[15px] md:text-base leading-relaxed mb-8 max-w-sm">
                            Yatara Ceylon designs private itineraries for discerning travelers—pairing heritage access, refined stays, and seamless logistics. Every route is paced for comfort and curated for meaning.
                        </p>

                        {/* Gold divider */}
                        <div className="h-px w-16 bg-gradient-to-r from-antique-gold/60 to-transparent mb-7" />

                        {/* Proof bullets */}
                        <ul className="space-y-3 mb-10">
                            <li className="flex items-start gap-3 text-deep-emerald/70 text-sm font-light leading-relaxed">
                                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-antique-gold/50 shrink-0" />
                                Trusted partner for premium stays and private experiences across Sri Lanka
                            </li>
                            <li className="flex items-start gap-3 text-deep-emerald/70 text-sm font-light leading-relaxed">
                                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-antique-gold/50 shrink-0" />
                                Concierge planning + private transfers + vetted guides, end-to-end
                            </li>
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-6">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-semibold text-deep-emerald border border-deep-emerald/20 px-7 py-3.5 rounded-full hover:bg-deep-emerald hover:text-white hover:border-deep-emerald transition-all duration-400 group"
                            >
                                About Yatara
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/inquire"
                                className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-antique-gold hover:text-deep-emerald transition-colors duration-300 group"
                            >
                                Inquire
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* ── Right Image (landscape — opposite parallax + Ken Burns) ── */}
                    <motion.div
                        style={{ y: rightY, scale: rightScale, rotate: rightRotate }}
                        className="lg:col-span-4 order-3 lg:mt-32 will-change-transform"
                    >
                        <div className="relative aspect-[3/2] w-full max-w-[520px] mx-auto lg:ml-auto rounded-[24px] overflow-hidden shadow-2xl shadow-black/10">
                            <motion.div
                                style={{ scale: rightImageScale }}
                                className="absolute inset-0 will-change-transform"
                            >
                                <Image
                                    src="/images/home/authority-right.webp"
                                    alt="Aerial view of Sri Lanka's pristine coastline"
                                    fill
                                    sizes="(max-width: 1024px) 90vw, 33vw"
                                    className="object-cover"
                                />
                            </motion.div>
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent opacity-40 pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
