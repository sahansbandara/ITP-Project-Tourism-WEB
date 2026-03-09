'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function AuthoritySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    /* ── Advanced Inner Parallax ──
       The container stays still, but the image inside moves vertically.
    */
    const leftImageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
    const rightImageY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 lg:py-24 bg-white overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 flex flex-col items-center">

                {/* Massive Headline */}
                <div className="text-center mb-16 lg:mb-20 z-20">
                    <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-serif text-neutral-900 leading-[1.05] tracking-tight">
                        Sri Lanka&rsquo;s Leading
                        <br />
                        <span className="font-semibold text-neutral-900">Destination Management Company</span>
                    </h2>
                </div>

                {/* ═══ Clean Asymmetric Grid (Walkers exact structural match) ═══ */}
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">

                    {/* ── Left Parallax Window (Portrait) ── */}
                    <div className="w-full lg:w-[35%] overflow-visible">
                        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 z-10">
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
                    </div>

                    {/* ── Center Text Content (Clean, No Box) ── */}
                    <div className="w-full lg:w-[35%] z-30 pt-4 lg:pt-10 flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-6 leading-snug font-serif">
                            Experience the enchantment of Sri Lanka with Yatara Ceylon...
                        </h3>

                        <p className="text-neutral-600 text-sm md:text-base leading-[1.85] mb-8 font-light">
                            Yatara Ceylon has been the leader in the Sri Lankan premium tourism industry, organizing bespoke tours for couples on holiday or honeymoon, for individual adventurers and nature lovers, as well as for special interest groups and corporate retreats.
                        </p>

                        <ul className="space-y-4 mb-12">
                            <li className="flex items-start gap-4 text-neutral-800 text-sm md:text-[15px]">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                                A subsidiary of Sri Lanka&rsquo;s finest luxury portfolio
                            </li>
                            <li className="flex items-start gap-4 text-neutral-800 text-sm md:text-[15px]">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                                Trusted partner for leading global travel brands
                            </li>
                        </ul>

                        <div className="flex items-center">
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-4 transition-all duration-300"
                            >
                                <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a66] group-hover:bg-[#122440] transition-colors duration-300 shadow-md">
                                    <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                                </span>
                                <span className="text-[13px] tracking-[0.2em] font-bold text-[#1e3a66] uppercase transition-colors duration-300">
                                    About Us
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* ── Right Parallax Window (Landscape, Float Right) ── */}
                    <div className="w-full lg:w-[30%] lg:pt-32">
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-black/5 z-10 lg:ml-auto">
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
                    </div>

                </div>
            </div>
        </section>
    );
}
