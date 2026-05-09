import React from 'react'
import SIngleCard from '../../Commen-components/SingleCard/SIngleCard'

export default function ProductRelated({product}) {
  const RandomOrder = (arry)=>{
    const RandDomeArry = [...arry];
    // ramdome index create and return
    for(let i = RandDomeArry.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [RandDomeArry[i], RandDomeArry[j]] = [RandDomeArry[j], RandDomeArry[i]];
    }
    return RandDomeArry
}
  return (
      <section className="bg-gray-100 py-10 px-30">
        <h3 className="text-2xl font-bold text-[#442DD7] mb-6">
          Related Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Example Related Product */}
          {product?.length >0 && RandomOrder(product).slice(0,4).map((v,id) => {
            return(
                <div className='' key={id}>
                    <SIngleCard data={v}/>
                </div>
            )
          })}
        </div>
      </section>  
      
    )
}