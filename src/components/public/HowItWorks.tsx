'use client';

import { FileText, Compass, Plane, Map } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Map,
        title: 'Pick Regions',
        description: 'Select from our curated destinations.',
    },
    {
        number: '02',
        icon: Compass,
        title: 'Choose Experiences',
        description: 'Add heritage, wildlife, or luxury stays.',
    },
    {
        number: '03',
        icon: FileText,
        title: 'We Craft Itinerary',
        description: 'Our experts refine your perfect route.',
    },
    {
        number: '04',
        icon: Plane,
        title: 'Confirm & Travel',
        description: 'Fixed-price, seamless luxury execution.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white border-b border-black/[0.03]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <span className="block text-[10px] tracking-[0.2em] font-nav text-deep-emerald/50 uppercase mb-4">
                        The Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-deep-emerald leading-tight mb-6">
                        Seamless <span className="italic font-light">Customization</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col p-8 bg-[#f9f9f9] border border-black/[0.03] rounded-md group hover:bg-deep-emerald hover:text-white transition-colors duration-500">

                            <div className="flex justify-between items-start mb-12 text-deep-emerald group-hover:text-antique-gold transition-colors duration-500">
                                <step.icon className="w-8 h-8" strokeWidth={1} />
                                <span className="text-[10px] font-nav font-semibold tracking-widest uppercase">
                                    {step.number}
                                </span>
                            </div>

                            <h3 className="text-xl font-display mb-3 tracking-wide">
                                {step.title}
                            </h3>
                            <p className="text-sm font-light leading-relaxed opacity-70">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
