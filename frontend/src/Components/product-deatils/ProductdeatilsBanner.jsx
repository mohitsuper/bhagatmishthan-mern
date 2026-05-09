import React from 'react'
import icon1 from "../../assets/images/product-details/imgi_2_product_international_shipping-s.png";
import icon2 from "../../assets/images/product-details/imgi_3_product_shelf_life-sv.png";
import icon3 from "../../assets/images/product-details/imgi_4_shelf_life.png";
import icon4 from "../../assets/images/product-details/imgi_5_c_no_preservatives.png";
import bgImage from '../../assets/images/product-details/breadcrumbs-bg.png';
import {useEffect,useState} from 'react'

export default function ProductdeatilsBanner({SingleProductInfo}) {
  const HeaderIcon = [
    {
      icon: icon1,
      title: "Free Shipping",
    },
    {
      icon: icon2,
      title: "Shipping in 3-5 days",
    },
    {
      icon: icon3,
      title: "15 Days Shelf Life",
    },
    {
      icon: icon4,
      title: "No Preservatives",
    },
  ];

  
  

  return (
      <section 
      style={{
        background:`url(${bgImage})` 
      }}
      className={`bg-cover bg-center  text-black flex justify-center items-center flex-col py-10 px-6 gap-5 `}>
        <div className="heading flex items-center flex-col">
          <h1 className="text-4xl font-bold mb-4">
            { SingleProductInfo.title}
          </h1>
        </div>
        <div className="sub-text">
          <div className="grid md:grid-cols-4 gap-5 grid-cols-2">
            {HeaderIcon.map((v, i) => (
              <div key={i} className="flex items-center  gap-3">
                <img src={v.icon}  loading="lazy"  alt="" className="h-10 w-10" />
                <p className="text-[1.2rem]">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>  )
}
