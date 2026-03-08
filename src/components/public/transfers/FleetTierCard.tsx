'use client';

import Image from 'next/image';
import { Users, Briefcase, Shield, Zap } from 'lucide-react';

interface FleetTierCardProps {
  name: string;
  tagline: string;
  vehicles: string;
  maxGuests: number;
  maxLuggage: string;
  features: string[];
  image: string;
}

const featureIconMap: Record<string, React.ReactNode> = {
  'Premium Comfort': <Shield className="w-5 h-5" />,
  'Climate Control': <Zap className="w-5 h-5" />,
  'WiFi': <Zap className="w-5 h-5" />,
  'Luxury Amenities': <Briefcase className="w-5 h-5" />,
  'Advanced Safety': <Shield className="w-5 h-5" />,
  'Professional Driver': <Users className="w-5 h-5" />,
  'Premium Audio': <Zap className="w-5 h-5" />,
  'Refreshments': <Briefcase className="w-5 h-5" />,
};

export default function FleetTierCard({
  name,
  tagline,
  vehicles,
  maxGuests,
  maxLuggage,
  features,
}: FleetTierCardProps) {
  return (
    <div className="group h-full overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-antique-gold border-2 border-transparent">
      {/* Background */}
      <div className="relative h-full bg-white flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-deep-emerald/10">
          {/* Image placeholder - update with actual image path */}
          <div className="absolute inset-0 bg-gradient-to-br from-deep-emerald/20 to-deep-emerald/5 flex items-center justify-center">
            <p className="text-deep-emerald/40 text-sm font-nav">{/* {image} */}</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Tier Name */}
          <h3 className="font-serif text-2xl font-bold text-deep-emerald mb-1 tracking-wide">
            {name}
          </h3>

          {/* Tagline */}
          <p className="text-antique-gold text-sm font-nav italic mb-4 font-medium">
            {tagline}
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-antique-gold/30 to-transparent mb-4" />

          {/* Vehicle Names */}
          <p className="text-deep-emerald/80 text-sm font-nav mb-4 line-clamp-2">
            {vehicles}
          </p>

          {/* Capacity Info */}
          <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-deep-emerald/10">
            {/* Guests */}
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-antique-gold" />
              <div className="flex flex-col">
                <span className="text-xs text-deep-emerald/60 font-nav uppercase tracking-wide">
                  Guests
                </span>
                <span className="text-sm font-serif font-bold text-deep-emerald">
                  Up to {maxGuests}
                </span>
              </div>
            </div>

            {/* Luggage */}
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-antique-gold" />
              <div className="flex flex-col">
                <span className="text-xs text-deep-emerald/60 font-nav uppercase tracking-wide">
                  Luggage
                </span>
                <span className="text-sm font-serif font-bold text-deep-emerald">
                  {maxLuggage}
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 flex-1">
            <p className="text-xs text-deep-emerald/70 font-nav uppercase tracking-widest font-semibold mb-3">
              Premium Features
            </p>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-sm text-deep-emerald/80 font-nav"
                >
                  <div className="w-2 h-2 rounded-full bg-antique-gold" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hover Border */}
          <div className="mt-4 pt-4 border-t border-antique-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-xs font-nav text-antique-gold uppercase tracking-widest font-semibold">
              Select This Tier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
