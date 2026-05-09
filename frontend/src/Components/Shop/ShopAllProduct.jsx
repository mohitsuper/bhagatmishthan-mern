import React from 'react'
import { Link } from 'react-router-dom';
import SIngleCard from '../../Commen-components/SingleCard/SIngleCard';
export default function ShopAllProduct({singleData,slug}) {
  return (
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 md:px-40 px-5 mb-10 ">
        {singleData.length <0 ? "data not a found":
          singleData.map((data, index) => {
            return (
              <SIngleCard data={data} key={index}/>
            );
          })}
      </div>  )
}
