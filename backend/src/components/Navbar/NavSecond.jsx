import React from "react";

export default function NavSecond({ setIsOpen, isOpen }) {
  return (
    <header className="bg-gray-950 sticky top-0 z-30 shadow-lg border-b border-gray-800 h-[4.5rem]">

      <div className="flex items-center justify-between px-5 lg:px-8 py-4">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
              src="/asstes/logo/logo.png"
              alt="Logo"
              className="h-11 w-auto object-contain block sm:hidden"
            />

            

          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="relative text-white text-xl hover:text-indigo-400 duration-300">

            <i className="fa-regular fa-bell"></i>

            <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>

          </button>

          {/* Admin Profile */}
          <div className="flex items-center gap-3 cursor-pointer group">

            <div className="relative">

              <i className="fa-solid fa-circle-user text-4xl text-gray-300 group-hover:text-indigo-400 duration-300"></i>

              <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-gray-950 rounded-full"></span>

            </div>

            <div className="hidden sm:block">

              <h4 className="text-sm font-semibold text-white">
                Admin
              </h4>

              <p className="text-xs text-gray-400">
                Super Admin
              </p>

            </div>

          </div>

        </div>
      </div>
    </header>
  );
}