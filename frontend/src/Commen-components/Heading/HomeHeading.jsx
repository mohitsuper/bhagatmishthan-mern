import React from 'react'
import Himg from '../../assets/images/shapes/imgi_7_hding-after.png'
export default function HomeHeading({title}) {
  return (
    <div className='flex-col items-center flex gap-2'>
        <h1 className='home-heading'>{title}</h1>
        <img src={Himg} alt=""   loading="lazy"  className='w-40'/>
    </div>
  )
}
