'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface TransferCategoryTileProps {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  startingFrom: string;
  typicalDuration: string;
  bestFor: string;
}

export default function TransferCategoryTile({
  slug,
  title,
  subtitle,
  image,
  startingFrom,
  typicalDuration,
  bestFor,
}: TransferCategoryTileProps) {
  return (
    <Link href={`/transfers/${slug}`}>
      <div className="group relative h-96 overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-deep-emerald/10" />
          )}
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </div>

        {/* Gold Border Glow on Hover */}
        <div className="absolute inset-0 border-2 border-antique-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

        {/* Glass Effect Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-white backdrop-blur-md rounded-lg" />

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-between p-6 z-10">
          {/* Top Content */}
          <div>
            <h3 className="font-serif text-3xl text-white font-bold mb-2 tracking-wide">
              {title}
            </h3>
            <p className="text-white/70 text-sm font-nav leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Bottom Info Bar */}
          <div className="border-t border-antique-gold/50 pt-4 space-y-3">
            <div className="grid grid-cols-3 gap-4 text-xs font-nav">
              {/* Starting Price */}
              <div className="flex flex-col">
                <span className="text-antique-gold uppercase tracking-widest font-semibold">
                  From
                </span>
                <span className="text-white/90 mt-1">{startingFrom}</span>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <div className="h-8 w-px bg-antique-gold/40" />
              </div>

              {/* Duration */}
              <div className="flex flex-col">
                <span className="text-antique-gold uppercase tracking-widest font-semibold">
                  Duration
                </span>
                <span className="text-white/90 mt-1">{typicalDuration}</span>
              </div>
            </div>

            {/* Best For - Full Width */}
            <div className="pt-2 border-t border-antique-gold/30">
              <span className="text-antique-gold uppercase tracking-widest text-xs font-semibold block mb-1">
                Best For
              </span>
              <p className="text-white/80 text-xs">{bestFor}</p>
            </div>
          </div>
        </div>

        {/* Arrow Icon - Bottom Right */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <div className="bg-antique-gold/20 backdrop-blur-sm rounded-full p-2">
            <ArrowRight className="w-5 h-5 text-antique-gold" />
          </div>
        </div>
      </div>
    </Link>
  );
}
