import React from "react";
import errorImg from "../../assets/images/404-error.png";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#B172DB]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#B172DB]/20 blur-3xl rounded-full" />

      <div className="relative z-10 text-center max-w-xl">
        
        {/* Image */}
        {/* <div className="flex justify-center">
          <img
            src={errorImg}
            alt="404 Error"
            className="w-[180px] md:w-[240px] object-contain drop-shadow-xl"
          />
        </div> */}

        {/* 404 Text */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-black mt-6">
          4<span className="text-[#B172DB]">0</span>4
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 bg-[#B172DB] hover:bg-black text-white hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:scale-105"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}