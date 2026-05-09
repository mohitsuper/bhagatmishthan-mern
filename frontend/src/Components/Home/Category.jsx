import React, { useEffect, useState } from 'react'
import HomeHeading from '../../Commen-components/Heading/HomeHeading'
import { productCategory } from '../../data/Category/Category'
import { Link } from 'react-router-dom'
import { GetCategory } from '../../Api/Api'

export default function Category() {
  const [AllCategory,setAllCategory] = useState([])
  useEffect(()=>{
    const GetcategoryAll = async()=>{
      const responce = await GetCategory();
      setAllCategory(responce || [])
    }
    GetcategoryAll()
  },[])
   return (
   AllCategory?.length !==0 &&  (
      <div className='pt-20 lg:px-35 px-5'>
          <HomeHeading title={"Browse By Category"}/>
          <div className='grid xl:grid-cols-3  grid-cols-1 gap-5 pt-10'>
            {
              AllCategory?.map((v,i)=>
                  (
                    v?.image && (
                      <div key={i} className='relative'>
                        <img src={v?.image} loading="lazy"  alt={v?.name} className='w-full md:h-60 h-full rounded-md'/>
                        <div className='absolute md:top-20 top-10 -right-6 md:left-60'>
                        <h2 className='md:text-[1.5rem] text-xl uppercase font-bold text-white w-40'>{v?.name}</h2>
                        <button className='bg-red-400 px-5 text-white mt-4 py-2 rounded-md'>
                          <Link to={`/shop${v.path}`}>Add To Card</Link>
                         </button>
                        </div>
                      </div>
                    )
                  )
                
              )
            }
          </div>
      </div>
   ) )
  
}
