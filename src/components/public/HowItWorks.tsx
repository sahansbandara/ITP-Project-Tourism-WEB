import { FileText, Compass, Plane } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        number: '01',
        icon: FileText,
        title: 'Request Your Proposal',
        description: 'Share your travel vision — dates, interests, pace. Our concierge team begins crafting your bespoke itinerary within 2 hours.',
    },
    {
        number: '02',
        icon: Compass,
        title: 'We Curate & Refine',
        description: 'Your dedicated travel designer builds a personalized journey, hand-selecting experiences, accommodations, and private guides.',
    },
    {
        number: '03',
        icon: Plane,
        title: 'Confirm & Travel',
        description: 'Lock in your fixed-price itinerary. From airport pickup to your last sunset, every detail is handled with private transfers and 24/7 support.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-32 bg-off-white relative overflow-hidden">
            {/* Background mesh gradient */}
            <div className="absolute inset-0 bg-mesh-gradient" />

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-24">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] font-medium text-antique-gold uppercase">
                        Seamless from Start to Finish
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display text-deep-emerald leading-tight">
                        How <span className="italic font-light">It Works</span>
                    </h2>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-antique-gold to-transparent mt-8 mx-auto" />
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                    {/* Connecting glowing line (desktop only) */}
                    <div className="hidden md:block absolute top-20 left-[16.67%] right-[16.67%]">
                        <div className="h-px bg-gradient-to-r from-antique-gold/10 via-antique-gold/30 to-antique-gold/10" />
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-antique-gold/60 to-transparent animate-pulse-glow" style={{ animationDuration: '3s' }} />
                    </div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            {/* Icon container — Liquid Glass */}
                            <div className="relative mb-10">
                                <div className="h-24 w-24 rounded-2xl liquid-glass-card flex items-center justify-center group-hover:border-antique-gold/40 relative z-10">
                                    <step.icon className="h-8 w-8 text-deep-emerald group-hover:text-antique-gold transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <span className="absolute -top-3 -right-3 text-[10px] tracking-[0.2em] font-semibold text-antique-gold liquid-glass-gold px-3 py-1 rounded-lg z-20">
                                    {step.number}
                                </span>
                                {/* Subtle gold glow on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-antique-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-150" />
                            </div>

                            <h3 className="text-xl font-display text-deep-emerald mb-4 tracking-wide">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[300px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <Link
                        href="/inquire"
                        className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-deep-emerald border border-deep-emerald/30 px-10 py-4 hover:bg-deep-emerald hover:text-antique-gold transition-all duration-500 rounded-none group"
                    >
                        Start Your Journey
                        <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-500">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
