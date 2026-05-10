import React, { useState, useEffect } from "react";
import {
  GetCategory,
  GetProductType,
 PostProduct,
} from "../../api/api";

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

  const handleImage = (e, i) => {
    const value = e.target.files[0];

    setProductData((prev) => ({
      ...prev,
      [`image${i + 1}`]: value,
    }));
  };

  const AllProductTypeData = async () => {
    const response = await GetProductType();
    setAllProductType(response || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fromDataProduct = new FormData();

    fromDataProduct.append("title", ProductData.name);
    fromDataProduct.append("description", ProductData.description);
    fromDataProduct.append("price", ProductData.price);
    fromDataProduct.append("stock", ProductData.stock);
    fromDataProduct.append("weight", ProductData.weight);
    fromDataProduct.append("category", ProductData.category);
    fromDataProduct.append("ingredients", ProductData.ingredients);

    ProductData.productType.forEach((item) =>
      fromDataProduct.append("productType", item)
    );

    const { image1, image2, image3, image4 } = ProductData;

    if (image1) fromDataProduct.append("subimage", image1);
    if (image2) fromDataProduct.append("subimage", image2);
    if (image3) fromDataProduct.append("subimage", image3);
    if (image4) fromDataProduct.append("subimage", image4);

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

  useEffect(() => {
    const Allcategorydata = async () => {
      const response = await GetCategory();
      setAllCategory(response || []);
    };

    Allcategorydata();
    AllProductTypeData();
  }, []);

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
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADER */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-[#6c63ff] font-semibold uppercase tracking-wider">
                Admin Dashboard
              </p>

              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">
                Add New Product
              </h1>
            </div>

            <button
              type="submit"
              form="productForm"
              className="bg-[#6c63ff] hover:bg-[#5a52ea] transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
            >
              Publish Product
            </button>
          </div>
        </div>

        {/* MAIN SECTION */}
        <form id="productForm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* LEFT SECTION */}
            <div className="xl:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="space-y-7">
                {/* Product Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    Product Name
                  </label>

                  <div className="relative">
                    <Package2
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c63ff]"
                      size={20}
                    />

                    <input
                      type="text"
                      name="name"
                      value={ProductData.name}
                      onChange={handleChange}
                      placeholder="Enter Product Name"
                      className="w-full h-14 border border-gray-200 rounded-2xl pl-12 pr-4 outline-none focus:border-[#6c63ff] focus:ring-4 focus:ring-[#6c63ff]/10 transition"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    Description
                  </label>

                  <div className="relative">
                    <FileText
                      className="absolute left-4 top-5 text-[#6c63ff]"
                      size={20}
                    />

                    <textarea
                      rows="5"
                      name="description"
                      value={ProductData.description}
                      onChange={handleChange}
                      placeholder="Write product description..."
                      className="w-full border border-gray-200 rounded-2xl pl-12 p-4 outline-none focus:border-[#6c63ff] focus:ring-4 focus:ring-[#6c63ff]/10 transition resize-none"
                    />
                  </div>
                </div>

                {/* PRICE STOCK WEIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Price */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      Price
                    </label>

                    <div className="relative">
                      <IndianRupee
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c63ff]"
                        size={18}
                      />

                      <input
                        type="number"
                        name="price"
                        value={ProductData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="w-full h-14 border border-gray-200 rounded-2xl pl-11 pr-4 outline-none focus:border-[#6c63ff] focus:ring-4 focus:ring-[#6c63ff]/10 transition"
                      />
                    </div>
                  </div>

                  {/* Stock */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      Stock
                    </label>

                    <div className="relative">
                      <Boxes
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c63ff]"
                        size={18}
                      />

                      <input
                        type="number"
                        name="stock"
                        value={ProductData.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                        className="w-full h-14 border border-gray-200 rounded-2xl pl-11 pr-4 outline-none focus:border-[#6c63ff] focus:ring-4 focus:ring-[#6c63ff]/10 transition"
                      />
                    </div>
                  </div>

                  {/* Weight */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      Weight
                    </label>

                    <div className="relative">
                      <Weight
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6c63ff]"
                        size={18}
                      />

                      <input
                        type="number"
                        name="weight"
                        value={ProductData.weight}
                        onChange={handleChange}
                        placeholder="Weight"
                        className="w-full h-14 border border-gray-200 rounded-2xl pl-11 pr-4 outline-none focus:border-[#6c63ff] focus:ring-4 focus:ring-[#6c63ff]/10 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* INGREDIENTS */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    Ingredients
                  </label>

                  <div className="relative">
                    <Tag
                      className="absolute left-4 top-5 text-[#6c63ff]"
                      size={18}
                    />

                    <textarea
                      rows="3"
                      name="ingredients"
                      value={ProductData.ingredients}
                      onChange={handleChange}
                      placeholder="Ingredients..."
                      className="w-full border border-gray-200 rounded-2xl pl-12 p-4 outline-none focus:border-[#6c63ff] focus:ring-4 focus:ring-[#6c63ff]/10 transition resize-none"
                    />
                  </div>
                </div>

                {/* FEATURES */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-4 block">
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
                        className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4 cursor-pointer hover:border-[#6c63ff] transition"
                      >
                        <input
                          type="checkbox"
                          className="accent-[#6c63ff] w-5 h-5"
                        />

                        <span className="font-medium text-gray-700">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="space-y-6">
              {/* IMAGE CARD */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#6c63ff]/10 flex items-center justify-center">
                    <ImagePlus
                      className="text-[#6c63ff]"
                      size={22}
                    />
                  </div>

                  <div>
                    <h2 className="font-bold text-gray-800">
                      Product Images
                    </h2>

                    <p className="text-sm text-gray-500">
                      Upload 4 product images
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 4 }, (_, i) => {
                    const currentImage =
                      ProductData[`image${i + 1}`];

                    return (
                      <label
                        key={i}
                        className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:border-[#6c63ff] transition relative bg-[#fafafa]"
                      >
                        <input
                          type="file"
                          hidden
                          onChange={(e) => handleImage(e, i)}
                        />

                        {currentImage ? (
                          <img
                            src={URL.createObjectURL(currentImage)}
                            alt="preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center">
                            <Upload
                              className="text-[#6c63ff]"
                              size={28}
                            />

                            <p className="text-sm mt-2 font-medium text-gray-600">
                              Upload
                            </p>
                          </div>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* CATEGORY */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-800 mb-5">
                  Category
                </h2>

                <select
                  onChange={handleChange}
                  value={ProductData.category}
                  name="category"
                  className="w-full h-14 border border-gray-200 rounded-2xl px-4 outline-none focus:border-[#6c63ff] focus:ring-4 focus:ring-[#6c63ff]/10 transition"
                >
                  <option value="">Choose Category</option>

                  {Allcategory.map((item, index) => (
                    <option value={item.name} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* PRODUCT TYPE */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-800 mb-5">
                  Product Type
                </h2>

                <div className="space-y-4">
                  {[
                    "Best Seller",
                    "Gifting's product",
                  ].map((item, index) => (
                    <label
                      key={index}
                      className={`flex items-center justify-between border rounded-2xl px-5 py-4 cursor-pointer transition ${
                        ProductData.productType.includes(item)
                          ? "border-[#6c63ff] bg-[#6c63ff]/5"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          value={item}
                          name="productType"
                          checked={ProductData.productType.includes(
                            item
                          )}
                          onChange={handleChange}
                          className="accent-[#6c63ff] w-5 h-5"
                        />

                        <span className="font-medium text-gray-700">
                          {item}
                        </span>
                      </div>

                      {ProductData.productType.includes(item) && (
                        <Check
                          className="text-[#6c63ff]"
                          size={18}
                        />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}