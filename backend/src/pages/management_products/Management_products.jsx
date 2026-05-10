import React, { useEffect, useState } from "react";

import {
  GetProduct,
} from "../../api/api";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Button,
} from "@/components/ui/button";

import {
  Badge,
} from "@/components/ui/badge";

import {
  Eye,
  Pencil,
  Trash2,
  Package2,
  Layers3,
  CheckCircle2,
  XCircle,
  IndianRupee,
  Boxes,
  Weight,
} from "lucide-react";

export default function Management_products() {

  const [allProduct, setAllProduct] = useState([]);

  const [singleProduct, setSingleProduct] = useState(null);

  const [open, setOpen] = useState(false);

  // fetch products
  useEffect(() => {
    const AllProductData = async () => {
      const response = await GetProduct();

      setAllProduct(response || []);
    };

    AllProductData();
  }, []);

  // stats
  const totalProducts = allProduct.length;

  const totalCategories = new Set(
    allProduct.map((p) => p.category)
  ).size;

  const activeProducts = allProduct.filter(
    (p) => p.isActive
  ).length;

  const inactiveProducts =
    totalProducts - activeProducts;

  // view product
  const handleView = (product) => {
    setSingleProduct(product);

    setOpen(true);
  };

  // edit
  const handleEdit = (product) => {
    console.log(product);
  };

  // delete
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="min-h-screen">

      {/* TOP HEADER */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>

            <p className="text-sm text-[#6c63ff] font-semibold uppercase tracking-wider">
              Admin Dashboard
            </p>

            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">
              Product Management
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all your store products
            </p>

          </div>

          <Button className="bg-[#6c63ff] hover:bg-[#5548ff] h-12 px-6 rounded-2xl text-white">
            Add Product
          </Button>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {/* Total Products */}
        <Card className="rounded-3xl border-0 shadow-sm hover:shadow-lg transition">

          <CardContent className="p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Total Products
                </p>

                <h2 className="text-4xl font-black text-gray-900 mt-2">
                  {totalProducts}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#6c63ff]/10 flex items-center justify-center">

                <Package2
                  className="text-[#6c63ff]"
                  size={30}
                />

              </div>

            </div>

          </CardContent>
        </Card>

        {/* Categories */}
        <Card className="rounded-3xl border-0 shadow-sm hover:shadow-lg transition">

          <CardContent className="p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Categories
                </p>

                <h2 className="text-4xl font-black text-gray-900 mt-2">
                  {totalCategories}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">

                <Layers3
                  className="text-orange-500"
                  size={30}
                />

              </div>

            </div>

          </CardContent>
        </Card>

        {/* Active */}
        <Card className="rounded-3xl border-0 shadow-sm hover:shadow-lg transition">

          <CardContent className="p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Active Products
                </p>

                <h2 className="text-4xl font-black text-gray-900 mt-2">
                  {activeProducts}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                <CheckCircle2
                  className="text-green-500"
                  size={30}
                />

              </div>

            </div>

          </CardContent>
        </Card>

        {/* Inactive */}
        <Card className="rounded-3xl border-0 shadow-sm hover:shadow-lg transition">

          <CardContent className="p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Inactive Products
                </p>

                <h2 className="text-4xl font-black text-gray-900 mt-2">
                  {inactiveProducts}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">

                <XCircle
                  className="text-red-500"
                  size={30}
                />

              </div>

            </div>

          </CardContent>
        </Card>

      </div>

      {/* TABLE */}
      <Card className="rounded-3xl border-0 shadow-sm overflow-hidden">

        <CardContent className="p-0">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-[#6c63ff]">

                <tr>

                  <th className="text-left py-5 px-6 text-white font-semibold">
                    Product
                  </th>

                  <th className="text-left py-5 px-6 text-white font-semibold">
                    Category
                  </th>

                  <th className="text-left py-5 px-6 text-white font-semibold">
                    Product Type
                  </th>

                  <th className="text-center py-5 px-6 text-white font-semibold">
                    Status
                  </th>

                  <th className="text-center py-5 px-6 text-white font-semibold">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {allProduct.length > 0 ? (
                  allProduct.map((p, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-[#f8f7ff] transition"
                    >

                      {/* PRODUCT */}
                      <td className="py-5 px-6">

                        <div className="flex items-center gap-4">

                          <img
                            src={
                              p.subimage?.[0] ||
                              "https://via.placeholder.com/100"
                            }
                            alt={p.title}
                            className="w-16 h-16 rounded-2xl object-cover border"
                          />

                          <div>

                            <h3 className="font-bold text-gray-800">
                              {p.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                              ₹{p.price}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* CATEGORY */}
                      <td className="py-5 px-6">

                        <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-100 rounded-full px-4 py-1">
                          {p.category}
                        </Badge>

                      </td>

                      {/* TYPE */}
                      <td className="py-5 px-6">

                        <div className="flex flex-wrap gap-2">

                          {p.productType?.map((item, i) => (
                            <Badge
                              key={i}
                              className="bg-[#6c63ff]/10 text-[#6c63ff] hover:bg-[#6c63ff]/10 rounded-full"
                            >
                              {item}
                            </Badge>
                          ))}

                        </div>

                      </td>

                      {/* STATUS */}
                      <td className="py-5 px-6 text-center">

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            p.isActive
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {p.isActive
                            ? "Active"
                            : "Inactive"}
                        </span>

                      </td>

                      {/* ACTIONS */}
                      <td className="py-5 px-6">

                        <div className="flex justify-center gap-3">

                          {/* VIEW */}
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-xl border-[#6c63ff]/20 hover:bg-[#6c63ff]/10"
                            onClick={() => handleView(p)}
                          >
                            <Eye
                              size={18}
                              className="text-[#6c63ff]"
                            />
                          </Button>

                          {/* EDIT */}
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-xl border-blue-200 hover:bg-blue-50"
                            onClick={() => handleEdit(p)}
                          >
                            <Pencil
                              size={18}
                              className="text-blue-500"
                            />
                          </Button>

                          {/* DELETE */}
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-xl border-red-200 hover:bg-red-50"
                            onClick={() =>
                              handleDelete(p._id)
                            }
                          >
                            <Trash2
                              size={18}
                              className="text-red-500"
                            />
                          </Button>

                        </div>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>

                    <td
                      colSpan={5}
                      className="py-16 text-center text-gray-500"
                    >
                      No Products Found
                    </td>

                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </CardContent>
      </Card>

      {/* PRODUCT VIEW MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>

        <DialogContent className="max-w-4xl rounded-3xl border-0 p-0 overflow-hidden">

          {singleProduct && (
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* LEFT IMAGES */}
              <div className="bg-[#f8f7ff] p-6">

                <img
                  src={
                    singleProduct.subimage?.[0] ||
                    "https://via.placeholder.com/400"
                  }
                  alt={singleProduct.title}
                  className="w-full h-[350px] rounded-3xl object-cover border"
                />

                <div className="grid grid-cols-4 gap-3 mt-4">

                  {singleProduct.subimage?.map(
                    (img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        className="h-20 w-full object-cover rounded-2xl border"
                      />
                    )
                  )}

                </div>

              </div>

              {/* RIGHT CONTENT */}
              <div className="p-8">

                <DialogHeader>

                  <DialogTitle className="text-3xl font-black text-gray-900">
                    {singleProduct.title}
                  </DialogTitle>

                </DialogHeader>

                <div className="mt-6 space-y-6">

                  {/* PRICE */}
                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-2xl bg-[#6c63ff]/10 flex items-center justify-center">

                      <IndianRupee
                        className="text-[#6c63ff]"
                        size={20}
                      />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Price
                      </p>

                      <h3 className="text-2xl font-bold text-gray-900">
                        ₹{singleProduct.price}
                      </h3>

                    </div>

                  </div>

                  {/* STOCK */}
                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">

                      <Boxes
                        className="text-orange-500"
                        size={20}
                      />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Stock
                      </p>

                      <h3 className="text-xl font-bold text-gray-900">
                        {singleProduct.stock}
                      </h3>

                    </div>

                  </div>

                  {/* WEIGHT */}
                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">

                      <Weight
                        className="text-pink-500"
                        size={20}
                      />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Weight
                      </p>

                      <h3 className="text-xl font-bold text-gray-900">
                        {singleProduct.weight} gm
                      </h3>

                    </div>

                  </div>

                  {/* DESCRIPTION */}
                  <div>

                    <h3 className="font-bold text-gray-800 mb-2">
                      Description
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {singleProduct.description}
                    </p>

                  </div>

                  {/* INGREDIENTS */}
                  <div>

                    <h3 className="font-bold text-gray-800 mb-2">
                      Ingredients
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {singleProduct.ingredients}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          )}

        </DialogContent>

      </Dialog>

    </div>
  );
}