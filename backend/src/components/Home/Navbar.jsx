import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ isOpen, setIsOpen }) {

  const [productOpen, setProductOpen] = useState(false);

  const location = useLocation();

  const menuClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl duration-300 group
    ${
      location.pathname === path
        ? "bg-indigo-600 text-white"
        : "hover:bg-indigo-600 text-gray-300"
    }`;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-[280px]
        bg-gray-950 text-white flex flex-col duration-300 shadow-2xl
        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

          <Link to="/" className="flex items-center gap-3">

            <img
              src="/asstes/logo/logo.png"
              alt="Logo"
              className="h-10 object-contain"
            />

            <div>
              <h2 className="text-sm font-bold text-white">
                ShopMate
              </h2>

              <p className="text-xs text-gray-400">
                Admin Panel
              </p>
            </div>

          </Link>

          {/* Mobile Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-2xl text-white"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">

          {/* Dashboard */}
          <Link
            to="/"
            className={menuClass("/")}
          >
            <i className="fa-solid fa-table-columns text-indigo-400 group-hover:text-white"></i>
            Dashboard
          </Link>

          {/* Topbar */}
          <Link
            to="/topbar"
            className={menuClass("/topbar")}
          >
            <i className="fa-solid fa-layer-group text-indigo-400 group-hover:text-white"></i>
            Topbar
          </Link>

          {/* Banner */}
          <Link
            to="/banner"
            className={menuClass("/banner")}
          >
            <i className="fa-solid fa-image text-indigo-400 group-hover:text-white"></i>
            Banner
          </Link>

          {/* Users */}
          <Link
            to="/users"
            className={menuClass("/users")}
          >
            <i className="fa-solid fa-users text-indigo-400 group-hover:text-white"></i>
            Users
          </Link>

          {/* Product Dropdown */}
          <div>

            <button
              onClick={() => setProductOpen(!productOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-indigo-600 duration-300 text-gray-300"
            >

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-box-open text-indigo-400"></i>
                Products
              </div>

              <i
                className={`fa-solid fa-angle-down duration-300 ${
                  productOpen ? "rotate-180" : ""
                }`}
              ></i>

            </button>

            {/* Dropdown Menu */}
            <div
              className={`overflow-hidden duration-300 ${
                productOpen
                  ? "max-h-96 mt-2"
                  : "max-h-0"
              }`}
            >

              <div className="ml-5 space-y-2 border-l border-gray-700 pl-4">

                <Link
                  to="/best-seller-product"
                  className="block text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg duration-300"
                >
                  Product List
                </Link>

                <Link
                  to="/product-type"
                  className="block text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg duration-300"
                >
                  Product Type
                </Link>

                <Link
                  to="/category"
                  className="block text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg duration-300"
                >
                  Category
                </Link>

                <Link
                  to="/management-products"
                  className="block text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg duration-300"
                >
                  Management Products
                </Link>

              </div>
            </div>
          </div>

          {/* Orders */}
          <Link
            to="/orders"
            className={menuClass("/orders")}
          >
            <i className="fa-solid fa-cart-shopping text-indigo-400 group-hover:text-white"></i>
            Orders
          </Link>

          {/* Settings */}
          <Link
            to="/settings"
            className={menuClass("/settings")}
          >
            <i className="fa-solid fa-gear text-indigo-400 group-hover:text-white"></i>
            Settings
          </Link>

        </nav>

        {/* Logout */}
        <div className="p-5 border-t border-gray-800">

          <button className="w-full bg-red-600 hover:bg-red-700 duration-300 py-3 rounded-xl font-medium flex items-center justify-center gap-3">

            <i className="fa-solid fa-right-from-bracket"></i>

            Logout

          </button>

        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        ></div>
      )}
    </>
  );
}