import { Metadata } from 'next';
import DestinationCard from '@/components/public/DestinationCard';

export const metadata: Metadata = {
    title: 'Destinations | Yatara Ceylon',
    description: 'Explore the most beautiful destinations in Sri Lanka. From the beaches of Mirissa to the heights of Ella.',
};

const DESTINATIONS = [
    {
        _id: 'd1',
        title: 'Colombo',
        slug: 'colombo',
        description: 'The vibrant cosmopolitan gateway to Ceylon, where colonial heritage meets modern luxury.',
        images: ['https://images.unsplash.com/photo-1620608518386-302ef3e54b67?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd2',
        title: 'Galle',
        slug: 'galle',
        description: 'A beautifully preserved Dutch fort city offering charming cobblestone streets and elite boutique stays.',
        images: ['https://images.unsplash.com/photo-1546708773-e57be64fa2e3?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd3',
        title: 'Ella',
        slug: 'ella',
        description: 'A mist-shrouded mountain hamlet known for its iconic Nine Arch Bridge and sweeping tea estates.',
        images: ['https://images.unsplash.com/photo-1588258387711-540e53db3838?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd4',
        title: 'Kandy',
        slug: 'kandy',
        description: 'The ancient hill capital, home to the sacred Temple of the Tooth and tranquil lake scenes.',
        images: ['https://images.unsplash.com/photo-1625736195861-5efcc4cbabd3?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd5',
        title: 'Nuwara Eliya',
        slug: 'nuwara-eliya',
        description: 'Known as Little England, offering colonial bungalows, crisp mountain air, and rolling tea carpets.',
        images: ['https://images.unsplash.com/photo-1563654492723-5eac40467a5f?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd6',
        title: 'Sigiriya',
        slug: 'sigiriya',
        description: 'The majestic Lion Rock fortress, an architectural marvel standing proudly over lush emerald forests.',
        images: ['https://images.unsplash.com/photo-1586220742614-729909772f91?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd7',
        title: 'Yala',
        slug: 'yala',
        description: 'A premier wildlife sanctuary where elusive leopards roam against dramatic coastline backdrops.',
        images: ['https://images.unsplash.com/photo-1616422345026-6b21857908da?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd8',
        title: 'Mirissa',
        slug: 'mirissa',
        description: 'A golden stretch of southern coastline famed for luxury villas, whale watching, and vivid sunsets.',
        images: ['https://images.unsplash.com/photo-1577717903212-9c3f0b093cc1?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd9',
        title: 'Anuradhapura',
        slug: 'anuradhapura',
        description: 'The grand first capital of Ceylon, echoing millennia of spiritual heritage and towering stupas.',
        images: ['https://images.unsplash.com/photo-1610488057200-e17f779de091?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd10',
        title: 'Polonnaruwa',
        slug: 'polonnaruwa',
        description: 'A spectacular medieval capital featuring intricate rock carvings and ancient engineering marvels.',
        images: ['https://images.unsplash.com/photo-1580193132644-88aa0957dc5f?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd11',
        title: 'Trincomalee',
        slug: 'trincomalee',
        description: 'Unspoiled eastern shores featuring deep natural harbors and barefoot luxury retreats.',
        images: ['https://images.unsplash.com/photo-1596485078735-859eb53796d8?w=800&auto=format&fit=crop'],
    },
    {
        _id: 'd12',
        title: 'Arugam Bay',
        slug: 'arugam-bay',
        description: 'An elite surfers’ paradise wrapped in secluded eastern coastal elegance.',
        images: ['https://images.unsplash.com/photo-1558229986-1fd0d15eab4e?w=800&auto=format&fit=crop'],
    },
];

export default function DestinationsPage() {
    return (
        <div className="min-h-screen bg-off-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block py-1 px-4 text-xs tracking-[0.2em] uppercase font-medium text-antique-gold border border-antique-gold/30 mb-6 bg-deep-emerald/5">
                        Discover Ceylon
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-deep-emerald mb-4">
                        The Destinations
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore the island's most breath-taking landscapes, curated exclusively for the discerning traveler.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {DESTINATIONS.map((dest) => (
                        <DestinationCard key={dest._id} destination={dest} />
                    ))}
                </div>
            </div>
        </div>
    );
}
