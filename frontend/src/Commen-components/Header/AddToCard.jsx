import React, { useContext, useEffect, useState } from "react";
import { DeleteCardItem, GetCard } from "../../Api/Api";
import { AddToCardVal } from "../../UseContext/AddToCardContext";

export default function AddToCard({isHandelReloade}) {
  const {count,setCount} = useContext(AddToCardVal)
  const [AddCardData, setAddCardData] = useState([]);
   useEffect(() => {
      const FetchApiData = async () => {
        const data = await GetCard();
        setAddCardData(data || []);
        setCount(AddCardData?.length)
      };
      FetchApiData();
    },[AddToCardApi]);


  
  async function AddToCardApi(id){
      const responce = await DeleteCardItem(id);
      if(AddCardData.length >0){
         isHandelReloade(true)
      }
      isHandelReloade(true)
  }
  return (
    <>
     
      {/* Cart Header */}
      <div className="p-6 mt-12 border-b">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart</h2>
        <p className="text-gray-500 text-sm">
          {AddCardData?.length} item{AddCardData?.length !== 1 ? "s" : ""} in your
          cart
        </p>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-4 p-6 h-[70vh] overflow-y-auto">
        {AddCardData?.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">Your cart is empty.</p>
        ) : (

          AddCardData?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border rounded-lg p-3 hover:shadow-md transition-shadow relative"
            >

             <button className="" onClick={()=>AddToCardApi(item._id)}><i className="fa-solid fa-xmark text-black text-[1rem] absolute right-3 top-3"></i></button>

              {/* Image */}
              <img
                src={item?.Image || "https://via.placeholder.com/80"}
                alt={item?.name}
                className="h-20 w-20 object-cover rounded"
              />

              {/* Text */}
              <div className="flex flex-col justify-center">
                <h5 className="text-lg font-semibold text-gray-800">
                  {item?.name}
                </h5>
                <span className="text-gray-600 font-medium">{item?.price}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Checkout Button */}
      {AddCardData?.length > 0 && (
        <div className="p-6 border-t">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </>
  );
}
