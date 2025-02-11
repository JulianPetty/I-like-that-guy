'use client'; 

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSection({ postsWithPreview }) {
        // Fallback UI if postsWithPreview is undefined
  if (!postsWithPreview || postsWithPreview.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="relative w-full h-[70vh] sm:h-[70vh] md:h-[80vh]">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000 }}
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}

                className="w-full h-full"
            >
                {postsWithPreview.slice().reverse().map((post) => (
                    <SwiperSlide key={post.id}>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${post.coverPhoto.url})` }}
                        >
                                {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="mx-auto w-[75vw] h-full">
                                <div className="relative z-10 flex flex-col items-start justify-end w-full h-full text-orange-50 pb-8 px-4 sm:px-8 lg:px-0">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-md mb-4 mt-20 sm:mt-0">{post.title}</h1>
                                    <p className="hidden md:block text-sm sm:text-md md:text-lg mb-3 md:mb-6 max-w-xl text-[#e9e8e6]">
                                        {post.preview}
                                    </p>
                                    <a
                                        href={`/posts/${post.slug}`}
                                        className="text-lg text-[#e9e8e6] font-medium hover:text-orange-500 transition underline underline-offset-1"
                                    >
                                    Read More →
                                    </a>
                                </div>
                                <div className="relative z-10 flex flex-col items-end justify-end w-full h-full text-orange-50 pb-8 px-4 sm:px-8">
                                    <p className="text-sm">{post.author.name}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};