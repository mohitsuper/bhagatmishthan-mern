import React, { useEffect, useState } from "react";
import HomeHeading from "../../Commen-components/Heading/HomeHeading";
import { Link } from "react-router-dom";
import { GetCategory } from "../../Api/Api";

export default function Category() {
  const [AllCategory, setAllCategory] = useState([]);

  useEffect(() => {
    const GetcategoryAll = async () => {
      const responce = await GetCategory();
      setAllCategory(responce || []);
    };

    GetcategoryAll();
  }, []);

  return (
    AllCategory?.length !== 0 && (
      <section className="pt-20 xl:px-32 lg:px-16 md:px-10 px-5 overflow-hidden">
        
        <HomeHeading title={"Browse By Category"} />

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 pt-12">
          
          {AllCategory?.map(
            (v, i) =>
              v?.image && (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl shadow-lg"
                >
                  
                  {/* Image */}
                  <img
                    src={v?.image}
                    loading="lazy"
                    alt={v?.name}
                    className="w-full h-[260px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-white leading-tight max-w-[220px]">
                      {v?.name}
                    </h2>

                    <p className="text-gray-200 text-sm mt-2 max-w-[260px]">
                      Explore delicious products and premium quality items.
                    </p>

                    <Link to={`/shop${v.path}`}>
                      <button className="mt-5 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105">
                        Shop Now
                      </button>
                    </Link>

                  </div>

                  {/* Border Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500" />
                
                </div>
              )
          )}
        
        </div>
      </section>
    )
  );
}