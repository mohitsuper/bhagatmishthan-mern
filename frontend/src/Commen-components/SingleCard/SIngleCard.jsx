import React from "react";
import { Link } from "react-router-dom";

export default function SIngleCard({ data }) {
  return (
    <Link
      to={`/shop/${data.category}/${data._id}`}
      className="block group"
    >

      <div className="relative bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500">

        {/* IMAGE SECTION */}
        <div className="relative overflow-hidden bg-zinc-100">

          {/* PRODUCT IMAGE */}
          <img
  src={data?.img || data?.subimage[0]}
  alt={data?.title}
  loading="lazy"
  onError={(e) => {
    e.target.src = "/no-image.jpg";
  }}
  className="w-full h-[260px] sm:h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
/>

          {/* TOP BADGES */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">

            <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              BEST SELLER
            </span>

            <span className="bg-white text-zinc-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
              NEW
            </span>
          </div>

          {/* ACTION ICONS */}
          <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">

            <button className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300">
              <i className="fa-regular fa-heart"></i>
            </button>

            <button className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300">
              <i className="fa-solid fa-eye"></i>
            </button>

          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* CATEGORY */}
          <span className="text-sm text-purple-600 font-semibold uppercase tracking-[2px]">
            {data?.category}
          </span>

          {/* TITLE */}
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mt-2 line-clamp-1 group-hover:text-purple-600 transition-all duration-300">
            {data?.title}
          </h3>

          {/* RATING */}
          <div className="flex items-center gap-1 mt-3 text-yellow-400 text-sm">

            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>

            <span className="text-zinc-500 ml-2 text-sm">
              (4.8)
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center justify-between mt-5">

            <div className="flex items-end gap-2">

              <h4 className="text-2xl font-bold text-zinc-900">
                ₹{data?.price}
              </h4>

              <span className="text-sm text-zinc-500 mb-1">
                / {data?.pcs} pcs
              </span>
            </div>

            <span className="text-sm text-green-600 font-semibold">
              In Stock
            </span>
          </div>

          {/* BUTTON */}
          <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white h-[50px] rounded-2xl font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-3">

            <i className="fa-solid fa-cart-shopping"></i>

            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
}