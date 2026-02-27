'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    Bell,
    Package,
    MapPin,
    Map,
    Car,
    CalendarCheck,
    Headphones,
    DollarSign,
    Handshake,
    Globe,
    Palmtree,
    ChevronLeft,
    Menu,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const sidebarLinks = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/bookings', label: 'Bookings', icon: CalendarCheck },
    { href: '/dashboard/packages', label: 'Packages', icon: Package },
    { href: '/dashboard/destinations', label: 'Destinations', icon: MapPin },
    { href: '/dashboard/vehicles', label: 'Vehicles', icon: Car },
    { href: '/dashboard/support', label: 'Support', icon: Headphones },
    { href: '/dashboard/finance', label: 'Finance', icon: DollarSign },
    { href: '/dashboard/partners', label: 'Partners', icon: Handshake },
    { href: '/dashboard/users', label: 'Users', icon: Users },
];

function SidebarContent() {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col">
            {/* Brand */}
            <div className="flex h-20 items-center px-6 border-b border-antique-gold/10">
                <Link href="/dashboard" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-antique-gold/15 border border-antique-gold/25 flex items-center justify-center group-hover:bg-antique-gold/25 transition-all duration-300">
                        <Palmtree className="h-4 w-4 text-antique-gold" />
                    </div>
                    <div>
                        <span className="font-display text-lg font-bold text-off-white tracking-tight">
                            TOMS
                        </span>
                        <p className="text-[9px] tracking-[0.2em] text-off-white/30 uppercase">Yatara Ceylon</p>
                    </div>
                </Link>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-1 scrollbar-glass-dark">
                {sidebarLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive =
                        pathname === link.href ||
                        (link.href !== '/dashboard' && pathname.startsWith(link.href));
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'sidebar-link text-off-white/60 hover:text-off-white hover:bg-white/5 rounded-xl',
                                isActive && 'sidebar-link-active text-antique-gold'
                            )}
                        >
                            <Icon className={cn(
                                "h-4 w-4 flex-shrink-0 transition-colors",
                                isActive ? "text-antique-gold" : "text-off-white/40"
                            )} />
                            <span className="text-[13px]">{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="border-t border-antique-gold/10 p-4">
                <Link
                    href="/"
                    className="sidebar-link text-off-white/40 hover:text-antique-gold rounded-xl"
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="text-[13px]">Back to Website</span>
                </Link>
            </div>
        </div>
    );
}

export function DashboardSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Desktop Sidebar — Dark Glass */}
            <aside className="hidden md:block dashboard-sidebar-glass min-h-screen">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar Toggle */}
            <div className="md:hidden fixed top-0 left-0 z-40 p-3">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="liquid-glass border-antique-gold/20">
                            <Menu className="h-5 w-5 text-deep-emerald" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-72 p-0 border-r border-antique-gold/20">
                        <div className="h-full dashboard-sidebar-glass">
                            <SidebarContent />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
