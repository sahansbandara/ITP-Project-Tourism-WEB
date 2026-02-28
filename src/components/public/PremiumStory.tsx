'use client';

import Image from 'next/image';
import { ShieldCheck, Compass, HeartHandshake } from 'lucide-react';

const differentiators = [
    {
        title: "Subject-Matter Experts",
        description: "Travel with archaeologists through Anuradhapura, or track leopards with seasoned naturalists in Yala. Our guides are authorities, not just drivers.",
        icon: Compass
    },
    {
        title: "Exclusive Access",
        description: "Skip the crowds with private temple viewings, after-hours museum tours, and unlisted boutique villas normally inaccessible to the public.",
        icon: ShieldCheck
    },
    {
        title: "24/7 White-Glove Support",
        description: "From the moment you land to your departure, a dedicated concierge team monitors your journey, handling impromptu requests seamlessly.",
        icon: HeartHandshake
    }
];

export default function PremiumStory() {
    return (
        <section className="py-24 md:py-32 bg-white border-b border-black/[0.03]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Image Split */}
                    <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto lg:mx-0 rounded-sm overflow-hidden bg-gray-100">
                        <Image
                            src="/images/home/signature-heritage.png" // Placeholder
                            alt="Yatara Ceylon Experience"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                        {/* Elegant inset border detail */}
                        <div className="absolute inset-4 border border-white/20 rounded-sm pointer-events-none" />
                    </div>

                    {/* Right Copy Split */}
                    <div className="max-w-xl">
                        <span className="block text-[10px] tracking-[0.2em] font-nav text-deep-emerald/50 uppercase mb-6">
                            The Yatara Standard
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-deep-emerald leading-tight mb-8">
                            Beyond <span className="italic font-light">Luxury</span>
                        </h2>

                        <div className="space-y-12">
                            {differentiators.map((diff, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-12 h-12 rounded-full border border-antique-gold/30 flex items-center justify-center text-antique-gold group-hover:bg-antique-gold group-hover:text-white transition-colors duration-500">
                                            <diff.icon className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display text-deep-emerald mb-2 tracking-wide">
                                            {diff.title}
                                        </h3>
                                        <p className="text-sm font-light leading-relaxed text-deep-emerald/70">
                                            {diff.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
