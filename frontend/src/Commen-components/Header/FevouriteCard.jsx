import React from 'react'

export default function FevouriteCard() {
  return (
    <>
     

      {/* Cart Header */}
      <div className="p-6 mt-12 border-b">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Fevourite Item Card</h2>
        <p className="text-gray-500 text-sm">
           in your
          cart
        </p>
      </div>

      {/* Cart Items */}
      {/* <div className="flex flex-col gap-4 p-6 h-[70vh] overflow-y-auto">
        {AddCardData.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">Your cart is empty.</p>
        ) : (
          AddCardData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border rounded-lg p-3 hover:shadow-md transition-shadow"
            >
              <img
                src={item?.Image || "https://via.placeholder.com/80"}
                alt={item?.name}
                className="h-20 w-20 object-cover rounded"
              />

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

      {AddCardData.length > 0 && (
        <div className="p-6 border-t">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )} */}
    </>
  )
}
