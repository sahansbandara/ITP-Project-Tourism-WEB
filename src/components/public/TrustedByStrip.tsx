'use client';

import Image from 'next/image';

/**
 * Partner / press logos displayed below the hero.
 * Uses an infinite auto-scrolling marquee to display all partners.
 */
const PARTNERS = [
    { name: 'Sri Lanka Tourism', src: '/images/partners/sltda-logo.webp', alt: 'Sri Lanka Tourism Development Authority' },
    { name: 'Lonely Planet', src: '/images/partners/lonely-planet-logo.webp', alt: 'Lonely Planet Recommended' },
    { name: 'Booking.com', src: '/images/partners/booking-logo.webp', alt: 'Booking.com Partner', scale: 0.8 },
    // New partners added by user
    { name: 'TourCert', src: '/images/partners/tourcert-logo.webp', alt: 'TourCert Qualified', scale: 1.2 },
    { name: 'Carbon Neutral', src: '/images/partners/carbon-neutral-logo.webp', alt: 'Certified Carbon Neutral Fleet' },
    { name: 'Travelife', src: '/images/partners/travelife-logo.webp', alt: 'Travelife Partner' },
    { name: 'Biodiversity Sri Lanka', src: '/images/partners/biodiversity-logo.webp', alt: 'Biodiversity Sri Lanka' },
    { name: 'PATA', src: '/images/partners/pata-logo.webp', alt: 'PATA Sri Lanka Chapter' },
    { name: 'Plasticcycle', src: '/images/partners/plasticcycle-logo.webp', alt: 'Plasticcycle Initiative' },
];

export default function TrustedByStrip() {
    return (
        <section className="py-8 md:py-10 bg-white border-y border-black/[0.03] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-6">
                {/* Label */}
                <h2 className="text-center text-lg md:text-xl font-display text-deep-emerald font-medium tracking-tight">
                    Global Accreditations & Prestigious Memberships
                </h2>
            </div>

            {/* Marquee container */}
            <div className="relative flex overflow-hidden group">
                {/* Fade overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Animated scrolling track */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                    {/* Render the sets multiple times for seamless loop */}
                    {[...Array(2)].map((_, setIndex) => (
                        <div key={setIndex} className="flex flex-nowrap shrink-0 items-center gap-x-4 md:gap-x-8 px-2 md:px-4">
                            {PARTNERS.map((partner) => (
                                <div
                                    key={partner.name}
                                    className="relative h-20 md:h-24 w-[160px] md:w-[200px] flex items-center justify-center transition-all duration-300 shrink-0"
                                >
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        width={200}
                                        height={120}
                                        className="max-h-18 md:max-h-22 w-auto object-contain"
                                        style={{ transform: partner.scale ? `scale(${partner.scale})` : undefined }}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
