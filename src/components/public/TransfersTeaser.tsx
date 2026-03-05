'use client';

import Link from 'next/link';
import { ArrowRight, Plane, Route, Clock } from 'lucide-react';

const teaserTiles = [
    {
        icon: Plane,
        title: 'Executive Airport Passage',
        description: 'Meet & greet, porter assistance, seamless arrival to vehicle.',
        href: '/transfers/airport-executive',
    },
    {
        icon: Route,
        title: 'Intercity Executive',
        description: 'Point-to-point luxury between signature destinations.',
        href: '/transfers/intercity-executive',
    },
    {
        icon: Clock,
        title: 'On-Demand Chauffeur',
        description: 'Hourly retainers, multi-stop days, premium standby.',
        href: '/transfers/chauffeur-reserve',
    },
];

export default function TransfersTeaser() {
    return (
        <section className="py-24 bg-deep-emerald relative overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-antique-gold/[0.03] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-antique-gold/[0.02] rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Section heading */}
                <div className="text-center mb-16">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-antique-gold font-nav font-medium">
                        Private Transport
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mt-4 mb-5">
                        Transfers, <span className="italic font-light text-antique-gold">Elevated</span>
                    </h2>
                    <p className="text-white/50 font-light max-w-xl mx-auto text-sm leading-relaxed">
                        Premium vehicles, licensed chauffeurs, and 24/7 concierge — from airport arrival to every destination along the way.
                    </p>
                    <div className="h-px w-20 bg-antique-gold/30 mx-auto mt-8" />
                </div>

                {/* Three tiles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                    {teaserTiles.map((tile) => (
                        <Link
                            key={tile.href}
                            href={tile.href}
                            className="group relative border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 hover:border-antique-gold/30 hover:bg-white/[0.06] transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-full bg-antique-gold/10 flex items-center justify-center mb-6 group-hover:bg-antique-gold/20 transition-colors duration-500">
                                <tile.icon className="w-5 h-5 text-antique-gold" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-xl text-white mb-3 group-hover:text-antique-gold transition-colors duration-500">
                                {tile.title}
                            </h3>
                            <p className="text-white/40 text-sm font-light leading-relaxed mb-6">
                                {tile.description}
                            </p>
                            <div className="flex items-center gap-2 text-antique-gold/70 group-hover:text-antique-gold transition-colors duration-300">
                                <span className="text-[10px] tracking-[0.2em] uppercase font-nav">Explore</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/transfers"
                        className="inline-flex items-center gap-3 px-10 py-4 border border-antique-gold/30 text-antique-gold hover:bg-antique-gold/10 font-nav uppercase tracking-[0.2em] text-xs transition-all duration-300"
                    >
                        Explore All Transfers
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
