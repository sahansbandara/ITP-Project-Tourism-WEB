import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface DestinationCardProps {
    destination: {
        title: string;
        slug: string;
        images: string[];
        description: string;
    };
    variant?: 'default' | 'tall';
}

export default function DestinationCard({ destination, variant = 'default' }: DestinationCardProps) {
    return (
        <Link href={`/destinations/${destination.slug}`} className="group block relative overflow-hidden rounded-none h-full border border-gray-100 hover:border-antique-gold/50 transition-colors duration-700 bg-white">
            <div className={`relative w-full ${variant === 'tall' ? 'h-[400px]' : 'h-[300px]'} overflow-hidden`}>
                <Image
                    src={destination.images[0] || 'https://images.unsplash.com/photo-1546708773-e57be64fa2e3?w=800&auto=format&fit=crop'}
                    alt={destination.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-emerald/90 via-deep-emerald/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex justify-between items-end">
                        <div className="flex-1 pr-6">
                            <h3 className="text-3xl font-serif tracking-wide text-white mb-3 group-hover:text-antique-gold transition-colors duration-500">
                                {destination.title}
                            </h3>
                            <p className="text-gray-200 font-light text-sm line-clamp-2 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                                {destination.description}
                            </p>
                        </div>
                        <div className="bg-white/10 border border-white/20 p-3 rounded-none backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 group-hover:bg-antique-gold/20 flex-shrink-0">
                            <ArrowUpRight className="h-5 w-5 text-antique-gold" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
