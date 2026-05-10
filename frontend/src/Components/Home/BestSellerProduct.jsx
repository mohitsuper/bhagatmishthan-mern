import React from "react";
import HomeHeading from "../../Commen-components/Heading/HomeHeading";
import SIngleCard from "../../Commen-components/SingleCard/SIngleCard";

export default function BestSellerProduct({
  allProduct,
  allProductType,
}) {

  const bestSellerProduct =
    allProduct?.length > 0
      ? allProduct.filter((item) =>
          item.productType.includes("Best Seller")
        )
      : [];

  if (bestSellerProduct.length > 0) {
    return (
      <section className="max-w-[1400px] mx-auto  py-10">

        {/* HEADING */}
        <div className="mb-10">
          <HomeHeading title={"Best Seller Products"} />
        </div>

        {/* PRODUCT GRID */}
        <AllBestSellerProduct
          BestSellerProductData={bestSellerProduct}
        />
      </section>
    );
  }

  return null;
}

function AllBestSellerProduct({ BestSellerProductData }) {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

      {/* TOP FILTER */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-5">

        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900">
            Trending Best Sellers
          </h2>

          <p className="text-zinc-500 mt-2">
            Discover our most loved premium products
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex items-center gap-3 flex-wrap">

          <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium">
            All
          </button>

          <button className="bg-zinc-100 hover:bg-purple-100 hover:text-purple-600 duration-300 px-5 py-2 rounded-full text-sm font-medium">
            New Arrivals
          </button>

          <button className="bg-zinc-100 hover:bg-purple-100 hover:text-purple-600 duration-300 px-5 py-2 rounded-full text-sm font-medium">
            Popular
          </button>

        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {BestSellerProductData?.length > 0 &&
          BestSellerProductData.map((item, index) => {
            return (
              <div
                key={index}
                className="group transition-all duration-300"
              >

                {/* CARD */}
                <div className="bg-white rounded-3xl border border-zinc-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">

                  <SIngleCard data={item} />

                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}