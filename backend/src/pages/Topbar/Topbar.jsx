import React, { useState, useEffect } from "react";
import {
  TopbarDelete,
  TopbarGet,
  TopbarIsActive,
  TopbarPost,
  TopbarUpdate,
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

import { Pencil, Trash2, Eye, EyeOff, Send } from "lucide-react";
import DataTable from "@/commen/DataTable";
import { TopbarDataColumns } from "@/columns/DataColumns";

export default function Topbar() {
  const [text, setText] = useState("");
  const [topbarData, setTopbarData] = useState([]);
  const [isReloade, setIsReloade] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetchTopbarData();
  }, [isReloade]);

  // get topbar data
  async function fetchTopbarData() {
    const response = await TopbarGet();
    setTopbarData(response || []);
  }

  // delete
  const TopbarDeleteItem = async (id) => {
    await TopbarDelete(id);
    setIsReloade(!isReloade);
  };

  // create/update
  const HandelPostUpdate = async (e) => {
    e.preventDefault();

    if (!updateId) {
      await TopbarPost({ title: text });
      setText("");
    } else {
      await TopbarUpdate(updateId, text);
      setUpdateId(null);
      setText("");
    }

    setIsReloade(!isReloade);
  };

  // edit
  const handleUpdate = (item) => {
    setUpdateId(item._id);
    setText(item.title);
  };

  // active/inactive
  const handleIsActive = async (id, isActive) => {
    const NewIsActive = !isActive;

    await TopbarIsActive(id, NewIsActive);

    setIsReloade(!isReloade);
  };

  return (
    <div className="min-h-screen md:p-10">

      {/* Form Card */}
      <Card className="border border-[#9C21FA]/20 shadow-xl rounded-3xl">
        <CardContent className="p-8">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#9C21FA]/10 flex items-center justify-center">
              <Send className="text-[#9C21FA]" size={22} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-black">
                Set Topbar Text
              </h1>

              <p className="text-gray-500 mt-1">
                Add marquee text for website topbar
              </p>
            </div>
          </div>

          <form
            onSubmit={HandelPostUpdate}
            className="flex flex-col md:flex-row gap-4"
          >
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter marquee text..."
              className="h-12 border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
            />

            <Button
              type="submit"
              className="h-12 px-8 bg-[#9C21FA] hover:bg-[#7d18c9] text-white"
            >
              {updateId ? "Update" : "Submit"}
            </Button>
          </form>

        </CardContent>
      </Card>

      {/* Table Card */}
      <Card className="mt-10 border border-[#9C21FA]/20 shadow-xl rounded-3xl bg-white">
        <CardContent className="p-6">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black">
              Topbar Data
            </h2>

            <p className="text-gray-500 mt-1">
              Manage all topbar marquee texts
            </p>
          </div>

             {/* <DataTable columns={TopbarDataColumns} data={topbarData}>
                <Button>aa</Button>
             </DataTable> */}
          <div className="overflow-hidden rounded-2xl border border-[#9C21FA]/10">
             <Table>
              <TableHeader className="bg-[#9C21FA]">

                <TableRow>
                  <TableHead className="text-white">#</TableHead>
                  <TableHead className="text-white">Title</TableHead>
                  <TableHead className="text-white text-center">
                    Status
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Actions
                  </TableHead>
                </TableRow>

              </TableHeader>

              <TableBody>

                {topbarData.length > 0 ? (
                  topbarData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-[#faf5ff] transition"
                    >
                      <TableCell className="font-semibold text-black">
                        {index + 1}
                      </TableCell>

                      <TableCell className="font-medium text-gray-700">
                        {item.title}
                      </TableCell>

                      <TableCell className="text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.isActive
                              ? "bg-green-100 text-green-600"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.isActive ? "Active" : "Inactive"}
                        </span>
                      </TableCell>

                      <TableCell className="text-center">
                        <div className="flex justify-center gap-3">

                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => handleUpdate(item)}
                            className="border-blue-200 hover:bg-blue-50"
                          >
                            <Pencil
                              size={16}
                              className="text-blue-500"
                            />
                          </Button>

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

                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              TopbarDeleteItem(item._id)
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
                      No topbar data available
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