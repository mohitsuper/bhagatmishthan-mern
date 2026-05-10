import React, { useState } from "react";
import Navbar from "./components/Home/Navbar";
import MainContainer from "./commen/MainContainer";
import NavbarSecond from "./components/Navbar/NavSecond";

export default function HomePage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          duration-300
        `}
      >
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Navbar */}
        <NavbarSecond
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <MainContainer />
        </div>

      </div>
    </div>
  );
}