import { Metadata } from 'next';
import BespokeMapSection from '@/components/public/BespokeMapSection';

export const metadata: Metadata = {
    title: 'Bespoke Planning | Yatara Ceylon',
    description: 'Design your perfect Sri Lanka itinerary. Select districts on our interactive map and curate a luxury journey tailored to you.',
};

export default async function BuildTourPage() {
    return (
        <div className="h-screen w-screen overflow-hidden bg-[#0a0f0d] relative">
            <BespokeMapSection />
        </div>
    );
}
