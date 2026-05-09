import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import ProductdeatilsBanner from "../../Components/product-deatils/ProductdeatilsBanner";
import ProductDeailesDes from "../../Components/product-deatils/ProductDeailesDes";
import ProductRelated from "../../Components/product-deatils/ProductRelated";
import { BestSellerProductData } from "../../data/product/BestSellingProduct";
import { GiftingProductData } from "../../data/product/GiftingProductData";
import { AllProductData } from "../../data/product/AllProductData";

export default function ProductDeities() {
  const { slug } = useParams();
  const [SingleProductInfo, setSingleProductInfo] = useState(null);
  const [AllProductInfo, setAllProductInfo] = useState(null);
  const location = useLocation()
  const id = location.pathname.split('/')[2];
  useEffect(() => {
    let productData = BestSellerProductData.find(
      (item) => decodeURI(item.title).toLowerCase() === slug
    );

    if (productData) {
      setSingleProductInfo(productData);
      setAllProductInfo(BestSellerProductData);
    } else {
      productData = GiftingProductData.find(
        (item) => decodeURI(item.title).toLowerCase() === slug
      );

      if (productData) {
        setSingleProductInfo(productData);
        setAllProductInfo(BestSellerProductData);
      } else {
        productData = AllProductData.map((item)=>
          (item)=>item?.data.map((subitem)=>
            console.log(subitem.data)
            // decodeURI(item).toLowerCase() === slug
          ) 
          // console.log(item)
          // (item) => decodeURI(item.title).toLowerCase() === slug
        );
      }
      if (productData) {
        setSingleProductInfo(productData);
        setAllProductInfo(GiftingProductData);
      } else {
        setSingleProductInfo(null);
      }
    }
  }, [slug]);

  // useEffect(()=>{
  //   // let productData =
  // },[])
  return SingleProductInfo !== null ? (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <ProductdeatilsBanner SingleProductInfo={SingleProductInfo} />
      <ProductDeailesDes id={id} SingleProductInfo={SingleProductInfo} />
      <ProductRelated product={AllProductInfo} />
    </div>
  ) : (
    <div className="bg-white h-[80v]">NO DATA FOUND</div>
  );
}
