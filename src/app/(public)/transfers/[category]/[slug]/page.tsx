import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowRight,
    ArrowLeft,
    Check,
    Plus,
    ChevronDown,
    Users,
    Briefcase,
    Shield,
    Clock,
    Star,
    Phone,
} from 'lucide-react';
import { transferCategories, getPackageBySlug, vehicleTiers, getVehicleTier } from '@/data/transfers';

// ─────────────────────────────────────────────────────────
// Static generation for all package pages
// ─────────────────────────────────────────────────────────
export function generateStaticParams() {
    const params: { category: string; slug: string }[] = [];
    transferCategories.forEach((cat) => {
        cat.packages.forEach((pkg) => {
            params.push({ category: cat.slug, slug: pkg.slug });
        });
    });
    return params;
}

// ─────────────────────────────────────────────────────────
// Dynamic metadata
// ─────────────────────────────────────────────────────────
export async function generateMetadata(props: {
    params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
    const { category, slug } = await props.params;
    const result = getPackageBySlug(category, slug);

    if (!result) {
        return { title: 'Package Not Found' };
    }

    const { pkg } = result;

    return {
        title: `${pkg.title} | Yatara Ceylon Transfers`,
        description: pkg.tagline,
    };
}

// ─────────────────────────────────────────────────────────
// Main Page Component (Server Component)
// ─────────────────────────────────────────────────────────
export default async function PackageDetailPage(props: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await props.params;
    const result = getPackageBySlug(category, slug);

    if (!result) {
        notFound();
    }

    const { category: categoryData, pkg } = result;

    return (
        <>
            {/* ───────────────────────────────────────────────────────────────────
                SECTION 1: HERO
                ─────────────────────────────────────────────────────────────────── */}
            <section className="bg-deep-emerald text-off-white pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <nav className="mb-12 flex items-center gap-2 text-sm font-nav">
                        <Link href="/transfers" className="hover:text-antique-gold transition-colors">
                            Transfers
                        </Link>
                        <span className="text-antique-gold">/</span>
                        <Link
                            href={`/transfers/${category}`}
                            className="hover:text-antique-gold transition-colors"
                        >
                            {categoryData.title}
                        </Link>
                        <span className="text-antique-gold">/</span>
                        <span className="text-antique-gold">{pkg.title}</span>
                    </nav>

                    {/* Title & Tagline */}
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 leading-tight">
                        {pkg.title}
                    </h1>
                    <p className="text-xl font-light mb-8 max-w-2xl text-off-white/90">
                        {pkg.tagline}
                    </p>

                    {/* Price Badge */}
                    <div className="mb-12 flex items-baseline gap-3">
                        <span className="font-nav text-sm text-antique-gold font-semibold uppercase tracking-wide">
                            Starting from
                        </span>
                        <span className="font-serif text-4xl font-bold text-antique-gold">
                            {pkg.startingFrom}
                        </span>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4 items-center mb-12">
                        <Link
                            href="/inquire"
                            className="bg-antique-gold text-deep-emerald px-8 py-4 font-nav font-bold rounded-sm hover:bg-antique-gold/90 transition-colors inline-flex items-center gap-2"
                        >
                            Request a Quote
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Gold Divider */}
                    <div className="h-px bg-gradient-to-r from-antique-gold via-antique-gold/50 to-transparent max-w-xs"></div>
                </div>
            </section>

            {/* ───────────────────────────────────────────────────────────────────
                SECTION 2: WHAT'S INCLUDED
                ─────────────────────────────────────────────────────────────────── */}
            <section className="bg-off-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Label */}
                    <div className="mb-12">
                        <span className="font-nav text-sm font-bold text-antique-gold uppercase tracking-widest">
                            What's Included
                        </span>
                        <h2 className="font-serif text-4xl font-bold mt-2 text-deep-emerald">
                            Everything You Need
                        </h2>
                    </div>

                    {/* Inclusions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pkg.inclusions.map((inclusion, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Check className="w-5 h-5 text-antique-gold" />
                                </div>
                                <p className="font-nav text-deep-emerald/80">{inclusion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────────────────────────────────────────────────────────────────
                SECTION 3: VEHICLE CLASSES
                ─────────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Label */}
                    <div className="mb-12">
                        <span className="font-nav text-sm font-bold text-antique-gold uppercase tracking-widest">
                            Choose Your Vehicle
                        </span>
                        <h2 className="font-serif text-4xl font-bold mt-2 text-deep-emerald">
                            Vehicle Classes
                        </h2>
                    </div>

                    {/* Vehicle Tiers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pkg.vehicleTiers.map((tierSlug) => {
                            const tier = getVehicleTier(tierSlug);
                            if (!tier) return null;

                            return (
                                <div
                                    key={tier.slug}
                                    className="border border-deep-emerald/10 rounded-lg p-8 hover:shadow-lg transition-shadow"
                                >
                                    {/* Tier Name */}
                                    <h3 className="font-serif text-2xl font-bold text-deep-emerald mb-2">
                                        {tier.name}
                                    </h3>
                                    <p className="text-sm text-deep-emerald/60 mb-6 font-nav">
                                        {tier.tagline}
                                    </p>

                                    {/* Vehicles */}
                                    <p className="font-nav text-xs text-antique-gold font-bold uppercase tracking-wide mb-1">
                                        Vehicles
                                    </p>
                                    <p className="text-deep-emerald/70 mb-6 text-sm">{tier.vehicles}</p>

                                    {/* Divider */}
                                    <div className="h-px bg-deep-emerald/10 my-6"></div>

                                    {/* Capacity */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <p className="font-nav text-xs text-deep-emerald/60 uppercase tracking-wide mb-1">
                                                Max Guests
                                            </p>
                                            <p className="font-bold text-deep-emerald text-lg">
                                                {tier.maxGuests}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-nav text-xs text-deep-emerald/60 uppercase tracking-wide mb-1">
                                                Luggage
                                            </p>
                                            <p className="text-sm text-deep-emerald">{tier.maxLuggage}</p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-deep-emerald/10 my-6"></div>

                                    {/* Features */}
                                    <p className="font-nav text-xs text-deep-emerald/60 uppercase tracking-wide mb-3">
                                        Features
                                    </p>
                                    <ul className="space-y-2">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-antique-gold mt-1">●</span>
                                                <span className="text-sm text-deep-emerald/70">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ───────────────────────────────────────────────────────────────────
                SECTION 4: ITINERARY / YOUR JOURNEY
                ─────────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-deep-emerald/[0.03]">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Label */}
                    <div className="mb-12">
                        <span className="font-nav text-sm font-bold text-antique-gold uppercase tracking-widest">
                            Your Journey
                        </span>
                        <h2 className="font-serif text-4xl font-bold mt-2 text-deep-emerald">
                            How It Works
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-3xl">
                        {pkg.itinerary.map((step, idx) => (
                            <div key={idx} className="mb-12 flex gap-6 relative">
                                {/* Vertical Line (except last) */}
                                {idx < pkg.itinerary.length - 1 && (
                                    <div className="absolute left-6 top-16 w-px h-16 bg-antique-gold/30"></div>
                                )}

                                {/* Step Number Circle */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-antique-gold text-deep-emerald flex items-center justify-center font-serif font-bold text-lg">
                                        {step.step}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="pt-2">
                                    <h3 className="font-serif text-xl font-bold text-deep-emerald mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-deep-emerald/70 font-nav text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────────────────────────────────────────────────────────────────
                SECTION 5: SERVICE STANDARDS
                ─────────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Label */}
                    <div className="mb-12">
                        <span className="font-nav text-sm font-bold text-antique-gold uppercase tracking-widest">
                            Our Standards
                        </span>
                        <h2 className="font-serif text-4xl font-bold mt-2 text-deep-emerald">
                            Service Excellence
                        </h2>
                    </div>

                    {/* Standards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Licensed Chauffeurs */}
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-14 h-14 rounded-full bg-antique-gold/10 flex items-center justify-center">
                                    <Briefcase className="w-7 h-7 text-antique-gold" />
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-deep-emerald mb-2">
                                SLTDA Licensed Chauffeurs
                            </h3>
                            <p className="text-sm text-deep-emerald/60 font-nav">
                                All drivers professionally certified and background-verified
                            </p>
                        </div>

                        {/* 2. Comprehensively Insured */}
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-14 h-14 rounded-full bg-antique-gold/10 flex items-center justify-center">
                                    <Shield className="w-7 h-7 text-antique-gold" />
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-deep-emerald mb-2">
                                Comprehensively Insured
                            </h3>
                            <p className="text-sm text-deep-emerald/60 font-nav">
                                Full coverage including passenger liability and vehicle protection
                            </p>
                        </div>

                        {/* 3. GPS Monitored Fleet */}
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-14 h-14 rounded-full bg-antique-gold/10 flex items-center justify-center">
                                    <Star className="w-7 h-7 text-antique-gold" />
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-deep-emerald mb-2">
                                GPS Monitored Fleet
                            </h3>
                            <p className="text-sm text-deep-emerald/60 font-nav">
                                Real-time vehicle tracking for your peace of mind
                            </p>
                        </div>

                        {/* 4. Complimentary Wait Time */}
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-14 h-14 rounded-full bg-antique-gold/10 flex items-center justify-center">
                                    <Clock className="w-7 h-7 text-antique-gold" />
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-deep-emerald mb-2">
                                Complimentary Wait Time
                            </h3>
                            <p className="text-sm text-deep-emerald/60 font-nav">
                                Generous wait allowances at no additional charge
                            </p>
                        </div>

                        {/* 5. Climate-Controlled Vehicles */}
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-14 h-14 rounded-full bg-antique-gold/10 flex items-center justify-center">
                                    <Users className="w-7 h-7 text-antique-gold" />
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-deep-emerald mb-2">
                                Climate-Controlled Vehicles
                            </h3>
                            <p className="text-sm text-deep-emerald/60 font-nav">
                                Premium comfort in all weather conditions
                            </p>
                        </div>

                        {/* 6. Privacy & Discretion */}
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-14 h-14 rounded-full bg-antique-gold/10 flex items-center justify-center">
                                    <Shield className="w-7 h-7 text-antique-gold" />
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-deep-emerald mb-2">
                                Privacy & Discretion
                            </h3>
                            <p className="text-sm text-deep-emerald/60 font-nav">
                                Confidential service you can trust completely
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────────────────────────────────────────────────────────────────
                SECTION 6: ADD-ONS / ENHANCE YOUR EXPERIENCE
                ─────────────────────────────────────────────────────────────────── */}
            {pkg.addOns && pkg.addOns.length > 0 && (
                <section className="py-20 bg-off-white">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Section Label */}
                        <div className="mb-12">
                            <span className="font-nav text-sm font-bold text-antique-gold uppercase tracking-widest">
                                Enhance Your Experience
                            </span>
                            <h2 className="font-serif text-4xl font-bold mt-2 text-deep-emerald">
                                Available Add-Ons
                            </h2>
                        </div>

                        {/* Add-Ons Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pkg.addOns.map((addOn, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-deep-emerald/10 rounded-lg p-6 hover:shadow-md transition-shadow flex items-center gap-4"
                                >
                                    <Plus className="w-5 h-5 text-antique-gold flex-shrink-0" />
                                    <span className="font-nav text-deep-emerald">{addOn}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ───────────────────────────────────────────────────────────────────
                SECTION 7: FAQ
                ─────────────────────────────────────────────────────────────────── */}
            {pkg.faq && pkg.faq.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Section Label */}
                        <div className="mb-12">
                            <span className="font-nav text-sm font-bold text-antique-gold uppercase tracking-widest">
                                Frequently Asked
                            </span>
                            <h2 className="font-serif text-4xl font-bold mt-2 text-deep-emerald">
                                Questions & Answers
                            </h2>
                        </div>

                        {/* FAQ List */}
                        <div className="space-y-6">
                            {pkg.faq.map((item, idx) => (
                                <details
                                    key={idx}
                                    className="group border-b border-deep-emerald/10 pb-6 cursor-pointer"
                                >
                                    <summary className="flex items-start justify-between gap-4 select-none">
                                        <h3 className="font-serif font-bold text-deep-emerald text-lg">
                                            {item.question}
                                        </h3>
                                        <ChevronDown className="w-5 h-5 text-antique-gold flex-shrink-0 mt-1 group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <p className="font-nav text-deep-emerald/70 mt-4 text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ───────────────────────────────────────────────────────────────────
                SECTION 8: STICKY QUOTE CTA
                ─────────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-deep-emerald text-off-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Title */}
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                        Begin Your Journey
                    </h2>

                    {/* Description */}
                    <p className="text-xl font-light mb-10 max-w-2xl text-off-white/90">
                        Our concierge team is ready to craft the perfect transfer experience. Let's
                        arrange your Sri Lanka adventure.
                    </p>

                    {/* Gold Accent Line */}
                    <div className="h-1 bg-antique-gold w-20 mb-10"></div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <Link
                            href="/inquire"
                            className="bg-antique-gold text-deep-emerald px-8 py-4 font-nav font-bold rounded-sm hover:bg-antique-gold/90 transition-colors inline-flex items-center gap-2"
                        >
                            Request a Quote
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <a
                            href="tel:+94112345678"
                            className="text-antique-gold hover:text-off-white transition-colors font-nav font-semibold flex items-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call Concierge
                        </a>
                    </div>
                </div>
            </section>

            {/* ───────────────────────────────────────────────────────────────────
                FOOTER NAVIGATION
                ─────────────────────────────────────────────────────────────────── */}
            <section className="py-16 bg-off-white border-t border-deep-emerald/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        {/* Back Link */}
                        <Link
                            href={`/transfers/${category}`}
                            className="text-deep-emerald hover:text-antique-gold transition-colors font-nav font-semibold flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to {categoryData.title}
                        </Link>

                        {/* All Transfers Link */}
                        <Link
                            href="/transfers"
                            className="text-deep-emerald hover:text-antique-gold transition-colors font-nav font-semibold flex items-center gap-2"
                        >
                            View All Transfer Categories
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
