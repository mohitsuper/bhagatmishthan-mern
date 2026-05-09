import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] ">
      
      {/* Top section */}
      <div className="md:px-40 px-5 py-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">ShopMate</h2>
          <p className="text-md leading-6">
            Your trusted online store for quality products at the best prices.
            Shop smart, shop with ShopMate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-md">
            <li><a href="#" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="hover:text-indigo-600">Shop</a></li>
            <li><a href="#" className="hover:text-indigo-600">Deals</a></li>
            <li><a href="#" className="hover:text-indigo-600">About</a></li>
            <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-md">
            <li>📞 +91-6378494265</li>
            <li>✉️ email@gmail.com</li>
            <li>📍 Jaipur, Rajasthan, India</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-md mb-3">Subscribe to get special offers, free giveaways, and updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 rounded-r-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-indigo-600 text-white text-md py-3 md:px-40">
        <div className="container mx-auto  flex justify-between items-center flex-col md:flex-row gap-2">
          <p>© {new Date().getFullYear()} ShopMate. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
