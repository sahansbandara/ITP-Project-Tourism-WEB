'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
    return (
        <section className="py-24 md:py-32 bg-[#F9F9F9]">
            <div className="max-w-[800px] mx-auto px-6 text-center">
                {/* Minimalist Trust Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-deep-emerald/5 rounded-full mb-8">
                    <CheckCircle2 className="w-3.5 h-3.5 text-antique-gold" />
                    <span className="text-[10px] font-nav font-semibold tracking-widest text-deep-emerald/70 uppercase">
                        Vetted Excellence
                    </span>
                </div>

                {/* Core Promise */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-deep-emerald leading-[1.1] mb-10 tracking-tight">
                    Your Bespoke Journey Begins <span className="italic font-light text-antique-gold">Here</span>
                </h2>

                <p className="text-deep-emerald/60 font-light text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto">
                    Connect with our dedicated travel designers today. Whether you know exactly what you want or need inspiration, we handle every intricate detail.
                </p>

                {/* Conversion Action */}
                <div className="flex flex-col items-center gap-6">
                    <Link href="/inquire">
                        <Button className="h-14 px-12 bg-deep-emerald hover:bg-antique-gold text-white hover:text-deep-emerald transition-colors duration-500 rounded-none font-nav font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase group">
                            Request a Proposal
                            <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-500 group-hover:translate-x-1" />
                        </Button>
                    </Link>

                    {/* Reassurance Microcopy */}
                    <p className="text-[10px] font-nav text-deep-emerald/40 tracking-[0.15em] uppercase">
                        Response within 24 hours · No obligation
                    </p>
                </div>
            </div>
        </section>
    );
}
