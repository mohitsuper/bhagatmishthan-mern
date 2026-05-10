import React from "react";

export default function FemouseProduct({ FemouseProductData }) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {FemouseProductData.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="relative overflow-hidden rounded-3xl min-h-[260px] lg:min-h-[320px] group"
              >

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-all duration-500"></div>

                {/* CONTENT */}
                <div
                  className={`relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-12
                  ${!item.title ? "items-start pt-20" : ""}
                  `}
                >

                  {/* SMALL TAG */}
                  {item.title && (
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs tracking-[3px] uppercase px-4 py-2 rounded-full mb-5 w-fit">
                      Trending Collection
                    </span>
                  )}

                  {/* TITLE */}
                  <h1 className="text-white text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight max-w-[420px]">
                    {item?.title}
                  </h1>

                  {/* SUBTITLE */}
                  <p className="text-zinc-200 text-base sm:text-lg mt-3 mb-7 max-w-[420px] leading-relaxed">
                    {item?.subtitle}
                  </p>

                  {/* BUTTON */}
                  <button
                    className={`
                      ${
                        !item.title && !item.subtitle
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-purple-600 hover:bg-purple-700"
                      }
                      flex items-center gap-3 px-7 py-4 rounded-full
                      text-white font-semibold tracking-wide
                      transition-all duration-300
                      w-fit shadow-xl hover:scale-105
                    `}
                  >

                    {!item.title && !item.subtitle ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 512 512"
                          className="w-5 h-5"
                        >
                          <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
                        </svg>

                        WATCH NOW
                      </>
                    ) : (
                      <>
                        Shop Now

                        <i className="fa-solid fa-arrow-right"></i>
                      </>
                    )}
                  </button>
                </div>

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 scale-110 group-hover:scale-100 transition-transform duration-[4000ms]"></div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}