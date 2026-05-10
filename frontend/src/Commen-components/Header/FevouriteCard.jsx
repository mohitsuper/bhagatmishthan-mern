import React, { useContext, useEffect } from "react";
import { FavouriteContext } from "../../UseContext/FavouriteCardContext";
import { GetCard } from "../../Api/Api";

export default function FavouriteCard() {

  const {
    favisOpen,
    setFavIsOpen,
    favouriteData,
    setFavouriteData,
  } = useContext(FavouriteContext);

  useEffect(() => {

    if (!favisOpen) return;

    const fetchApiData = async () => {
      const data = await GetCard();
      setFavouriteData(data || []);
    };

    fetchApiData();

  }, [favisOpen]);

  if (!favisOpen) return null;

  return (
    <>

      {/* Overlay */}
      <div
        onClick={() => setFavIsOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col border-l border-red-200">

        {/* Header */}
        <div className="relative overflow-hidden p-6 border-b border-red-200 bg-gradient-to-r from-black via-[#3b0a0a] to-[#851AD6]">

          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex items-start justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <i className="fa-solid fa-heart text-red-400 text-lg"></i>
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    Favourite Items
                  </h2>

                  <p className="text-gray-200 text-sm mt-1">
                    {favouriteData?.length} saved item
                    {favouriteData?.length !== 1 ? "s" : ""}
                  </p>

                </div>

              </div>

            </div>

            {/* Close */}
            <button
              onClick={() => setFavIsOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 border border-white/20 flex items-center justify-center transition-all duration-300"
            >
              <i className="fa-solid fa-xmark text-white"></i>
            </button>

          </div>

        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5 bg-white">

          {favouriteData.length === 0 ? (

            <div className="h-full flex flex-col items-center justify-center text-center">

              <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                <i className="fa-regular fa-heart text-4xl text-red-500"></i>
              </div>

              <h3 className="text-xl font-bold text-black mt-5">
                No Favourite Items
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Save products you love ❤️
              </p>

            </div>

          ) : (

            favouriteData.map((item, index) => (

              <div
                key={index}
                className="group relative flex gap-4 bg-zinc-50 hover:bg-red-50 border border-zinc-200 hover:border-red-200 rounded-2xl p-4 transition-all duration-300"
              >

                {/* Image */}
                <div className="overflow-hidden rounded-xl">

                  <img
                    src={item?.Image || "https://via.placeholder.com/80"}
                    alt={item?.name}
                    className="h-24 w-24 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/no-image.jpg";
                    }}
                  />

                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1">

                  <h5 className="text-lg font-bold text-black">
                    {item?.name}
                  </h5>

                  <p className="text-sm text-gray-500 mt-1">
                    Premium Favourite Product
                  </p>

                  <span className="text-red-500 font-bold text-lg mt-2">
                    ₹ {item?.price}
                  </span>

                </div>

                {/* Heart */}
                <div className="absolute top-4 right-4">
                  <i className="fa-solid fa-heart text-red-500"></i>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {favouriteData.length > 0 && (

          <div className="border-t border-red-100 p-6 bg-white">

            <button className="w-full bg-red-500 hover:bg-black text-white py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3">

              <i className="fa-solid fa-heart"></i>

              View Favourite Products

            </button>

          </div>
        )}

      </div>
    </>
  );
}