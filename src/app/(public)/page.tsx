import { Suspense } from 'react';
import HeroSection from '@/components/public/HeroSection';
import SocialProof from '@/components/public/SocialProof';
import HowItWorks from '@/components/public/HowItWorks';
import SignatureExperiences from '@/components/public/SignatureExperiences';
import CuratedCollection from '@/components/public/CuratedCollection';
import HeritageStory from '@/components/public/HeritageStory';
import YataraStandard from '@/components/public/YataraStandard';
import DestinationShowcase from '@/components/public/DestinationShowcase';

export default async function HomePage() {
    return (
        <div className="min-h-screen bg-off-white flex flex-col">
            {/* The Cinematic Hero Section */}
            <HeroSection />

            {/* Social Proof — Trust signals right after hero */}
            <SocialProof />

            {/* How It Works — 3-step concierge flow */}
            <HowItWorks />

            {/* Signature Experiences — Editorial layout */}
            <SignatureExperiences />

            {/* Glass Divider */}
            <div className="section-divider-glass my-4" />

            {/* The Curated Collection Carousel */}
            <CuratedCollection />

            {/* Why Sri Lanka — Destination Showcase + Marquee */}
            <DestinationShowcase />

            {/* The Founders / Heritage Story */}
            <HeritageStory />

            {/* Glass Divider */}
            <div className="section-divider-glass my-4" />

            {/* Yatara Trust Badges */}
            <YataraStandard />
        </div>
    );
}
