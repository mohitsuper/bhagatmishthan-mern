import React, { useState, useEffect } from "react";
import {
  GetCategory,
  GetProductType,
  PostProduct,
} from "../../api/api";

// shadcn ui
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Upload,
  Package2,
  IndianRupee,
  Boxes,
  Weight,
  FileText,
  Tag,
  ImagePlus,
  Check,
  PlusCircle,
} from "lucide-react";

export default function Best_Seller_product() {
  const [Allcategory, setAllCategory] = useState([]);
  const [AllProductType, setAllProductType] = useState([]);

  const [ProductData, setProductData] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    name: "",
    description: "",
    price: "",
    stock: "",
    weight: "",
    ingredients: "",
    category: "",
    productType: [],
  });

  // image handle
  const handleImage = (e, i) => {
    const value = e.target.files[0];

    setProductData((prev) => ({
      ...prev,
      [`image${i + 1}`]: value,
    }));
  };

  // get product type
  const AllProductTypeData = async () => {
    const response = await GetProductType();

    setAllProductType(response || []);
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fromDataProduct = new FormData();

    fromDataProduct.append("title", ProductData.name);
    fromDataProduct.append(
      "description",
      ProductData.description
    );
    fromDataProduct.append("price", ProductData.price);
    fromDataProduct.append("stock", ProductData.stock);
    fromDataProduct.append("weight", ProductData.weight);
    fromDataProduct.append(
      "category",
      ProductData.category
    );
    fromDataProduct.append(
      "ingredients",
      ProductData.ingredients
    );

    ProductData.productType.forEach((item) =>
      fromDataProduct.append("productType", item)
    );

    const { image1, image2, image3, image4 } =
      ProductData;

    if (image1)
      fromDataProduct.append("subimage", image1);

    if (image2)
      fromDataProduct.append("subimage", image2);

    if (image3)
      fromDataProduct.append("subimage", image3);

    if (image4)
      fromDataProduct.append("subimage", image4);

    await PostProduct(fromDataProduct);

    alert("Product Added Successfully");

    setProductData({
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      name: "",
      description: "",
      price: "",
      stock: "",
      weight: "",
      ingredients: "",
      category: "",
      productType: [],
    });
  };

  // category + product type
  useEffect(() => {
    const Allcategorydata = async () => {
      const response = await GetCategory();

      setAllCategory(response || []);
    };

    Allcategorydata();

    AllProductTypeData();
  }, []);

  // handle change
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "productType") {
      if (checked) {
        setProductData((prev) => ({
          ...prev,
          productType: [...prev.productType, value],
        }));
      } else {
        setProductData((prev) => ({
          ...prev,
          productType: prev.productType.filter(
            (type) => type !== value
          ),
        }));
      }
    } else {
      setProductData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="min-h-screen md:p-10">
      {/* TOP CARD */}
      <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#9C21FA]/10 flex items-center justify-center">
                <PlusCircle
                  className="text-[#9C21FA]"
                  size={30}
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-black">
                  Add New Product
                </h1>

                <p className="text-gray-500 mt-1">
                  Create and manage store products
                </p>
              </div>
            </div>

            <Button
              type="submit"
              form="productForm"
              className="bg-[#9C21FA] hover:bg-[#7d18c9] text-white h-12 px-8 rounded-2xl"
            >
              Publish Product
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* MAIN FORM */}
      <form id="productForm" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="xl:col-span-2">
            <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
              <CardContent className="p-8 space-y-7">
                {/* PRODUCT NAME */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Product Name
                  </label>

                  <div className="relative">
                    <Package2
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C21FA]"
                      size={20}
                    />

                    <Input
                      type="text"
                      name="name"
                      value={ProductData.name}
                      onChange={handleChange}
                      placeholder="Enter product name"
                      className="h-12 pl-12 border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Description
                  </label>

                  <div className="relative">
                    <FileText
                      className="absolute left-4 top-5 text-[#9C21FA]"
                      size={20}
                    />

                    <textarea
                      rows="5"
                      name="description"
                      value={ProductData.description}
                      onChange={handleChange}
                      placeholder="Write product description..."
                      className="w-full border border-[#9C21FA]/30 rounded-2xl p-4 pl-12 outline-none focus:ring-2 focus:ring-[#9C21FA] resize-none"
                    />
                  </div>
                </div>

                {/* PRICE STOCK WEIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* PRICE */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Price
                    </label>

                    <div className="relative">
                      <IndianRupee
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C21FA]"
                        size={18}
                      />

                      <Input
                        type="number"
                        name="price"
                        value={ProductData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="h-12 pl-11 border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
                      />
                    </div>
                  </div>

                  {/* STOCK */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Stock
                    </label>

                    <div className="relative">
                      <Boxes
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C21FA]"
                        size={18}
                      />

                      <Input
                        type="number"
                        name="stock"
                        value={ProductData.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                        className="h-12 pl-11 border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
                      />
                    </div>
                  </div>

                  {/* WEIGHT */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Weight
                    </label>

                    <div className="relative">
                      <Weight
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C21FA]"
                        size={18}
                      />

                      <Input
                        type="number"
                        name="weight"
                        value={ProductData.weight}
                        onChange={handleChange}
                        placeholder="Weight"
                        className="h-12 pl-11 border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
                      />
                    </div>
                  </div>
                </div>

                {/* INGREDIENTS */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Ingredients
                  </label>

                  <div className="relative">
                    <Tag
                      className="absolute left-4 top-5 text-[#9C21FA]"
                      size={18}
                    />

                    <textarea
                      rows="3"
                      name="ingredients"
                      value={ProductData.ingredients}
                      onChange={handleChange}
                      placeholder="Ingredients..."
                      className="w-full border border-[#9C21FA]/30 rounded-2xl p-4 pl-12 outline-none focus:ring-2 focus:ring-[#9C21FA] resize-none"
                    />
                  </div>
                </div>

                {/* FEATURES */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-4 block">
                    Product Features
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Free Shipping",
                      "Shipping in 3-5 Days",
                      "15 Days Shelf Life",
                      "No Preservatives",
                    ].map((item, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 border border-[#9C21FA]/20 rounded-2xl p-4 hover:bg-[#faf5ff] transition"
                      >
                        <input
                          type="checkbox"
                          className="w-5 h-5 accent-[#9C21FA]"
                        />

                        <span className="font-medium text-gray-700">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* IMAGE CARD */}
            <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
              <CardContent className="p-6">
                {/* heading */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#9C21FA]/10 flex items-center justify-center">
                    <ImagePlus
                      className="text-[#9C21FA]"
                      size={22}
                    />
                  </div>

                  <div>
                    <h2 className="font-bold text-black">
                      Product Images
                    </h2>

                    <p className="text-sm text-gray-500">
                      Upload up to 4 images
                    </p>
                  </div>
                </div>

                {/* image grid */}
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 4 }, (_, i) => {
                    const currentImage =
                      ProductData[`image${i + 1}`];

                    return (
                      <label
                        key={i}
                        className="aspect-square border-2 border-dashed border-[#9C21FA]/20 rounded-2xl overflow-hidden cursor-pointer hover:bg-[#faf5ff] transition relative"
                      >
                        <input
                          type="file"
                          hidden
                          onChange={(e) =>
                            handleImage(e, i)
                          }
                        />

                        {currentImage ? (
                          <img
                            src={URL.createObjectURL(
                              currentImage
                            )}
                            alt="preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center">
                            <Upload
                              className="text-[#9C21FA]"
                              size={28}
                            />

                            <p className="text-sm mt-2 text-gray-600 font-medium">
                              Upload
                            </p>
                          </div>
                        )}
                      </label>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* CATEGORY */}
            <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
              <CardContent className="p-6">
                <h2 className="font-bold text-black mb-4">
                  Category
                </h2>

                <select
                  onChange={handleChange}
                  value={ProductData.category}
                  name="category"
                  className="w-full h-12 border border-[#9C21FA]/30 rounded-2xl px-4 outline-none focus:ring-2 focus:ring-[#9C21FA]"
                >
                  <option value="">
                    Choose Category
                  </option>

                  {Allcategory.map((item, index) => (
                    <option value={item.name} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </CardContent>
            </Card>

            {/* PRODUCT TYPE */}
            <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
              <CardContent className="p-6">
                <h2 className="font-bold text-black mb-5">
                  Product Type
                </h2>

                <div className="space-y-4">
                  {AllProductType.map((item, index) => (
                    <label
                      key={index}
                      className={`flex items-center justify-between border rounded-2xl p-4 cursor-pointer transition ${
                        ProductData.productType.includes(
                          item.name
                        )
                          ? "border-[#9C21FA] bg-[#faf5ff]"
                          : "border-[#9C21FA]/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          value={item.name}
                          name="productType"
                          checked={ProductData.productType.includes(
                            item.name
                          )}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#9C21FA]"
                        />

                        <span className="font-medium text-gray-700">
                          {item.name}
                        </span>
                      </div>

                      {ProductData.productType.includes(
                        item.name
                      ) && (
                        <Check
                          className="text-[#9C21FA]"
                          size={18}
                        />
                      )}
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}