import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-10">

      {/* Main Footer */}
      <div className="max-w-[1400px]  px-4 sm:px-6 lg:px-8 mx-auto md:px-10  py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <img src="/logo.png" height={80} width={150} className="mb-2"/>

          <p className="text-sm leading-7 text-gray-400">
            Discover premium products with amazing deals and fast delivery.
            ShopMate makes your online shopping experience smooth and secure.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center duration-300"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center duration-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center duration-300"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center duration-300"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>

          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <a href="#" className="hover:text-indigo-400 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400 duration-300">
                Shop
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400 duration-300">
                Categories
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400 duration-300">
                Offers
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400 duration-300">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Info
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">

            <li className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-indigo-500"></i>
              +91 6378494265
            </li>

            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-indigo-500"></i>
              support@shopmate.com
            </li>

            <li className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-indigo-500"></i>
              Jaipur, Rajasthan, India
            </li>

          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Newsletter
          </h3>

          <p className="text-sm text-gray-400 mb-5 leading-6">
            Subscribe to receive updates, latest offers, and shopping deals.
          </p>

          <form className="flex flex-col gap-3">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 outline-none focus:border-indigo-500"
            />

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-lg text-white font-medium duration-300"
            >
              Subscribe
            </button>

          </form>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8  py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} ShopMate. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a href="#" className="hover:text-indigo-400 duration-300">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-indigo-400 duration-300">
              Terms & Conditions
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}