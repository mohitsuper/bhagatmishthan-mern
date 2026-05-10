import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        {/* Left */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back, Mohit 👋
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 flex-col sm:flex-row">

          {/* Search */}
          <div className="relative w-full sm:w-[320px]">

            <Input
              placeholder="Search here..."
              className="pl-11 h-12 rounded-2xl border-gray-200 bg-white shadow-sm"
            />

            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

          </div>

          {/* Add Product */}
          <Button className="h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-6 text-white">
            <i className="fa-solid fa-plus mr-2"></i>
            Add Product
          </Button>

        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Users */}
        <Card className="rounded-3xl border-0 shadow-md hover:shadow-xl duration-300">

          <CardContent className="p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Total Users
                </p>

                <h2 className="text-3xl font-bold mt-2 text-gray-900">
                  1,245
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">

                <i className="fa-solid fa-users text-indigo-600 text-2xl"></i>

              </div>

            </div>

            <p className="text-green-500 text-sm mt-5">
              +12% from last month
            </p>

          </CardContent>
        </Card>

        {/* Orders */}
        <Card className="rounded-3xl border-0 shadow-md hover:shadow-xl duration-300">

          <CardContent className="p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Total Orders
                </p>

                <h2 className="text-3xl font-bold mt-2 text-gray-900">
                  320
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

                <i className="fa-solid fa-cart-shopping text-orange-500 text-2xl"></i>

              </div>

            </div>

            <p className="text-green-500 text-sm mt-5">
              +8% from last week
            </p>

          </CardContent>
        </Card>

        {/* Revenue */}
        <Card className="rounded-3xl border-0 shadow-md hover:shadow-xl duration-300">

          <CardContent className="p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Revenue
                </p>

                <h2 className="text-3xl font-bold mt-2 text-gray-900">
                  ₹12,540
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                <i className="fa-solid fa-wallet text-green-600 text-2xl"></i>

              </div>

            </div>

            <p className="text-green-500 text-sm mt-5">
              +18% from last month
            </p>

          </CardContent>
        </Card>

        {/* Products */}
        <Card className="rounded-3xl border-0 shadow-md hover:shadow-xl duration-300">

          <CardContent className="p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Products
                </p>

                <h2 className="text-3xl font-bold mt-2 text-gray-900">
                  89
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">

                <i className="fa-solid fa-box-open text-pink-500 text-2xl"></i>

              </div>

            </div>

            <p className="text-green-500 text-sm mt-5">
              +4 new products
            </p>

          </CardContent>
        </Card>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Orders */}
        <Card className="xl:col-span-2 rounded-3xl border-0 shadow-md">

          <CardHeader className="flex flex-row items-center justify-between">

            <CardTitle className="text-xl">
              Recent Orders
            </CardTitle>

            <Button
              variant="ghost"
              className="text-indigo-600 hover:text-indigo-700"
            >
              View All
            </Button>

          </CardHeader>

          <CardContent className="space-y-4">

            {/* Order */}
            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 duration-300">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">

                  <i className="fa-solid fa-bag-shopping text-indigo-600"></i>

                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    Nike Shoes
                  </h3>

                  <p className="text-sm text-gray-500">
                    Order #2541
                  </p>

                </div>

              </div>

              <span className="font-semibold text-green-600">
                ₹2,500
              </span>

            </div>

            {/* Order */}
            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 duration-300">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">

                  <i className="fa-solid fa-mobile-screen text-orange-500"></i>

                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    iPhone 15
                  </h3>

                  <p className="text-sm text-gray-500">
                    Order #8741
                  </p>

                </div>

              </div>

              <span className="font-semibold text-green-600">
                ₹89,999
              </span>

            </div>

          </CardContent>
        </Card>

        {/* Profile */}
        <Card className="rounded-3xl border-0 overflow-hidden shadow-md bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">

          <CardContent className="p-8 flex flex-col items-center text-center">

            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl">

              <i className="fa-solid fa-user"></i>

            </div>

            <h2 className="text-2xl font-bold mt-5">
              Mohit Vijay
            </h2>

            <p className="text-indigo-100 mt-2">
              Super Admin
            </p>

            <Button className="mt-6 rounded-2xl bg-white text-indigo-700 hover:bg-gray-100 px-6 h-11">
              Edit Profile
            </Button>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}