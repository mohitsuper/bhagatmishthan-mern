import React from 'react'
import HomeHeading from '../../Commen-components/Heading/HomeHeading'
import { SwiperSlide,Swiper} from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import SIngleCard from '../../Commen-components/SingleCard/SIngleCard'
import { GiftingProductData } from '../../data/product/GiftingProductData'


export default function GiftingProduct({allProduct}) {
  const GiftingProduct =   allProduct.length >0? allProduct.filter((item)=>item?.productType.includes("Gifting's product")):[];
  if(GiftingProduct.length > 0){ 
    return (
      <div className='pt-20 lg:px-35 px-10'>
          <HomeHeading title={"Gifting's product"}/>
          <div className='pt-15'>
           <Swiper 
                 modules={[Navigation, Pagination, Autoplay]}
                 navigation
                 pagination={{ clickable: true }}
                 autoplay={{ delay: 4000, disableOnInteraction: false }}
                 spaceBetween={30}
                 breakpoints={{
                  1080:{slidesPerView:4},
                   992:{slidesPerView:3},
                   768:{slidesPerView:2},
                   0:{slidesPerView:1}
                 }}
                 loop={true}
                 className="h-[450px] w-full object-cover pt-10"
           >
              {
                  GiftingProduct.map((v,i)=>{
                      return(
                          <SwiperSlide key={i}>
                              <SIngleCard data={v}/>
                          </SwiperSlide>
                      )
                  })
              }
           </Swiper>
          </div>
      </div>
    )
  }
}
