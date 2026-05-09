import axios from "axios"

import {toast} from 'react-toastify'

const baseurl = import.meta.env.VITE_BASEURL;
export const GetTopbarData =async ()=>{
    try{
        const responce = await axios.get(`${baseurl}/web/topbar`)
        return responce.data.data;
    }
    catch(error){
        console.log('topbar api data fetch failed',error)
    }
}

export const PostSingUp = async (data)=>{
    console.log(data)
    const {username,email,password} = data
    try{
        const responce = await axios.post(`${baseurl}/post/singup`,{
            username,email,password
        })
        alert("singup successfull done!")
    }
    catch(error){
        console.log("singup error",error)
    }
}

export const GetUserInfo = async()=>{
    try{
        const responce = await axios.get(`${baseurl}/singup`)
        return responce.data.data;
    }
    catch(error){
        console.log("user inforamtion get error:",error)
    }
}


export const PostCard = async (data)=>{
    try{
        const responce = await axios.post(`${baseurl}/post/card`,data)
        toast.success("Product added to your cart successfully!")
        console.log(responce)
    }
    catch(error){
        console.log(error)
    }
}

export const GetCard = async ()=>{
    try{
        const responce = await axios.get(`${baseurl}/card`)
        return responce.data.data
    }
    catch(error){
        console.log(error)
    }
}



export const GetHeroBanner = async ()=>{
    try{
        const responce = await axios.get(`${baseurl}/web/banner`)
        return responce.data.data
    }
    catch(error){
        console.log(error)
    }
}



export const DeleteCardItem = async (id)=>{
    try{
        const responce = await axios.delete(`${baseurl}/delete/card/${id}`)
        if(responce){
            toast.info('Successfull card item or delete')
        }
    }
    catch(error){
         toast.error('Successfull card item or delete failed')
        console.log(error)
    }

}

export const GetBestSeller = async ()=>{
    try{
        const responce = await axios.get(`${baseurl}/best-seller`)
        return responce.data.data;
    }
    catch(error){
        console.log('best-seller get product failed')
    }
 }


export const GetCategory = async ()=>{
    try{
        const responce = await axios.get(`${baseurl}/web/category`)
        return responce.data.data;
    }
    catch(error){
        console.log('category data get failed')
    }
 }


export const GetallProduct = async ()=>{
    try{
       const responce =  await axios.get(`${baseurl}/product`)
       return responce.data.data

    }
    catch(error){
        console.log("product get failed")
    }

} 


export const GetProductType = async ()=>{
    try{
       const responce =  await axios.get(`${baseurl}/web/product-type`)
       return responce.data.data

    }
    catch(error){
        console.log("product get failed")
    }

}