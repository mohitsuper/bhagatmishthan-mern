import React, { Children, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import {
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

export default function DataTable({
  columns = [],
  data = [],
  searchKey = "",
  loading = false,
  itemsPerPage = 5,
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // search filter
  const filteredData = data.filter((Children,item) =>
    item?.[searchKey]
      ?.toLowerCase()
      ?.includes(search.toLowerCase())
  );

  // pagination
  const totalPages = Math.ceil(
    filteredData.length / itemsPerPage
  );

  const startIndex = (page - 1) * itemsPerPage;

  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex justify-end w-full">
        <div className="relative w-full md:w-60 border-[#9C21FA]/30 focus-visible:ring-[#9C21FA] flex border items-center px-2 rounded-full">
        <Search
            className=" text-gray-400"
            size={18}
        />

        <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
            }}
            className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
        />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden">
        <Table>

          <TableHeader className="bg-[#9C21FA]">

            <TableRow>
              {columns.map((col, index) => (
                <TableHead
                  key={index}
                  className="text-white"
                >
                  {col.header}
                </TableHead>
              ))}
            </TableRow>

          </TableHeader>

          <TableBody>

            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-10"
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : data.length > 0 ? (
              data.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="hover:bg-[#faf5ff]"
                >
                  {columns.map((col, colIndex) => 
                  (
                    <>
                    <TableCell key={colIndex}>
                       { row[col.field]}
                    </TableCell>
                    {
                        row.slot && 
                        (
                            <TableCell>
                                {Children}
                            </TableCell>
                        )
                    }
                    </>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-10 text-gray-500"
                >
                  No data found
                </TableCell>
              </TableRow>
            )}

          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">

        <p className="text-sm text-gray-500">
          Page {page} of {totalPages || 1}
        </p>

        <div className="flex gap-2">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="w-10 h-10 rounded-lg border flex items-center justify-center disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage(page + 1)}
            className="w-10 h-10 rounded-lg border flex items-center justify-center disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      </div>
    </div>
  );
}