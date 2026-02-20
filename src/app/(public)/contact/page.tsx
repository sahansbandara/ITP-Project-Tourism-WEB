import { Metadata } from 'next';
import SectionHeading from '@/components/public/SectionHeading';
import ContactForm from '@/components/public/ContactForm';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact Us | Yatara Ceylon',
    description: 'Get in touch with our team for inquiries, bookings, and support.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block py-1 px-4 text-xs tracking-[0.2em] uppercase font-medium text-antique-gold border border-antique-gold/30 mb-6 bg-deep-emerald/5">
                        Concierge Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-deep-emerald mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        We're here to help you plan your perfect bespoke Sri Lankan getaway. Connect with our luxury concierge today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-serif text-deep-emerald mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="h-12 w-12 rounded-none bg-deep-emerald/5 flex items-center justify-center text-antique-gold shrink-0">
                                        <MapPin className="h-6 w-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-deep-emerald mb-1">Our Office</h4>
                                        <p className="text-gray-500 font-light leading-relaxed">
                                            123 Tourism Road,<br />
                                            Colombo 02,<br />
                                            Sri Lanka
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="h-12 w-12 rounded-none bg-deep-emerald/5 flex items-center justify-center text-antique-gold shrink-0">
                                        <Phone className="h-6 w-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-deep-emerald mb-1">Phone & WhatsApp</h4>
                                        <p className="text-gray-500 font-light">+94 77 123 4567</p>
                                        <p className="text-gray-500 font-light">+94 11 234 5678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="h-12 w-12 rounded-none bg-deep-emerald/5 flex items-center justify-center text-antique-gold shrink-0">
                                        <Mail className="h-6 w-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-deep-emerald mb-1">Email</h4>
                                        <p className="text-gray-500 font-light">concierge@yataraceylon.com</p>
                                        <p className="text-gray-500 font-light">bespoke@yataraceylon.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="h-12 w-12 rounded-none bg-deep-emerald/5 flex items-center justify-center text-antique-gold shrink-0">
                                        <Clock className="h-6 w-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-deep-emerald mb-1">Business Hours</h4>
                                        <p className="text-gray-500 font-light">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-500 font-light">Sat: 9:00 AM - 1:00 PM</p>
                                        <p className="text-antique-gold font-light text-sm mt-1">24/7 Support via WhatsApp</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-serif text-deep-emerald mb-6">Follow Us</h3>
                            <div className="flex gap-4">
                                <Link href="#" className="h-12 w-12 rounded-none bg-off-white border border-off-white/20 flex items-center justify-center text-deep-emerald hover:bg-deep-emerald hover:text-antique-gold transition-all duration-300">
                                    <Facebook className="h-5 w-5" strokeWidth={1.5} />
                                </Link>
                                <Link href="#" className="h-12 w-12 rounded-none bg-off-white border border-off-white/20 flex items-center justify-center text-deep-emerald hover:bg-deep-emerald hover:text-antique-gold transition-all duration-300">
                                    <Instagram className="h-5 w-5" strokeWidth={1.5} />
                                </Link>
                                <Link href="#" className="h-12 w-12 rounded-none bg-off-white border border-off-white/20 flex items-center justify-center text-deep-emerald hover:bg-deep-emerald hover:text-antique-gold transition-all duration-300">
                                    <Twitter className="h-5 w-5" strokeWidth={1.5} />
                                </Link>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-none overflow-hidden h-64 bg-deep-emerald/5 border border-deep-emerald/10 relative">
                            {/* iframe embed for Google Maps would go here */}
                            <div className="absolute inset-0 flex items-center justify-center text-antique-gold font-serif tracking-widest text-sm uppercase">
                                [ Maps View ]
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
