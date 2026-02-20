'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Palmtree } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/packages', label: 'Curated Journeys' },
    { href: '/destinations', label: 'The Destinations' },
    { href: '/vehicles', label: 'Private Transfers' },
    { href: '/contact', label: 'Bespoke Planning' },
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-off-white/95 backdrop-blur supports-[backdrop-filter]:bg-off-white/80">
            <div className="section-container flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Palmtree className="h-8 w-8 text-antique-gold group-hover:scale-105 transition-transform duration-500" />
                    <span className="font-serif text-2xl font-semibold tracking-[0.15em] uppercase text-deep-emerald">
                        Yatara Ceylon
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 border-b-2',
                                pathname === link.href
                                    ? 'text-deep-emerald border-antique-gold'
                                    : 'text-gray-500 border-transparent hover:text-deep-emerald hover:border-antique-gold/50'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link href="/contact">
                        <Button className="h-11 px-8 bg-deep-emerald text-antique-gold hover:bg-deep-emerald/90 uppercase tracking-[0.2em] text-[10px] rounded-none border border-deep-emerald transition-all duration-500">
                            Plan Your Journey
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                            <Menu className="h-6 w-6 text-deep-emerald" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80 bg-off-white border-l border-gray-100">
                        <div className="flex flex-col gap-6 mt-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        'px-4 py-3 text-sm font-serif tracking-[0.2em] uppercase transition-all duration-300 border-l-2',
                                        pathname === link.href
                                            ? 'text-deep-emerald border-antique-gold bg-antique-gold/5'
                                            : 'text-gray-600 border-transparent hover:text-deep-emerald hover:bg-gray-50 hover:border-antique-gold/30'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-gray-200 pt-8 mt-4 px-4">
                                <Link href="/contact" onClick={() => setOpen(false)}>
                                    <Button className="w-full h-12 bg-deep-emerald text-antique-gold hover:bg-deep-emerald/90 uppercase tracking-[0.2em] text-[11px] rounded-none border border-deep-emerald transition-all duration-500">
                                        Plan Your Journey
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
