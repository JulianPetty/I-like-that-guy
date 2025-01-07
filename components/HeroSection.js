
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
        <div className="w-full h-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                navigation
                className="w-full h-full"
            >
                {postsWithPreview.slice(0, 3).reverse().map((post) => (
                    <SwiperSlide key={post.id}>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${post.coverPhoto.url})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-8">
                                <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
                                <p className="text-lg sm:text-xl mb-6 max-w-xl text-center">{post.preview}</p>
                                <a
                                    href={`/posts/${post.slug}`}
                                    className="bg-orange-500 py-3 px-6 rounded-full text-lg font-semibold hover:bg-orange-700 transition"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};