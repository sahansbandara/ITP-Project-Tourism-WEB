import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import {
  transferCategories,
  getCategoryBySlug,
  vehicleTiers,
  type VehicleTier,
} from '@/data/transfers';
import TransferPackageCard from '@/components/public/transfers/PackageCard';

/* ───────── Static Params Generation ───────── */
export function generateStaticParams() {
  return transferCategories.map((cat) => ({
    category: cat.slug,
  }));
}

/* ───────── Dynamic Metadata ───────── */
export async function generateMetadata(props: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await props.params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return {
      title: 'Not Found',
      description: 'Transfer category not found',
    };
  }

  return {
    title: `${categoryData.title} | Yatara Ceylon Transfers`,
    description: categoryData.subtitle,
    openGraph: {
      title: categoryData.title,
      description: categoryData.promise,
      type: 'website',
      url: `/transfers/${categoryData.slug}`,
    },
  };
}

/* ───────── Fleet Showcase Card ───────── */
function FleetTierCard({ tier }: { tier: VehicleTier }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-deep-emerald/10">
      {/* Header */}
      <div className="bg-deep-emerald text-off-white p-8">
        <h3 className="font-serif text-3xl font-bold mb-2">{tier.name}</h3>
        <p className="text-antique-gold font-nav text-sm">{tier.tagline}</p>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Vehicles */}
        <div>
          <h4 className="font-nav font-semibold text-deep-emerald/70 text-xs uppercase tracking-widest mb-3">
            Vehicles
          </h4>
          <p className="text-deep-emerald text-sm leading-relaxed">{tier.vehicles}</p>
        </div>

        {/* Capacity */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-nav text-xs uppercase tracking-widest text-deep-emerald/70 mb-2">
              Max Guests
            </p>
            <p className="font-serif text-2xl font-bold text-antique-gold">
              {tier.maxGuests}
            </p>
          </div>
          <div>
            <p className="font-nav text-xs uppercase tracking-widest text-deep-emerald/70 mb-2">
              Luggage
            </p>
            <p className="text-sm text-deep-emerald">{tier.maxLuggage}</p>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-nav font-semibold text-deep-emerald/70 text-xs uppercase tracking-widest mb-3">
            Features
          </h4>
          <ul className="space-y-2">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-deep-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-antique-gold mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ───────── Service Standards Section ───────── */
function ServiceStandardsSection() {
  const standards = [
    {
      icon: '✓',
      title: 'Licensed Chauffeurs',
      description: 'SLTDA certified professionals with extensive experience',
    },
    {
      icon: '✓',
      title: 'Fully Insured',
      description: 'Comprehensive coverage for your peace of mind',
    },
    {
      icon: '✓',
      title: 'GPS Tracked',
      description: 'Real-time safety and reliability monitoring',
    },
    {
      icon: '✓',
      title: 'Regular Servicing',
      description: 'All vehicles maintained to international standards',
    },
    {
      icon: '✓',
      title: 'Climate Controlled',
      description: 'Comfort in every journey, every season',
    },
    {
      icon: '✓',
      title: 'Privacy Glass',
      description: 'Discretion and confidentiality guaranteed',
    },
  ];

  return (
    <div className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-deep-emerald mb-4">
            Service Standards
          </h2>
          <p className="text-deep-emerald/70 max-w-2xl mx-auto">
            Every journey is backed by our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl font-bold text-antique-gold mb-4">
                {std.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-deep-emerald mb-3">
                {std.title}
              </h3>
              <p className="text-deep-emerald/70 text-sm">{std.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────── Fleet Showcase Section ───────── */
function FleetShowcaseSection() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-deep-emerald mb-4">
            Our Signature Fleet
          </h2>
          <p className="text-deep-emerald/70 max-w-2xl mx-auto">
            Three tiers of luxury, each engineered for a different journey experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vehicleTiers.map((tier) => (
            <FleetTierCard key={tier.slug} tier={tier} />
          ))}
        </div>

        {/* Bespoke Note */}
        <div className="bg-deep-emerald/5 border border-deep-emerald/20 rounded-lg p-8 text-center">
          <p className="text-deep-emerald text-sm leading-relaxed max-w-3xl mx-auto">
            <span className="font-nav font-semibold uppercase text-xs text-deep-emerald/70 block mb-3">
              Beyond Standard Fleet
            </span>
            Don't see your perfect vehicle? We can arrange bespoke requests — from luxury coach services
            for larger groups to specialty vehicles for specific journeys. Contact our concierge to
            explore custom options.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────── Main Page Component ───────── */
export default async function TransferCategoryPage(props: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await props.params;
  const category = getCategoryBySlug(categorySlug);

  // Not found handling
  if (!category) {
    notFound();
  }

  const CategoryIcon = category.icon;
  const isSignatureFleet = categorySlug === 'signature-fleet';

  return (
    <main className="bg-off-white">
      {/* ───────── Hero Section ───────── */}
      <section className="bg-deep-emerald text-off-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm font-nav">
            <Link href="/transfers" className="hover:text-antique-gold transition-colors">
              Transfers
            </Link>
            <span className="text-off-white/40">/</span>
            <span className="text-antique-gold">{category.title}</span>
          </div>

          {/* Icon */}
          <div className="mb-6 inline-block">
            <div className="w-16 h-16 bg-antique-gold/20 rounded-lg flex items-center justify-center">
              <CategoryIcon className="w-8 h-8 text-antique-gold" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-bold mb-4 text-off-white">
            {category.title}
          </h1>

          {/* Promise */}
          <p className="text-xl text-off-white/90 max-w-2xl mb-8 leading-relaxed">
            {category.promise}
          </p>

          {/* Gold Divider */}
          <div className="h-1 w-16 bg-gradient-to-r from-antique-gold to-transparent" />
        </div>
      </section>

      {/* ───────── Quick Selectors & Tiers (for non-fleet categories) ───────── */}
      {!isSignatureFleet && (category.quickSelectors || true) && (
        <section className="bg-off-white border-b border-deep-emerald/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Quick Selectors */}
            {category.quickSelectors && (
              <div className="mb-10">
                <p className="font-nav text-xs uppercase tracking-widest text-deep-emerald/70 font-semibold mb-4">
                  Popular Options
                </p>
                <div className="flex flex-wrap gap-3">
                  {category.quickSelectors.map((selector) => (
                    <button
                      key={selector}
                      className="px-6 py-2 border-2 border-deep-emerald/20 rounded-lg text-sm font-nav text-deep-emerald hover:border-antique-gold hover:text-antique-gold transition-all duration-300"
                    >
                      {selector}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Vehicle Tier Badges */}
            <div>
              <p className="font-nav text-xs uppercase tracking-widest text-deep-emerald/70 font-semibold mb-4">
                Available Vehicle Tiers
              </p>
              <div className="flex flex-wrap gap-3">
                {vehicleTiers.map((tier) => (
                  <div
                    key={tier.slug}
                    className="px-4 py-2 bg-deep-emerald/10 border border-deep-emerald/20 rounded-lg"
                  >
                    <p className="font-nav text-xs font-semibold text-deep-emerald">
                      {tier.name}
                    </p>
                    <p className="text-xs text-deep-emerald/60">{tier.maxGuests} guests</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───────── Conditional Content: Fleet vs Packages ───────── */}
      {isSignatureFleet ? (
        <>
          {/* Fleet Showcase */}
          <FleetShowcaseSection />

          {/* Service Standards */}
          <ServiceStandardsSection />
        </>
      ) : category.packages && category.packages.length > 0 ? (
        <>
          {/* Packages Grid Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <h2 className="font-serif text-4xl font-bold text-deep-emerald mb-4">
                  Transfer Packages
                </h2>
                <p className="text-deep-emerald/70">
                  Curated experiences tailored to your journey
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.packages.map((pkg) => (
                  <TransferPackageCard
                    key={pkg.slug}
                    slug={pkg.slug}
                    categorySlug={category.slug}
                    title={pkg.title}
                    tagline={pkg.tagline}
                    image={pkg.image}
                    highlights={pkg.highlights}
                    startingFrom={pkg.startingFrom}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Service Standards for Regular Categories */}
          <ServiceStandardsSection />
        </>
      ) : (
        // Fallback for empty categories (shouldn't happen, but safe)
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-deep-emerald/70">No packages available at this time.</p>
          </div>
        </section>
      )}

      {/* ───────── CTA Section ───────── */}
      <section className="bg-deep-emerald text-off-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl text-off-white/90 mb-10 max-w-2xl mx-auto">
            Let our concierge team create the perfect itinerary for your journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-antique-gold text-deep-emerald font-nav font-bold uppercase tracking-widest rounded-lg hover:bg-antique-gold/90 transition-colors duration-300 flex items-center justify-center gap-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              href="/transfers"
              className="px-10 py-4 border-2 border-antique-gold text-antique-gold font-nav font-bold uppercase tracking-widest rounded-lg hover:bg-antique-gold/10 transition-colors duration-300"
            >
              Back to Transfers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
