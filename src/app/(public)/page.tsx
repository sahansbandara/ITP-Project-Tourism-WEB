import HeroSection from '@/components/public/HeroSection';
import TourCategoriesCarousel from '@/components/public/TourCategoriesCarousel';
import FeaturedJourneys from '@/components/public/FeaturedJourneys';
import SocialProof from '@/components/public/SocialProof';
import HowItWorks from '@/components/public/HowItWorks';
import BuildTourTeaser from '@/components/public/BuildTourTeaser';
import PremiumStory from '@/components/public/PremiumStory';
import ExperiencesCarousel from '@/components/public/ExperiencesCarousel';
import FinalCTA from '@/components/public/FinalCTA';

export default async function HomePage() {
    return (
        <main className="min-h-screen bg-off-white flex flex-col">
            {/* 1. Hook */}
            <HeroSection />

            {/* 2. Browse fast */}
            <TourCategoriesCarousel />

            {/* 3. Featured journeys */}
            <FeaturedJourneys />

            {/* 4. Social proof */}
            <SocialProof />

            {/* 5. Clarity - How It Works */}
            <HowItWorks />

            {/* 6. Drive to differentiator */}
            <BuildTourTeaser />

            {/* 7. Premium justification */}
            <PremiumStory />

            {/* 8. Emotion - Testimonials */}
            <ExperiencesCarousel />

            {/* 9. Convert */}
            <FinalCTA />

            {/* 10. Footer is handled in layout.tsx */}
        </main>
    );
}
