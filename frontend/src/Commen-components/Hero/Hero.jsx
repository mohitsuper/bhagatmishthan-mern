// src/components/HeroSwiper.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Local fallback images
import heroswiperimg1 from "../../assets/images/hero-benner/imgi_2_laddu_77247.webp";
import heroswiperimg2 from "../../assets/images/hero-benner/imgi_3_bhagat-banner-current-4-_76611.webp";
import heroswiperimg3 from "../../assets/images/hero-benner/imgi_4_namkeen-2-_3284.webp";

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
        setBanner(response || []); // ✅ handle undefined/null
      } catch (error) {
        console.error("Error fetching hero banner:", error);
      } finally {
        setLoading(false); // ✅ always stop loading
      }
    };
    HeroData();
  }, []);

  // ✅ Loading state
  if (loading) {
    return (
      <div className="h-[500px] w-full bg-gray-50 flex justify-center items-center text-gray-600 text-xl">
        Loading...
      </div>
    );
  }
  if(banner.length === 0){
    return(
      <div className="h-0 w-full bg-gray-50 flex justify-center items-center text-gray-600 text-xl">
      </div>
    )
  }


  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="h-full w-full"
    >
      {banner.map((item, index) => (
        <SwiperSlide key={index} className="w-full h-50">
          <img
            src={item.image}
            alt={`Hero Slide ${index + 1}`}
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
