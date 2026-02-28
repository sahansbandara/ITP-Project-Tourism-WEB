'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { tourCategories } from '@/data/tourCategories';

import 'swiper/css';
import 'swiper/css/navigation';

export default function TourCategoriesCarousel() {
    return (
        <section className="py-20 md:py-24 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

                {/* Header Row: Title & Right CTA */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <span className="block text-[10px] tracking-[0.2em] font-nav text-deep-emerald/50 uppercase mb-4">
                            Explore by Interest
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-deep-emerald leading-tight">
                            The Collections
                        </h2>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link
                            href="/packages"
                            className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.2em] font-nav font-semibold text-deep-emerald hover:text-antique-gold uppercase transition-colors group"
                        >
                            Explore All
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        {/* Navigation Arrows */}
                        <div className="flex gap-2">
                            <button
                                id="cat-prev"
                                aria-label="Previous category"
                                className="w-12 h-12 rounded-full border border-deep-emerald/10 flex items-center justify-center text-deep-emerald/40 hover:text-white hover:bg-deep-emerald hover:border-deep-emerald transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                            <button
                                id="cat-next"
                                aria-label="Next category"
                                className="w-12 h-12 rounded-full border border-deep-emerald/10 flex items-center justify-center text-deep-emerald/40 hover:text-white hover:bg-deep-emerald hover:border-deep-emerald transition-all duration-300"
                            >
                                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    navigation={{
                        prevEl: '#cat-prev',
                        nextEl: '#cat-next',
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1.2, spaceBetween: 16 },
                        640: { slidesPerView: 2.2, spaceBetween: 24 },
                        1024: { slidesPerView: 3.2, spaceBetween: 24 },
                        1280: { slidesPerView: 4.2, spaceBetween: 24 },
                    }}
                    className="!overflow-visible"
                    style={{ overflow: 'visible' }}
                >
                    {tourCategories.map((cat, idx) => (
                        <SwiperSlide key={idx} className="!w-auto">
                            <Link href={cat.href} className="group block w-[280px] md:w-[320px]">
                                <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-6 bg-gray-100">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        sizes="(max-width: 768px) 280px, 320px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    {/* Subtle dark gradient at bottom for text contrast */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-white font-display text-2xl mb-1">
                                            {cat.title}
                                        </h3>
                                        <p className="text-white/80 font-nav text-xs font-light tracking-wide opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 line-clamp-1">
                                            {cat.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
