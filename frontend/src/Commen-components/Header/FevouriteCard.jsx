import React, { useContext, useEffect } from "react";
import { FavouriteContext } from "../../UseContext/FavouriteCardContext";
import { GetCard } from "../../Api/Api";

export default function FavouriteCard() {
  const { favisOpen, setFavIsOpen, favouriteData, setFavouriteData } =
    useContext(FavouriteContext);

  useEffect(() => {
    if (!favisOpen) return;

    const fetchApiData = async () => {
      const data = await GetCard();
      setFavouriteData(data);
    };

    fetchApiData();
  }, [favisOpen]);

  if (!favisOpen) return null;

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={() => setFavIsOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-[340px] bg-white shadow-2xl z-50 flex flex-col border-l border-[#851AD6]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#000000] text-white border-b border-[#851AD6]">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fa-solid fa-heart text-[#851AD6]"></i>
            <span>Favourite Items</span>
          </h2>

          <button
            onClick={() => setFavIsOpen(false)}
            className="hover:scale-110 transition"
          >
            <i className="fa-solid fa-xmark text-white"></i>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-white">
          {favouriteData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <i className="fa-regular fa-heart text-4xl text-[#851AD6] mb-2"></i>
              <p className="text-sm">No favourite items yet</p>
            </div>
          ) : (
            favouriteData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-[#851AD6] transition"
              >
                {/* Image */}
                <img
                  src={item?.Image || "https://via.placeholder.com/80"}
                  alt={item?.name}
                  className="h-14 w-14 object-cover rounded-lg border"
                  onError={(e) => {
                    e.target.src = "/no-image.jpg";
                  }}
                />

                {/* Info */}
                <div className="flex-1">
                  <h5 className="text-sm font-semibold text-[#000000]">
                    {item?.name}
                  </h5>

                  <p className="text-sm font-medium text-[#851AD6]">
                    ₹{item?.price}
                  </p>
                </div>

                {/* Heart Icon */}
                <i className="fa-solid fa-heart text-[#851AD6]"></i>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {favouriteData.length > 0 && (
          <div className="p-4 border-t border-[#851AD6] bg-[#000000]">
            <button className="w-full bg-[#851AD6] text-white py-3 rounded-xl font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
              <i className="fa-solid fa-cart-shopping"></i>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
