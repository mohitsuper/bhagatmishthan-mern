import React, { useState, useEffect, useRef } from "react";
import {
  DeleteCategory,
  GetCategory,
  PostCategory,
  UpdateCategory,
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
  ImagePlus,
  FolderPlus,
} from "lucide-react";

export default function Category() {
  const [text, setText] = useState("");
  const [CategoryData, setCategoryData] = useState([]);
  const [prev, setPrev] = useState(null);
  const [image, setImage] = useState(null);
  const [isReloade, setIsReloade] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const ImageRef = useRef(null);

  // post/update category
  const CategoryPostData = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", text);

    if (updateId) {
      await UpdateCategory(updateId, formData);

      alert("Category updated successfully");
    } else {
      await PostCategory(formData);

      alert("Category added successfully");
    }

    setText("");
    setImage(null);
    setPrev(null);
    setUpdateId(null);

    if (ImageRef.current) {
      ImageRef.current.value = "";
    }

    setIsReloade(!isReloade);
  };

  // get categories
  const fetchcategoryData = async () => {
    const response = await GetCategory();

    setCategoryData(response || []);
  };

  // image preview
  const handleImage = (e) => {
    const value = e.target.files[0];

    setImage(value);

    if (value) {
      const prevUrl = URL.createObjectURL(value);

      setPrev(prevUrl);
    }
  };

  // delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are You Sure Delete Record?"
    );

    if (!confirmDelete) return;

    await DeleteCategory(id);

    setIsReloade(!isReloade);
  };

  // edit
  const handleEdit = async (id) => {
    const singleData = CategoryData.find(
      (item) => item._id === id
    );

    setText(singleData.name);
    setPrev(singleData.image);
    setUpdateId(id);
  };

  // active inactive
  const handleIsActive = async (id, isActive) => {
    const newIsAcive = !isActive;

    const UpdateIsActive = new FormData();

    UpdateIsActive.append("isActive", newIsAcive);

    await UpdateCategory(id, UpdateIsActive);

    setIsReloade(!isReloade);
  };

  useEffect(() => {
    fetchcategoryData();
  }, [isReloade]);

  return (
    <div className="min-h-screen bg-[#faf7ff] p-6 md:p-10">

      {/* form card */}
      <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
        <CardContent className="p-8">

          {/* heading */}
          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-full bg-[#9C21FA]/10 flex items-center justify-center">
              <FolderPlus className="text-[#9C21FA]" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-black">
                Product Category
              </h1>

              <p className="text-gray-500">
                Add and manage product categories
              </p>
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={CategoryPostData}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >

            {/* image */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Category Image
              </label>

              <Input
                type="file"
                ref={ImageRef}
                onChange={handleImage}
                className="border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
              />
            </div>

            {/* text */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Category Name
              </label>

              <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter category name"
                className="border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
              />
            </div>

            {/* button */}
            <div className="flex items-end">
              <Button
                type="submit"
                className="w-full bg-[#9C21FA] hover:bg-[#7d18c9] text-white h-11"
              >
                {updateId ? "Update Category" : "Add Category"}
              </Button>
            </div>
          </form>

          {/* preview */}
          {prev && (
            <div className="mt-8">

              <p className="text-sm font-medium text-gray-700 mb-3">
                Preview
              </p>

              <div className="w-56 rounded-2xl overflow-hidden border border-[#9C21FA]/20 shadow">

                <img
                  src={prev}
                  alt="preview"
                  className="w-full h-36 object-cover"
                />

              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* table card */}
      <Card className="mt-10 border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
        <CardContent className="p-6">

          {/* heading */}
          <div className="mb-6">

            <h2 className="text-2xl font-bold text-black">
              Product Category Data
            </h2>

            <p className="text-gray-500 mt-1">
              Manage all product categories
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
                    Category
                  </TableHead>

                  <TableHead className="text-white">
                    Image
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

                {CategoryData.length > 0 ? (
                  CategoryData.map((item, index) => (
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
                        {item.name}
                      </TableCell>

                      {/* image */}
                      <TableCell>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-32 rounded-xl border border-[#9C21FA]/20 object-cover shadow-sm"
                        />
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
                              handleEdit(item._id)
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
                              handleDelete(item._id)
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
                      colSpan={5}
                      className="text-center py-10 text-gray-500"
                    >
                      No category data available
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