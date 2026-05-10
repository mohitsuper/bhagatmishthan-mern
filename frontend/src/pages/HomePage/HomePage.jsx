import React from "react";
import Hero from "../../Commen-components/Hero/Hero";
import FemouseProduct from "../../Components/Home/FemouseProduct";
import BestSellerProduct from "../../Components/Home/BestSellerProduct";
import Category from "../../Components/Home/Category";
import GiftingProduct from "../../Components/Home/GiftingProduct";
import VideoSection from "../../Components/Home/VideoSection";
import f1 from "../../assets/images/femouse-banner/imgi_5_jaipurbhagat.jpg";
import f2 from "../../assets/images/femouse-banner/imgi_6_chogni-laddu-bhagat.jpg";
import f3 from "../../assets/images/femouse-banner/imgi_16_wedding-sweets.jpg";
import f4 from "../../assets/images/femouse-banner/imgi_17_Mithainama.jpg";
import { useEffect } from "react";
import { GetallProduct, GetProductType } from "../../Api/Api";
import { useState } from "react";

export default function HomePage() {
  const [allProduct,setAllProduct] = useState([])
    const [allProductType,setAllProductType] = useState([])

  const allProductData =async ()=>{
    const responce = await GetallProduct();
    setAllProduct(responce || [])
  }

  const allProductTypeData = async ()=>{
    const responce = await GetProductType()
    setAllProductType(responce)
  }
  useEffect(()=>{
    allProductData()
    allProductTypeData()
  },[])


  return (
    <div className="">
      <Hero />
      <FemouseProduct
        FemouseProductData={[
          {
            img: f1,
            title: "Jaipur's Favourite",
            subtitle: "Doodh Laddu from 6 decades",
          },
          {
            img: f2,
            title: "Sawamani / Prasad Offering",
            subtitle: "Chogni Laddu",
          },
        ]}
      />
      <BestSellerProduct allProduct={allProduct} allProductType={allProductType} />
      <FemouseProduct
        FemouseProductData={[
          {
            img: f3,
            title: "Jaipur's Favourite",
            subtitle: "Doodh Laddu from 6 decades",
          },
          {
            img: f4,
          },
        ]}
      />
      <Category />
      <GiftingProduct  allProduct={allProduct} allProductType={allProductType} />
      <VideoSection />
    </div>
  );
}
