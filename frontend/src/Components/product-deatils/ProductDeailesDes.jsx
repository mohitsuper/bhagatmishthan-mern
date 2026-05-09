import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/bhagatultrashelflife.png";
import paymentlogo from "../../assets/images/logo/imgi_8_paypal.png";
import { GetBestSeller, PostCard } from "../../Api/Api";
import { Link, useParams } from "react-router-dom";
import GetIpAddress from "../../Commen-components/IpAddress/GetIpAddress";

export default function ProductDeailesDes({ SingleProductInfo }) {
  const [allproduct,setAllProduct] = useState([])
  const [activeImage, setActiveImage] = useState(0);
  const [quantityVal, setQuantityVal] = useState(1);
  const [singleProductInfo,setsingleProductInfo] = useState(null)
  const ip = GetIpAddress();
  useEffect(()=>{
    async function allproductData(){
      const responce = await GetBestSeller();
      setAllProduct(responce)
    }
    allproductData()
  },[])

  function RatingStar({ stars }) {
    const fullstar = Math.floor(stars);
    const halfstar = stars % 1 >= 0.5 ? 1 : 0;
    const emitystar = 5 - fullstar - halfstar;
    return (
      <div>
        {[...Array(fullstar)].map((_, index) => (
          <i key={`full-${index}`} className="fa fa-star text-[#FFD700]"></i>
        ))}
        {halfstar > 0 && (
          <i className="fa-solid fa-star-half-stroke text-[#FFD700]"></i>
        )}
        {[...Array(emitystar)].map((_, index) => (
          <i key={index} className="fa-regular fa-star text-[#FFD700]"></i>
        ))}
      </div>
    );
  }

  const postCardData = async () => {
    const responce = await PostCard({
      name: SingleProductInfo.title,
      price: SingleProductInfo.price,
      Ip_address: ip,
      Image: SingleProductInfo.subimage[0],
      user_id:""
    });
  };

  return (
    <section className="p-6 flex flex-wrap lg:flex-nowrap gap-10">
      {/* Product Images Section */}
      <div className="flex gap-4 basis-full lg:basis-[40%]">
        {/* Sub Images */}
        <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px] w-[80px]">
          {(SingleProductInfo?.length !==0) &&
            SingleProductInfo?.subimage?.map((v, i) => (
              <div key={i} className="border p-1 rounded hover:shadow">
                <img
                  src={v}
                  alt={`sub-${i}`}
                  onClick={() => setActiveImage(i)}
                  // loading="lazy"
                  className="object-cover w-full h-20 rounded"
                />
              </div>
            ))}
        </div>

        {/* Main Image */}
        <div className="h-[500px] flex-1">
          <img
            src={
              SingleProductInfo?.subimage[activeImage]
            }
            alt="Main Product"
            className="rounded-lg shadow-md h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="basis-full lg:basis-[60%] px-4 py-6 md:px-8 md:py-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          {SingleProductInfo?.title}
        </h2>

        <h3 className="my-2 text-gray-600">
          {singleProductInfo?.rating && (
            <RatingStar stars={singleProductInfo?.rating} />
          )}
          <span className="text-indigo-400 text-sm">(12 Customer Reviews)</span>
        </h3>

        {/* Product Description */}
        <div className="my-4">
          <h3 className="text-xl font-semibold text-gray-800">Description</h3>
          <p className="text-base text-gray-700 mt-2 leading-relaxed">
            {SingleProductInfo?.descrtion}
          </p>
        </div>

        {/* Product Details */}
        <div className="flex gap-5 items-center my-4">
          <div className="logo h-20 w-20">
            <img src={logo} className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-gray-800">
              <strong>Weight: </strong>
              {SingleProductInfo?.weight}
            </p>
            <p className="text-gray-800">
              <strong>Quantity: </strong>
              1
            </p>
            <p className="text-gray-800">
              <strong>Ingredients: </strong>
              {SingleProductInfo?.ingredients}
            </p>
          </div>
        </div>

        {/* Quantity & Price Section */}
        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-800">Quantity:</h3>
          <div className="flex gap-5 items-center">
            <p className="text-gray-800 text-md font-semibold">
              500 gram - ₹ {SingleProductInfo?.price}
            </p>
            <p className="flex items-center gap-2 text-sm text-white px-4 py-1 rounded-lg bg-green-600 w-fit">
              <i className="fa-solid fa-circle-check text-white"></i>
              In stock
            </p>
          </div>
        </div>

        {/* Quantity Selector & Add to Cart */}
        <div className="my-4 flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-md">
            <button
              className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={() => {
                if (quantityVal > 1) {
                  setQuantityVal(quantityVal - 1);
                }
              }}
            >
              -
            </button>
            <input
              type="number"
              value={quantityVal}
              readOnly
              className="w-12 text-center text-gray-700 border-none bg-transparent"
            />
            <button
              className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={() => {
                if (quantityVal < 10) {
                  setQuantityVal(quantityVal + 1);
                }
              }}
            >
              +
            </button>
          </div>
          <Link
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-700"
            onClick={postCardData}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Add to Cart</p>
          </Link>
          <div className="flex justify-center items-center bg-red-600 rounded-full h-5 w-5 p-5 hover:bg-red-400">
            <i className="fa-solid fa-heart text-xl text-white cursor-pointer"></i>
          </div>
        </div>

        {/* Favorite Icon */}

        {/* Online Payment Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Secure Online Payment
          </h3>
          <div className="flex mt-2">
            <img src={paymentlogo} alt="Payment Methods" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
