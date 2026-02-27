import { Suspense } from 'react';
import HeroSection from '@/components/public/HeroSection';
import SocialProof from '@/components/public/SocialProof';
import HowItWorks from '@/components/public/HowItWorks';
import SignatureExperiences from '@/components/public/SignatureExperiences';
import CuratedCollection from '@/components/public/CuratedCollection';
import HeritageStory from '@/components/public/HeritageStory';
import YataraStandard from '@/components/public/YataraStandard';

export default async function HomePage() {
    return (
        <div className="min-h-screen bg-off-white flex flex-col gap-24 md:gap-32 pb-24">
            {/* The Cinematic Hero Section */}
            <HeroSection />

            {/* Social Proof — Trust signals right after hero */}
            <SocialProof />

            {/* How It Works — 3-step concierge flow */}
            <HowItWorks />

            {/* Signature Experiences — Editorial layout */}
            <SignatureExperiences />

            {/* The Curated Collection Grid */}
            <CuratedCollection />

            {/* The Founders / Heritage Story */}
            <HeritageStory />

            {/* Yatara Trust Badges */}
            <YataraStandard />
        </div>
    );
}
