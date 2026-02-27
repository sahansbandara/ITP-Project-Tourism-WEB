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
        <Link href={`/destinations/${destination.slug}`} className="group block relative overflow-hidden rounded-2xl h-full">
            <div className={`relative w-full ${variant === 'tall' ? 'h-[500px]' : 'h-[380px]'} overflow-hidden`}>
                <Image
                    src={destination.images[0]}
                    alt={destination.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-emerald/95 via-deep-emerald/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex justify-between items-end">
                        <div className="flex-1 pr-6">
                            <h3 className="text-2xl lg:text-3xl font-display text-white mb-3 group-hover:text-antique-gold transition-colors duration-500 drop-shadow-md">
                                {destination.title}
                            </h3>
                            <p className="text-white/80 font-light text-[13px] line-clamp-3 max-w-[95%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                                {destination.description}
                            </p>
                        </div>
                        <div className="liquid-glass-button p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 flex-shrink-0">
                            <ArrowUpRight className="h-6 w-6 text-antique-gold" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
