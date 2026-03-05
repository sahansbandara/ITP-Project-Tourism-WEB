'use client';

import Image from 'next/image';

/**
 * Partner / press logos displayed below the hero.
 * Shows real logo images from /public/images/partners/.
 */
const PARTNERS = [
    { name: 'Sri Lanka Tourism', src: '/images/partners/sltda-logo.webp', alt: 'Sri Lanka Tourism Development Authority' },
    { name: 'TripAdvisor', src: '/images/partners/tripadvisor-logo.webp', alt: 'TripAdvisor Travellers Choice' },
    { name: 'Lonely Planet', src: '/images/partners/lonely-planet-logo.webp', alt: 'Lonely Planet Recommended' },
    { name: 'Booking.com', src: '/images/partners/booking-logo.webp', alt: 'Booking.com Partner' },
];

export default function TrustedByStrip() {
    return (
        <section className="py-10 md:py-12 bg-white border-b border-black/[0.03]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Label */}
                <p className="text-center text-[9px] tracking-[0.3em] font-nav text-deep-emerald/30 uppercase mb-8 font-medium">
                    Trusted Partners &amp; Recognitions
                </p>

                {/* Logo row */}
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
                    {PARTNERS.map((partner) => (
                        <div
                            key={partner.name}
                            className="relative h-8 md:h-10 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-500"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.alt}
                                width={140}
                                height={40}
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
