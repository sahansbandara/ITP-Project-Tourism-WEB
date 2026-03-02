import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative bg-[#0a1f15] text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6 text-2xl font-display tracking-widest text-white">
                            YATARA <span className="text-antique-gold ml-1">CEYLON</span>
                        </Link>
                        <p className="text-white/60 font-light text-sm leading-relaxed mb-8 pr-4">
                            Curators of bespoke Sri Lankan journeys. We synchronize your travel with the authentic heartbeat of Ceylon, delivering uncompromising luxury.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] font-nav font-semibold text-white/40 uppercase mb-6">
                            Journeys
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="/packages" className="text-sm font-light text-white/70 hover:text-white transition-colors">The Collection</Link></li>
                            <li><Link href="/tours/cultural" className="text-sm font-light text-white/70 hover:text-white transition-colors">Cultural Tours</Link></li>
                            <li><Link href="/tours/wildlife-adventure" className="text-sm font-light text-white/70 hover:text-white transition-colors">Wildlife & Adventure</Link></li>
                            <li><Link href="/tours/experiences" className="text-sm font-light text-white/70 hover:text-white transition-colors">Experiences</Link></li>
                            <li><Link href="/build-tour" className="text-sm font-light text-white/70 hover:text-white transition-colors">Bespoke Planning</Link></li>
                            <li><Link href="/destinations" className="text-sm font-light text-white/70 hover:text-white transition-colors">Destinations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] font-nav font-semibold text-white/40 uppercase mb-6">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm font-light text-white/70 hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/about/team" className="text-sm font-light text-white/70 hover:text-white transition-colors">Our Team</Link></li>
                            <li><Link href="/about/brands" className="text-sm font-light text-white/70 hover:text-white transition-colors">Our Brands</Link></li>
                            <li><Link href="/services" className="text-sm font-light text-white/70 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/mice" className="text-sm font-light text-white/70 hover:text-white transition-colors">MICE & Events</Link></li>
                            <li><Link href="/about/sustainability" className="text-sm font-light text-white/70 hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link href="/news" className="text-sm font-light text-white/70 hover:text-white transition-colors">Travel Bites</Link></li>
                            <li><Link href="/careers" className="text-sm font-light text-white/70 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/faq" className="text-sm font-light text-white/70 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="text-sm font-light text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] font-nav font-semibold text-white/40 uppercase mb-6">
                            The Dispatch
                        </h4>
                        <p className="text-sm font-light text-white/70 mb-4">
                            Subscribe for exclusive itineraries and insider access to luxury Ceylon.
                        </p>
                        <form className="relative flex items-center">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-transparent border-b border-white/20 focus:border-antique-gold outline-none py-3 text-sm font-light transition-colors placeholder:text-white/30"
                            />
                            <button type="submit" className="absolute right-0 text-white/50 hover:text-antique-gold transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] font-nav tracking-widest text-white/40 uppercase">
                        &copy; {new Date().getFullYear()} Yatara Ceylon. All Rights Reserved.
                    </p>
                    <div className="flex gap-4">
                        <Image src="/images/payments/visa.svg" alt="Visa" width={32} height={20} className="opacity-50 grayscale contrast-200" />
                        <Image src="/images/payments/mastercard.svg" alt="Mastercard" width={32} height={20} className="opacity-50 grayscale contrast-200" />
                        <Image src="/images/payments/amex.svg" alt="Amex" width={32} height={20} className="opacity-50 grayscale contrast-200" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
