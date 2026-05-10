// src/components/HeroSwiper.jsx

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { GetHeroBanner } from "../../Api/Api";

export default function Hero() {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const HeroData = async () => {
      try {
        const response = await GetHeroBanner();
        setBanner(response || []);
      } catch (error) {
        console.error("Error fetching hero banner:", error);
      } finally {
        setLoading(false);
      }
    };

    HeroData();
  }, []);

  // LOADING
  if (loading) {
    return (
      <div className="h-[650px] bg-zinc-100 animate-pulse flex items-center justify-center">
        <p className="text-zinc-500 text-xl font-semibold">
          Loading Banner...
        </p>
      </div>
    );
  }

  // NO DATA
  if (banner.length === 0) {
    return <div className="hidden"></div>;
  }

  return (
    <div className="w-full relative">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="heroSwiper"
      >
        {banner.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="relative w-full h-[650px] overflow-hidden bg-zinc-100">

              {/* IMAGE */}
              <img
                src={item.image}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-center">

                <div className="max-w-[1400px] mx-auto w-full px-10">

                  <div className="max-w-[650px] text-white">

                    <p className="uppercase tracking-[5px] text-sm mb-4 text-purple-300 font-semibold">
                      Premium Collection
                    </p>

                    <h1 className="text-6xl font-bold leading-tight mb-6">
                      Discover The Latest Fashion Trends
                    </h1>

                    <p className="text-lg text-zinc-200 mb-8 leading-relaxed">
                      Explore our newest arrivals with premium quality and
                      modern style made for everyday fashion.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex items-center gap-5">

                      <button className="bg-purple-600 hover:bg-purple-700 duration-300 px-8 py-4 rounded-full text-white font-semibold">
                        Shop Now
                      </button>

                      <button className="border border-white hover:bg-white hover:text-black duration-300 px-8 py-4 rounded-full font-semibold">
                        Explore More
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
}