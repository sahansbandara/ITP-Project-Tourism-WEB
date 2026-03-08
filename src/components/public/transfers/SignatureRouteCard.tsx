'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

interface SignatureRouteCardProps {
  from: string;
  to: string;
  title: string;
  slug: string;
  categorySlug: string;
  duration: string;
  distance: string;
  image: string;
}

export default function SignatureRouteCard({
  from,
  to,
  title,
  slug,
  categorySlug,
  duration,
  distance,
  image,
}: SignatureRouteCardProps) {
  return (
    <Link href={`/transfers/${categorySlug}/${slug}`}>
      <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-4px] cursor-pointer bg-white">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-deep-emerald/10">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 bg-deep-emerald/10" />
          )}

          {/* Route Label Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex items-center justify-center">
            <div className="text-center">
              <p className="text-antique-gold text-sm font-nav uppercase tracking-widest font-semibold mb-2">
                Route
              </p>
              <p className="text-white text-lg font-serif font-bold tracking-wide">
                {from} → {to}
              </p>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4 space-y-4">
          {/* Route Title */}
          <div>
            <h3 className="font-serif text-xl text-deep-emerald font-bold line-clamp-2 group-hover:text-antique-gold transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Duration and Distance Chips */}
          <div className="flex flex-wrap gap-2">
            {/* Duration Chip */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-deep-emerald/5 rounded-full border border-deep-emerald/20 hover:border-antique-gold/50 transition-colors duration-300">
              <Clock className="w-4 h-4 text-antique-gold" />
              <span className="text-xs font-nav text-deep-emerald font-medium">
                {duration}
              </span>
            </div>

            {/* Distance Chip */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-deep-emerald/5 rounded-full border border-deep-emerald/20 hover:border-antique-gold/50 transition-colors duration-300">
              <MapPin className="w-4 h-4 text-antique-gold" />
              <span className="text-xs font-nav text-deep-emerald font-medium">
                {distance}
              </span>
            </div>
          </div>

          {/* Gold Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent opacity-50" />

          {/* Link Arrow */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-nav text-antique-gold uppercase tracking-widest font-semibold">
              View Route
            </span>
            <ArrowRight className="w-4 h-4 text-antique-gold transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Hover Border */}
        <div className="absolute inset-0 border-2 border-antique-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
      </div>
    </Link>
  );
}
