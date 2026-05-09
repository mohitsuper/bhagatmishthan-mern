import React, { useEffect, useState } from 'react'
import HomeHeading from '../../Commen-components/Heading/HomeHeading'
import SIngleCard from '../../Commen-components/SingleCard/SIngleCard'

export default function BestSellerProduct({allProduct,allProductType}) {
  const bestSellerProduct = allProduct.length >0 ?  allProduct.filter(
  (item) => item.productType.includes("Best Seller")):[];
  if(bestSellerProduct.length >0){
      return (
      <div>
          <HomeHeading title={"best seller"}/>
          <AllBestSellerProduct BestSellerProductData={bestSellerProduct}/>
      </div>
    )
  }
}

function AllBestSellerProduct({BestSellerProductData}){
    return(
        <div className="grid xl:grid-cols-4 grid-cols-1 gap-4 xl:px-35 px-5 py-5">
            {BestSellerProductData?.length !==0 && BestSellerProductData?.map((item, index) => {
                 return(
                    <SIngleCard key={index} data={item} />
                 )
            })
           }
        </div>
    )
}
