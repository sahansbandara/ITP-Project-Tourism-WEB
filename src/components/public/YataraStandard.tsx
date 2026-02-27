import { Shield, Gem, UserCheck, Clock } from 'lucide-react';

const standards = [
    {
        icon: UserCheck,
        title: 'Verified Private Drivers',
        description: 'Chauffeur-guides rigorously vetted for absolute discretion, safety, and deep local expertise.',
    },
    {
        icon: Gem,
        title: 'Bespoke Planning',
        description: 'Every detail meticulously curated to your exact pace and preferences, ensuring a flawless journey.',
    },
    {
        icon: Clock,
        title: '24/7 Concierge',
        description: 'Round-the-clock dedicated support from our island specialists for complete peace of mind.',
    },
    {
        icon: Shield,
        title: 'Fixed-Price Guarantee',
        description: 'Transparent, premium pricing with zero hidden fees. Pure luxury without compromise.',
    }
];

export default function YataraStandard() {
    return (
        <section className="py-32 bg-off-white relative overflow-hidden">
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-mesh-gradient" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] font-medium text-antique-gold uppercase">
                        Uncompromising Quality
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-deep-emerald">
                        The Yatara Standard
                    </h2>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-antique-gold to-transparent mt-8 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {standards.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            {/* Liquid Glass Icon Container */}
                            <div className="relative mb-8">
                                <div className="h-20 w-20 rounded-2xl liquid-glass-card flex items-center justify-center group-hover:border-antique-gold/40">
                                    <item.icon className="h-7 w-7 text-deep-emerald group-hover:text-antique-gold transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                {/* Glow on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-antique-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-150" />
                            </div>
                            <h3 className="text-lg font-display font-semibold text-deep-emerald mb-3">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[260px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
