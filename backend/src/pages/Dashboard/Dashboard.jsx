import React from "react";

// shadcn ui
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

// icons
import {
  Search,
  PlusCircle,
  Users,
  ShoppingCart,
  Wallet,
  Package2,
  ShoppingBag,
  Smartphone,
  User,
  ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen md:p-10">
      {/* TOP HEADER */}
      <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            {/* LEFT */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[#9C21FA]/10 flex items-center justify-center">
                <Package2
                  className="text-[#9C21FA]"
                  size={30}
                />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-black">
                  Dashboard
                </h1>

                <p className="text-gray-500 mt-1">
                  Welcome back, Mohit 👋
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
              {/* SEARCH */}
              <div className="relative w-full sm:w-[320px]">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C21FA]"
                  size={18}
                />

                <Input
                  placeholder="Search here..."
                  className="pl-11 h-12 rounded-2xl border-[#9C21FA]/30 focus-visible:ring-[#9C21FA]"
                />
              </div>

              {/* BUTTON */}
              <Button className="bg-[#9C21FA] hover:bg-[#7d18c9] text-white h-12 rounded-2xl px-6 w-full sm:w-auto">
                <PlusCircle size={18} className="mr-2" />
                Add Product
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* USERS */}
        <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">
                  Total Users
                </p>

                <h2 className="text-4xl font-bold text-black mt-2">
                  1,245
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#9C21FA]/10 flex items-center justify-center">
                <Users
                  className="text-[#9C21FA]"
                  size={28}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 text-green-600 text-sm font-medium">
              <ArrowUpRight size={16} />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        {/* ORDERS */}
        <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">
                  Total Orders
                </p>

                <h2 className="text-4xl font-bold text-black mt-2">
                  320
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <ShoppingCart
                  className="text-orange-500"
                  size={28}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 text-green-600 text-sm font-medium">
              <ArrowUpRight size={16} />
              +8% from last week
            </div>
          </CardContent>
        </Card>

        {/* REVENUE */}
        <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">
                  Revenue
                </p>

                <h2 className="text-4xl font-bold text-black mt-2">
                  ₹12,540
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                <Wallet
                  className="text-green-600"
                  size={28}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 text-green-600 text-sm font-medium">
              <ArrowUpRight size={16} />
              +18% from last month
            </div>
          </CardContent>
        </Card>

        {/* PRODUCTS */}
        <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">
                  Products
                </p>

                <h2 className="text-4xl font-bold text-black mt-2">
                  89
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">
                <Package2
                  className="text-pink-500"
                  size={28}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 text-green-600 text-sm font-medium">
              <ArrowUpRight size={16} />
              +4 new products
            </div>
          </CardContent>
        </Card>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
        {/* RECENT ORDERS */}
        <Card className="xl:col-span-2 border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold text-black">
              Recent Orders
            </CardTitle>

            <Button
              variant="ghost"
              className="text-[#9C21FA] hover:text-[#7d18c9]"
            >
              View All
            </Button>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* ORDER 1 */}
            <div className="flex items-center justify-between rounded-2xl border border-[#9C21FA]/10 p-5 hover:bg-[#faf5ff] transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#9C21FA]/10 flex items-center justify-center">
                  <ShoppingBag
                    className="text-[#9C21FA]"
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-black">
                    Nike Shoes
                  </h3>

                  <p className="text-sm text-gray-500">
                    Order #2541
                  </p>
                </div>
              </div>

              <span className="font-bold text-green-600">
                ₹2,500
              </span>
            </div>

            {/* ORDER 2 */}
            <div className="flex items-center justify-between rounded-2xl border border-[#9C21FA]/10 p-5 hover:bg-[#faf5ff] transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Smartphone
                    className="text-orange-500"
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-black">
                    iPhone 15
                  </h3>

                  <p className="text-sm text-gray-500">
                    Order #8741
                  </p>
                </div>
              </div>

              <span className="font-bold text-green-600">
                ₹89,999
              </span>
            </div>
          </CardContent>
        </Card>

        {/* PROFILE CARD */}
        <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-[#9C21FA] to-[#7d18c9] text-white">
          <CardContent className="p-8 flex flex-col items-center text-center">
            {/* IMAGE */}
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <User size={40} />
            </div>

            {/* NAME */}
            <h2 className="text-2xl font-bold mt-5">
              Mohit Vijay
            </h2>

            <p className="text-white/80 mt-2">
              Super Admin
            </p>

            {/* BUTTON */}
            <Button className="mt-6 bg-white text-[#9C21FA] hover:bg-gray-100 rounded-2xl h-11 px-6">
              Edit Profile
            </Button>

            {/* EXTRA */}
            <div className="grid grid-cols-2 gap-4 w-full mt-8">
              <div className="bg-white/10 rounded-2xl p-4">
                <h3 className="text-2xl font-bold">
                  245
                </h3>

                <p className="text-sm text-white/70 mt-1">
                  Products
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-4">
                <h3 className="text-2xl font-bold">
                  1.2K
                </h3>

                <p className="text-sm text-white/70 mt-1">
                  Customers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}