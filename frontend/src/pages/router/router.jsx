import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ProductDeities from '../ProductDeities/ProductDeities'
import ShopPage from '../shop/ShopPage'
import ShopProductDeilties from '../ShopProductDeilties/ShopProductDeilties'
import Singin from '../singin/Singin'
import Singup from '../singup/Singup'
import Myaccount from '../Profile/Myaccount'
import Error404 from '../404Page/Error404'
export default function Allrouter() {
  return (
          <Routes>
            <Route path="/" element={<HomePage />} />
             <Route path="/singin" element={<Singin />} />
             <Route path='/singup' element={<Singup/>}/>
             <Route path='/product/:slug' element={<ProductDeities/>}/>
            <Route path='/shop/:slug' element={<ShopPage/>}/>
            <Route path='/shop/:slug/:slug' element={<ShopProductDeilties/>}/>
            <Route path="/profile" element={<Myaccount/>}/>
            <Route path="/*" element={<Error404/>}/>
          </Routes>
  )
}
