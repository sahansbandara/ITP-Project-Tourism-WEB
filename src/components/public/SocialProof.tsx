'use client';

import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        name: 'Charlotte & James',
        country: 'United Kingdom',
        quote: 'Yatara didn\'t just plan our honeymoon — they orchestrated a love letter to Sri Lanka. Every detail, from the private tuk-tuk through Galle Fort to sunrise at Sigiriya, was flawless.',
        rating: 5,
    },
    {
        name: 'Marc Delafosse',
        country: 'France',
        quote: 'As someone who has traveled extensively through Asia, I can say the level of personal attention Yatara provides is genuinely rare. Our guide felt like a friend, not a service.',
        rating: 5,
    },
    {
        name: 'Sarah Mitchell',
        country: 'Australia',
        quote: 'We had three children under 10 and Yatara made it effortless. The private vehicle, the curated kid-friendly stops, the concierge checking in daily — it was a dream.',
        rating: 5,
    },
    {
        name: 'Thomas & Anna Weber',
        country: 'Germany',
        quote: 'The fixed-price guarantee gave us peace of mind, and the itinerary exceeded our expectations in every way. We\'re already planning our return.',
        rating: 5,
    },
];

const stats = [
    { value: 500, suffix: '+', label: 'Bespoke Journeys Crafted' },
    { value: 4.9, suffix: ' / 5', label: 'Average Guest Rating', isFloat: true },
    { value: 12, suffix: '+', label: 'Years of Excellence' },
];

function AnimatedCounter({ value, suffix, isFloat }: { value: number; suffix: string; isFloat?: boolean }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        const step = value / 40;
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= value) {
                current = value;
                clearInterval(timer);
            }
            setDisplay(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
        }, 30);
        return () => clearInterval(timer);
    }, [visible, value, isFloat]);

    return (
        <div ref={ref}>
            <p className="text-4xl font-display text-antique-gold mb-2 tracking-tight">
                {display}{suffix}
            </p>
        </div>
    );
}

export default function SocialProof() {
    return (
        <section className="py-28 bg-deep-emerald text-off-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-antique-gold/5 rounded-full blur-3xl -ml-48 -mt-48" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-antique-gold/5 rounded-full blur-3xl -mr-40 -mb-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-antique-gold/3 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] font-medium text-antique-gold uppercase">
                        Trusted by Discerning Travelers
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display text-off-white leading-tight">
                        Voices from <span className="italic font-light text-antique-gold">Our Guests</span>
                    </h2>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-antique-gold to-transparent mt-8 mx-auto" />
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="relative liquid-glass-card-dark p-8 md:p-10 group rounded-xl"
                        >
                            {/* Glass shine effect */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-antique-gold/20 to-transparent" />
                            </div>

                            <Quote className="absolute top-6 right-6 w-10 h-10 text-antique-gold/10 group-hover:text-antique-gold/20 transition-colors duration-500" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-antique-gold text-antique-gold" />
                                ))}
                            </div>

                            <p className="text-off-white/80 font-light leading-relaxed mb-8 italic text-[15px]">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-antique-gold/20 border border-antique-gold/30 flex items-center justify-center text-antique-gold font-display text-sm">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="text-antique-gold font-medium text-sm tracking-wide">{t.name}</p>
                                    <p className="text-off-white/40 text-xs tracking-[0.15em] uppercase mt-0.5">{t.country}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Animated Trust Indicators */}
                <div className="border-t border-off-white/10 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="group">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
                                <p className="text-xs tracking-[0.2em] uppercase text-off-white/40 font-light group-hover:text-off-white/60 transition-colors">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
