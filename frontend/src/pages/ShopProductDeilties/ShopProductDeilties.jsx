import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ProductdeatilsBanner from "../../Components/product-deatils/ProductdeatilsBanner";
import ProductDeailesDes from "../../Components/product-deatils/ProductDeailesDes";
import ProductRelated from "../../Components/product-deatils/ProductRelated";
import { GetallProduct, GetCategory } from "../../Api/Api";

export default function ShopProductDeilties() {
  const location = useLocation();
  const slugId = location.pathname.split("/").pop();
  const [singleProduct, setSingleProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const FetchAllProducts = async ()=>{
    const responce = await GetallProduct();
    const SingleDescProduct = responce.find((item)=>item._id === slugId)
    setSingleProduct(SingleDescProduct)
    setAllProducts(responce)
  }

  useEffect(() => {
    FetchAllProducts();
  }, [slugId]);


  return singleProduct ? (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <ProductdeatilsBanner  SingleProductInfo={singleProduct} />
      <ProductDeailesDes SingleProductInfo={singleProduct} />
      <ProductRelated product={allProducts} />
    </div>
  ) : (
    <div className="bg-white h-[80v]">NO DATA FOUND</div>
  );
}
