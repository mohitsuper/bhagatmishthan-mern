import React, { useState, useEffect } from "react";
import {
  DeleteProductType,
  GetProductType,
  PostProductType,
  UpdateProductType,
} from "../../api/api";

// shadcn ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Layers3,
  BadgePlus,
} from "lucide-react";

export default function ProductType() {
  const [text, setText] = useState("");
  const [ProductTypeData, setProductTypeData] = useState([]);
  const [isReloade, setIsReloade] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  // fetch data
  useEffect(() => {
    fetchProductTypeData();
  }, [isReloade]);

  async function fetchProductTypeData() {
    const response = await GetProductType();

    setProductTypeData(response || []);
  }

  // delete
  const ProductTypeDeleteItem = async (id) => {
    const confirmDelete = window.confirm(
      "Are You Sure Delete Product Type?"
    );

    if (!confirmDelete) return;

    await DeleteProductType(id);

    setIsReloade(!isReloade);
  };

  // add/update
  const HandelPostUpdate = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (updateId) {
      await UpdateProductType(updateId, {
        name: text,
      });

      alert("Product Type Updated Successfully");
    } else {
      await PostProductType(text);

      alert("Product Type Added Successfully");
    }

    setText("");
    setUpdateId(null);

    setIsReloade(!isReloade);
  };

  // edit
  const handleUpdate = (item) => {
    setUpdateId(item._id);

    setText(item.name);
  };

  // active inactive
  const handleIsActive = async (id, isActive) => {
    const NewIsActive = !isActive;

    await UpdateProductType(id, {
      isActive: NewIsActive,
    });

    setIsReloade(!isReloade);
  };

  return (
    <div className="min-h-screen md:p-10">
      {/* FORM CARD */}
      <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
        <CardContent className="p-8">
          {/* heading */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-[#9C21FA]/10 flex items-center justify-center">
              <BadgePlus className="text-[#9C21FA]" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-black">
                Product Type
              </h1>

              <p className="text-gray-500">
                Add and manage product types
              </p>
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={HandelPostUpdate}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {/* input */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Product Type Name
              </label>

              <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter product type name"
                className="border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
              />
            </div>

            {/* button */}
            <div className="flex items-end">
              <Button
                type="submit"
                className="w-full bg-[#9C21FA] hover:bg-[#7d18c9] text-white h-11"
              >
                {updateId
                  ? "Update Product Type"
                  : "Add Product Type"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* TABLE CARD */}
      <Card className="mt-10 border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
        <CardContent className="p-6">
          {/* heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black">
              Product Type Data
            </h2>

            <p className="text-gray-500 mt-1">
              Manage all product types
            </p>
          </div>

          {/* table */}
          <div className="overflow-hidden rounded-2xl border border-[#9C21FA]/10">
            <Table>
              {/* table head */}
              <TableHeader className="bg-[#9C21FA]">
                <TableRow>
                  <TableHead className="text-white">
                    #
                  </TableHead>

                  <TableHead className="text-white">
                    Product Type
                  </TableHead>

                  <TableHead className="text-white text-center">
                    Status
                  </TableHead>

                  <TableHead className="text-white text-center">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              {/* table body */}
              <TableBody>
                {ProductTypeData.length > 0 ? (
                  ProductTypeData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-[#faf5ff]"
                    >
                      {/* index */}
                      <TableCell className="font-semibold text-black">
                        {index + 1}
                      </TableCell>

                      {/* name */}
                      <TableCell className="font-medium text-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#9C21FA]/10 flex items-center justify-center">
                            <Layers3
                              size={18}
                              className="text-[#9C21FA]"
                            />
                          </div>

                          {item.name}
                        </div>
                      </TableCell>

                      {/* status */}
                      <TableCell className="text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.isActive
                              ? "bg-green-100 text-green-600"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.isActive
                            ? "Active"
                            : "Inactive"}
                        </span>
                      </TableCell>

                      {/* actions */}
                      <TableCell className="text-center">
                        <div className="flex justify-center gap-3">
                          {/* edit */}
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              handleUpdate(item)
                            }
                            className="border-blue-200 hover:bg-blue-50"
                          >
                            <Pencil
                              size={16}
                              className="text-blue-500"
                            />
                          </Button>

                          {/* active inactive */}
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              handleIsActive(
                                item._id,
                                item.isActive
                              )
                            }
                            className="border-green-200 hover:bg-green-50"
                          >
                            {item.isActive ? (
                              <Eye
                                size={18}
                                className="text-green-500"
                              />
                            ) : (
                              <EyeOff
                                size={18}
                                className="text-yellow-500"
                              />
                            )}
                          </Button>

                          {/* delete */}
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              ProductTypeDeleteItem(
                                item._id
                              )
                            }
                            className="border-red-200 hover:bg-red-50"
                          >
                            <Trash2
                              size={16}
                              className="text-red-500"
                            />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center py-10 text-gray-500"
                    >
                      No Product Type Data Available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}