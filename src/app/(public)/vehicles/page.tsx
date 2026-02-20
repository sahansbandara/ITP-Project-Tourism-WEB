import { Metadata } from 'next';
import VehicleCard from '@/components/public/VehicleCard';

export const metadata: Metadata = {
    title: 'Private Transfers | Yatara Ceylon',
    description: 'Safe, luxurious, and comfortable transfers across Sri Lanka. Airport pickups, drops, and elite chauffeur services.',
};

const TRANSFERS = [
    {
        _id: 't1',
        model: 'Luxury SUV (Toyota Land Cruiser)',
        type: 'Premium SUV',
        seats: 4,
        luggage: 4,
        dailyRate: 25000,
        images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop'],
        transferTypes: ['Airport Pickup', 'City Transfer'],
    },
    {
        _id: 't2',
        model: 'Executive Sedan (Mercedes-Benz E-Class)',
        type: 'Premium Sedan',
        seats: 3,
        luggage: 2,
        dailyRate: 30000,
        images: ['https://images.unsplash.com/photo-1541899481282-d53bffe3c3ea?w=800&auto=format&fit=crop'],
        transferTypes: ['Airport Drop', 'VIP Transfer'],
    },
    {
        _id: 't3',
        model: 'Premium Van (Toyota Alphard)',
        type: 'Luxury Van',
        seats: 6,
        luggage: 6,
        dailyRate: 28000,
        images: ['https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&auto=format&fit=crop'],
        transferTypes: ['Airport Pickup', 'Group Transfer'],
    }
];

export default function VehiclesPage() {
    return (
        <div className="min-h-screen bg-off-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block py-1 px-4 text-xs tracking-[0.2em] uppercase font-medium text-antique-gold border border-antique-gold/30 mb-6 bg-deep-emerald/5">
                        Seamless Journeys
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-deep-emerald mb-4">
                        Private Transfers
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Arrive in elegance. Explore our premium fleet of chauffeur-driven vehicles for airport pickups, drops, and bespoke city transfers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {TRANSFERS.map((vehicle: any) => (
                        <VehicleCard key={vehicle._id} vehicle={vehicle} />
                    ))}
                </div>
            </div>
        </div>
    );
}
