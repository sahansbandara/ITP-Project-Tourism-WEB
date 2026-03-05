import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import TransferCategoryTile from '@/components/public/transfers/TransferCategoryTile';
import SignatureRouteCard from '@/components/public/transfers/SignatureRouteCard';
import FleetTierCard from '@/components/public/transfers/FleetTierCard';

import { transferCategories, signatureRoutes, vehicleTiers, trustSignals } from '@/data/transfers';

export const metadata: Metadata = {
  title: 'Premium Transfers | Yatara Ceylon',
  description:
    'Luxury airport transfers, private chauffeur services, wilderness expeditions, and intercity transport across Sri Lanka. Premium fleet, licensed chauffeurs, 24/7 concierge.',
};

export default function TransfersPage() {
  // Filter out signature-fleet from the main grid
  const transferCollections = transferCategories.filter(
    (category) => category.slug !== 'signature-fleet'
  );

  return (
    <main className="bg-off-white">
      {/* ───────── Section 1: Hero ───────── */}
      <section className="bg-deep-emerald pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <span className="text-[10px] tracking-[0.3em] uppercase text-antique-gold font-nav font-semibold">
              Private Transfers
            </span>
          </div>

          {/* Hero Heading */}
          <div className="mb-8">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Transfers,{' '}
              <span className="italic text-antique-gold">
                Elevated
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl font-nav max-w-2xl mb-12 leading-relaxed">
            Move between Sri Lanka's finest destinations in premium comfort. Every transfer is an
            experience — curated routing, dedicated chauffeurs, and service that anticipates every
            need.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            {/* Primary CTA */}
            <Link
              href="/inquire"
              className="inline-block px-8 py-3 bg-antique-gold text-deep-emerald font-nav font-semibold uppercase tracking-[0.15em] text-sm rounded-lg border border-antique-gold/30 hover:bg-antique-gold/90 transition-all duration-300"
            >
              Request a Quote
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/transfers/signature-fleet"
              className="inline-flex items-center gap-2 px-8 py-3 border border-antique-gold/30 text-antique-gold font-nav font-semibold uppercase tracking-[0.15em] text-sm rounded-lg hover:border-antique-gold hover:bg-antique-gold/5 transition-all duration-300"
            >
              Explore Fleet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Gold Divider */}
          <div className="flex justify-center">
            <div className="h-px w-24 bg-antique-gold/40" />
          </div>
        </div>
      </section>

      {/* ───────── Section 2: Transfer Collections Grid ───────── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-antique-gold font-nav font-semibold block mb-4">
              The Collection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-emerald mb-4">
              Choose Your Experience
            </h2>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transferCollections.map((category) => (
              <TransferCategoryTile
                key={category.slug}
                slug={category.slug}
                title={category.title}
                subtitle={category.subtitle}
                image={category.image}
                startingFrom={category.startingFrom}
                typicalDuration={category.typicalDuration}
                bestFor={category.bestFor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Section 3: Signature Routes ───────── */}
      <section className="py-24 bg-deep-emerald/[0.03]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-antique-gold font-nav font-semibold block mb-4">
              Curated Passages
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-emerald mb-4">
              Signature Routes
            </h2>
            <p className="text-deep-emerald/70 text-lg font-nav max-w-2xl mx-auto">
              Our most requested journeys between Sri Lanka's iconic destinations
            </p>
          </div>

          {/* Signature Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureRoutes.map((route) => (
              <SignatureRouteCard
                key={route.slug}
                from={route.from}
                to={route.to}
                title={route.title}
                slug={route.slug}
                categorySlug={route.categorySlug}
                duration={route.duration}
                distance={route.distance}
                image={route.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Section 4: Fleet Teaser ───────── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-antique-gold font-nav font-semibold block mb-4">
              The Fleet
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-emerald mb-4">
              Three Tiers of Excellence
            </h2>
          </div>

          {/* Fleet Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {vehicleTiers.map((tier) => (
              <FleetTierCard
                key={tier.slug}
                name={tier.name}
                tagline={tier.tagline}
                vehicles={tier.vehicles}
                maxGuests={tier.maxGuests}
                maxLuggage={tier.maxLuggage}
                features={tier.features}
                image={tier.image}
              />
            ))}
          </div>

          {/* Fleet Link */}
          <div className="text-center">
            <Link
              href="/transfers/signature-fleet"
              className="inline-flex items-center gap-2 text-antique-gold font-nav font-semibold uppercase tracking-[0.15em] text-sm hover:gap-3 transition-all duration-300"
            >
              Explore the Full Fleet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Section 5: Trust Strip ───────── */}
      <section className="bg-deep-emerald py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-antique-gold mb-2">
                  {signal.value}
                </p>
                <p className="text-white/60 text-sm font-nav uppercase tracking-[0.1em]">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Section 6: Final CTA ───────── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-emerald mb-6">
            Your Journey Begins with a Conversation
          </h2>

          {/* Description */}
          <p className="text-deep-emerald/70 text-lg font-nav mb-12 leading-relaxed">
            Our concierge team is ready to design the perfect transfer experience for your Sri
            Lanka journey. Whether you need a single airport pickup or a multi-day private
            chauffeur, we're here to orchestrate every detail.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Link
              href="/inquire"
              className="inline-block px-8 py-3 bg-antique-gold text-deep-emerald font-nav font-semibold uppercase tracking-[0.15em] text-sm rounded-lg border border-antique-gold/30 hover:bg-antique-gold/90 transition-all duration-300"
            >
              Request a Quote
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-antique-gold/30 text-antique-gold font-nav font-semibold uppercase tracking-[0.15em] text-sm rounded-lg hover:border-antique-gold hover:bg-antique-gold/5 transition-all duration-300"
            >
              Speak with Concierge
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
