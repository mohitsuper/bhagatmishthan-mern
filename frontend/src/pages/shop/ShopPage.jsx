import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductdeatilsBanner from "../../Components/product-deatils/ProductdeatilsBanner";
import ShopFilter from "../../Components/Shop/ShopFilter";
import { AllProductData } from "../../data/product/AllProductData";
import ShopAllProduct from "../../Components/Shop/ShopAllProduct";
import { GetallProduct } from "../../Api/Api";
export default function ShopPage() {
  const [singleData, setSingleData] = useState([]);
  const [allcategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const localtion = useLocation();
  const slug = localtion.pathname.split("/")[2];

  useEffect(() => {
    fetchCategoryData();
  }, [slug]);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const response = await GetallProduct();
      
      if (response && response.length > 0) {
        // If API data is available, filter by category
        const singleCategoryData = response.filter((item) => 
          item.category && item.category.toLowerCase() === slug.toLowerCase()
        );
        setSingleData(singleCategoryData);
        setAllCategory(response);
      } else {
        // Fallback to static data if API fails
        const staticData = AllProductData.find((item) => item?.slug === slug);
        setSingleData(staticData?.data || []);
        setAllCategory(AllProductData);
      }
    } catch (error) {
      console.error("Error fetching category data:", error);
      // Fallback to static data on error
      const staticData = AllProductData.find((item) => item?.slug === slug);
      setSingleData(staticData?.data || []);
      setAllCategory(AllProductData);
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading products...</div>
      </div>
    );
  }
  console.log(slug)
  return (
    <div className="">
      <ProductdeatilsBanner SingleProductInfo={slug}/>
      <ShopFilter/>
      <ShopAllProduct slug={slug} singleData={singleData}/>
    </div>
  );
}
