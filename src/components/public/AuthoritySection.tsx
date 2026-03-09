'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function AuthoritySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    /* ── Smooth Spring Parallax ── */
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 15,
        restDelta: 0.001
    });

    const leftImageY = useTransform(smoothProgress, [0, 1], ['-20%', '20%']);
    const rightImageY = useTransform(smoothProgress, [0, 1], ['20%', '-20%']);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 lg:py-24 bg-white overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 flex flex-col items-center">

                {/* Massive 2-Tone Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-center mb-16 lg:mb-24 z-20"
                >
                    <h2 className="font-serif leading-[1.05] tracking-tight">
                        <span className="block text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] text-neutral-900 font-medium mb-1">
                            Sri Lanka&rsquo;s Premier
                        </span>
                        <span className="block text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-[#CFB53B]">
                            Luxury Travel Curators
                        </span>
                    </h2>
                </motion.div>

                {/* ═══ Clean Asymmetric Grid (Walkers exact structural match) ═══ */}
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">

                    {/* ── Left Parallax Window (Portrait) ── */}
                    <div className="w-full lg:w-[35%] overflow-visible">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 z-10"
                        >
                            <motion.div
                                style={{ y: leftImageY }}
                                className="absolute inset-0 w-full h-[140%] -top-[20%] will-change-transform"
                            >
                                <Image
                                    src="/images/home/authority-left.webp"
                                    alt="A traveler experiencing Sri Lanka's scenic beauty"
                                    fill
                                    sizes="(max-width: 1024px) 80vw, 30vw"
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ── Center Text Content ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="w-full lg:w-[35%] z-30 pt-4 lg:pt-16 flex flex-col"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 leading-snug font-serif">
                            Experience the enchantment of Sri Lanka with Yatara Ceylon...
                        </h3>

                        <p className="text-neutral-600 text-base md:text-lg leading-[1.85] mb-8 font-light">
                            Yatara Ceylon sets the absolute standard in the Sri Lankan premium tourism industry. We organize deeply bespoke journeys for individuals, couples on holiday, and distinguished groups who demand exclusive experiences, extreme privacy, and unparalleled immersion.
                        </p>

                        <ul className="space-y-5 mb-12">
                            <li className="flex items-start gap-4 text-neutral-800 text-base md:text-[17px]">
                                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#CFB53B] shrink-0" />
                                Exclusive access to Sri Lanka&rsquo;s finest luxury portfolio
                            </li>
                            <li className="flex items-start gap-4 text-neutral-800 text-base md:text-[17px]">
                                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#CFB53B] shrink-0" />
                                Trusted regional partner for global elite travel brands
                            </li>
                        </ul>

                        <div className="flex items-center">
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-4 transition-all duration-500"
                            >
                                <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#113d33] group-hover:bg-[#CFB53B] transition-colors duration-500 shadow-md">
                                    <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                                </span>
                                <span className="text-[14px] tracking-[0.2em] font-bold text-[#113d33] group-hover:text-[#CFB53B] uppercase transition-colors duration-500">
                                    About Us
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* ── Right Parallax Window (Landscape, Float Right) ── */}
                    <div className="w-full lg:w-[30%] lg:pt-40">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-black/5 z-10 lg:ml-auto"
                        >
                            <motion.div
                                style={{ y: rightImageY }}
                                className="absolute inset-0 w-full h-[140%] -top-[20%] will-change-transform"
                            >
                                <Image
                                    src="/images/home/authority-right.webp"
                                    alt="Aerial view of Sri Lanka's pristine coastline"
                                    fill
                                    sizes="(max-width: 1024px) 90vw, 40vw"
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
