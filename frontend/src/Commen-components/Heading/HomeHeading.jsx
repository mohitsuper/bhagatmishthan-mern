import React from "react";
import Himg from "../../assets/images/shapes/imgi_7_hding-after.png";

export default function HomeHeading({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-8">

      {/* SMALL TAG */}
      <span className="uppercase tracking-[4px] text-sm font-semibold text-purple-600 mb-3">
        Premium Collection
      </span>

      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 capitalize leading-tight">
        {title}
      </h1>

      {/* SUBTITLE */}
      <p className="text-zinc-500 mt-4 max-w-[650px] text-sm sm:text-base leading-relaxed px-4">
        {subtitle
          ? subtitle
          : "Explore our latest trending products crafted with premium quality and modern style."}
      </p>

      {/* SHAPE IMAGE */}
      <div className="mt-5 relative">

        <img
          src={Himg}
          alt="heading shape"
          loading="lazy"
          className="w-32 sm:w-40 object-contain"
        />

        {/* GLOW EFFECT */}
        <div className="absolute inset-0 blur-xl bg-purple-200 opacity-40"></div>
      </div>
    </div>
  );
}