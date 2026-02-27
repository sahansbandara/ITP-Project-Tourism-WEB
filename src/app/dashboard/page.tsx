import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";
import Package from "@/models/Package";
import User from "@/models/User";
import { Users, Package as PackageIcon, CalendarCheck, DollarSign, TrendingUp, ArrowUpRight } from "lucide-react";

async function getDashboardStats() {
    try {
        await connectDB();
        const [totalBookings, activePackages, totalUsers, revenue] = await Promise.all([
            Booking.countDocuments({}),
            Package.countDocuments({ isPublished: true, isDeleted: false }),
            User.countDocuments({}),
            Booking.aggregate([
                { $match: { status: 'COMPLETED' } },
                { $group: { _id: null, total: { $sum: "$totalAmount" } } }
            ])
        ]);

        return {
            totalBookings,
            activePackages,
            totalUsers,
            totalRevenue: revenue[0]?.total || 0
        };
    } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
        return {
            totalBookings: 0,
            activePackages: 0,
            totalUsers: 0,
            totalRevenue: 0
        };
    }
}

const statCards = [
    {
        title: 'Total Revenue',
        icon: DollarSign,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200/50',
        change: '+20.1%',
        format: (val: number) => `$${val.toLocaleString()}`,
        key: 'totalRevenue' as const,
    },
    {
        title: 'Bookings',
        icon: CalendarCheck,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200/50',
        change: '+12.5%',
        format: (val: number) => val.toString(),
        key: 'totalBookings' as const,
    },
    {
        title: 'Active Packages',
        icon: PackageIcon,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200/50',
        change: '+19%',
        format: (val: number) => val.toString(),
        key: 'activePackages' as const,
    },
    {
        title: 'Total Users',
        icon: Users,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200/50',
        change: '+8.2%',
        format: (val: number) => val.toString(),
        key: 'totalUsers' as const,
    },
];

export default async function DashboardPage() {
    const stats = await getDashboardStats();

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold tracking-tight text-deep-emerald">Dashboard</h1>
                    <p className="text-sm text-gray-500 font-light mt-1">Welcome back to Yatara Ceylon TOMS</p>
                </div>
                <div className="hidden md:flex items-center gap-2 liquid-glass-gold px-4 py-2 rounded-xl">
                    <TrendingUp className="w-4 h-4 text-antique-gold" />
                    <span className="text-xs tracking-[0.1em] text-deep-emerald font-medium">Live Overview</span>
                </div>
            </div>

            {/* Stat Cards — Liquid Glass */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <div key={card.key} className="liquid-glass-stat rounded-2xl p-6 relative group">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-sm font-medium text-gray-600 tracking-wide">{card.title}</p>
                                <div className={`w-10 h-10 rounded-xl ${card.bgColor} ${card.borderColor} border flex items-center justify-center`}>
                                    <Icon className={`h-5 w-5 ${card.color}`} />
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <p className="text-3xl font-display font-bold text-deep-emerald">{card.format(stats[card.key])}</p>
                                <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                                    <ArrowUpRight className="w-3 h-3" />
                                    {card.change}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activity & Charts — Glass Panels */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 liquid-glass-stat rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-display font-semibold text-deep-emerald">Recent Bookings</h3>
                        <span className="text-xs tracking-[0.15em] text-antique-gold uppercase font-medium">View All →</span>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-400 font-light italic">Recent bookings will appear here in real-time.</p>
                    </div>
                </div>
                <div className="col-span-3 liquid-glass-stat rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-display font-semibold text-deep-emerald">Recent Activity</h3>
                        <span className="text-xs tracking-[0.15em] text-antique-gold uppercase font-medium">Audit Log →</span>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-400 font-light italic">Audit log entries will appear here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
