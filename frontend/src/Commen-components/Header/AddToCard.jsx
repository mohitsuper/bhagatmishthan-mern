import React, { useContext, useEffect, useState } from "react";
import { DeleteCardItem, GetCard } from "../../Api/Api";
import { AddToCardVal } from "../../UseContext/AddToCardContext";

export default function AddToCard({ isHandelReloade }) {

  const { count, setCount,addCardOpen, setAddCardOpen } = useContext(AddToCardVal);
  const [AddCardData, setAddCardData] = useState([]);

  useEffect(() => {

    const FetchApiData = async () => {
      const data = await GetCard();

      setAddCardData(data || []);
      setCount(data?.length || 0);
    };

    FetchApiData();

  }, []);

  // delete item
  async function AddToCardApi(id) {

    await DeleteCardItem(id);

    const updatedData = AddCardData.filter((item) => item._id !== id);

    setAddCardData(updatedData);
    setCount(updatedData.length);

    isHandelReloade(true);
  }

  // total
  const totalPrice = AddCardData.reduce(
    (acc, item) => acc + Number(item.price || 0),
    0
  );
  if(!addCardOpen) return null
  return (
    <>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"></div>

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col border-l border-[#B172DB]/20">

        {/* Header */}
        <div className="p-6 border-b border-[#B172DB]/10 bg-gradient-to-r from-black to-[#B172DB]">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-2xl font-bold text-white">
                Shopping Cart
              </h2>

              <p className="text-gray-200 text-sm mt-1">
                {AddCardData?.length} item
                {AddCardData?.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div onClick={()=>setAddCardOpen(false)} className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <i className="fa-solid fa-times text-white text-lg"></i>
            </div>

          </div>

        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">

          {AddCardData?.length === 0 ? (

            <div className="h-full flex flex-col items-center justify-center text-center">

              <div className="w-24 h-24 rounded-full bg-[#B172DB]/10 flex items-center justify-center">
                <i className="fa-solid fa-cart-shopping text-3xl text-[#B172DB]"></i>
              </div>

              <h3 className="text-xl font-bold text-black mt-5">
                Your Cart Is Empty
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Add products to continue shopping
              </p>

            </div>

          ) : (

            AddCardData?.map((item, index) => (

              <div
                key={index}
                className="group relative flex gap-4 bg-zinc-50 hover:bg-[#B172DB]/5 border border-zinc-200 hover:border-[#B172DB]/20 rounded-2xl p-4 transition-all duration-300"
              >

                {/* Remove */}
                <button
                  onClick={() => AddToCardApi(item._id)}
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white shadow hover:bg-red-500 hover:text-white transition-all"
                >
                  <i className="fa-solid fa-xmark text-sm"></i>
                </button>

                {/* Image */}
                <div className="overflow-hidden rounded-xl">

                  <img
                    src={item?.Image || "https://via.placeholder.com/80"}
                    alt={item?.name}
                    className="h-24 w-24 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">

                  <h5 className="text-lg font-bold text-black">
                    {item?.name}
                  </h5>

                  <p className="text-sm text-gray-500 mt-1">
                    Premium Quality Product
                  </p>

                  <span className="text-[#B172DB] font-bold text-lg mt-2">
                    ₹ {item?.price}
                  </span>

                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {AddCardData?.length > 0 && (

          <div className="border-t border-[#B172DB]/10 p-6 bg-white">

            {/* Total */}
            <div className="flex items-center justify-between mb-5">

              <h4 className="text-lg font-semibold text-black">
                Total
              </h4>

              <span className="text-2xl font-bold text-[#B172DB]">
                ₹ {totalPrice}
              </span>

            </div>

            {/* Buttons */}
            <div className="space-y-3">

              <button className="w-full bg-black hover:bg-[#B172DB] text-white py-4 rounded-2xl font-semibold transition-all duration-300">
                Proceed To Checkout
              </button>

              <button className="w-full border border-[#B172DB]/30 hover:bg-[#B172DB]/10 text-black py-4 rounded-2xl font-semibold transition-all duration-300">
                Continue Shopping
              </button>

            </div>

          </div>
        )}

      </div>
    </>
  );
}