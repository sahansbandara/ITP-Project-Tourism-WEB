import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const curatedJourneys = [
    {
        id: 'hill-country',
        title: 'The Hill Country Odyssey',
        description: 'A bespoke journey through misty tea plantations, colonial bungalows, and cascading waterfalls. Experience the refined slow pace of Ceylon.',
        image: '/images/home/curated-hillcountry.png',
    },
    {
        id: 'southern-coast',
        title: 'Southern Coast Serenity',
        description: 'Private villas, secluded golden beaches, and the heritage of Galle Fort. Unwind where the Indian Ocean meets curated luxury.',
        image: '/images/home/curated-southcoast.png',
    },
    {
        id: 'ancient-kingdoms',
        title: 'Ancient Kingdom Trails',
        description: 'Exclusive access to the cultural triangle. Discover Sigiriya and Polonnaruwa with private historians and boutique eco-lodges.',
        image: '/images/home/curated-kingdoms.png',
    }
];

export default function CuratedCollection() {
    return (
        <section className="py-24 bg-off-white text-deep-emerald relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 text-xs tracking-[0.2em] font-medium text-antique-gold uppercase">
                        Signature Experiences
                    </span>
                    <SectionHeading
                        title="The Curated Collection"
                        subtitle=""
                        description="Handpicked, highly personalized itineraries designed for the discerning traveler. Immerse yourself in the authentic soul of Ceylon."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {curatedJourneys.map((journey) => (
                        <div key={journey.id} className="group relative overflow-hidden rounded-xl border border-white/20 hover:border-antique-gold/40 transition-all duration-700 flex flex-col h-[28rem] bg-black/10 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
                                <Image
                                    src={journey.image}
                                    alt={journey.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-emerald/95 via-deep-emerald/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out z-10 flex flex-col justify-end h-full">
                                <h3 className="text-3xl font-serif tracking-wide text-white mb-3 group-hover:text-antique-gold transition-colors duration-500 drop-shadow-md">
                                    {journey.title}
                                </h3>
                                <p className="text-white/80 font-light text-[13px] mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed max-w-[95%]">
                                    {journey.description}
                                </p>
                                <Link
                                    href={`/packages`}
                                    className="inline-flex items-center text-[11px] tracking-[0.2em] text-antique-gold hover:text-white uppercase font-semibold transition-colors duration-300 w-max"
                                >
                                    View Journey <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
