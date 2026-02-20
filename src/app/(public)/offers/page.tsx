
import { Metadata } from 'next';
import SectionHeading from '@/components/public/SectionHeading';
import connectDB from '@/lib/mongodb';
import Destination from '@/models/Destination';
import DestinationCard from '@/components/public/DestinationCard';

export const metadata: Metadata = {
    title: 'Special Offers | Yatara Ceylon',
    description: 'Exclusive travel deals and promotional offers for your Sri Lanka vacation.',
};

// Fetch "Other Deals" which were seeded with location: "Sri Lanka"
// We could also just fetch all destinations, but filtering helps separate "General Destinations" from "Specific Deals"
async function getOffers() {
    try {
        await connectDB();
        // Fetch destinations that are likely "deals" (seeded with location 'Sri Lanka')
        // Or simply fetch all latest destinations to show everything.
        // Given the request "fill it with... deals... mention deals in lesstaxi", 
        // and my seed script distinguished them by location "Sri Lanka".
        const offers = await Destination.find({
            isDeleted: false,
            isPublished: true,
            location: 'Sri Lanka' // Filter for the specific deals we seeded
        })
            .sort({ createdAt: -1 })
            .lean();

        return JSON.parse(JSON.stringify(offers));
    } catch (error) {
        console.error("Failed to fetch offers:", error);
        return [];
    }
}

export default async function OffersPage() {
    const offers = await getOffers();

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-12">
                    <SectionHeading
                        title="Special Offers & Deals"
                        subtitle="Ongoing Promotions"
                        description="Exclusive rates for activities, tours, and experiences across the island."
                    />
                </div>

                {offers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {offers.map((offer: any) => (
                            <DestinationCard key={offer._id} destination={offer} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No active offers at the moment.</h3>
                        <p className="text-gray-500">Please check back later for new deals.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
