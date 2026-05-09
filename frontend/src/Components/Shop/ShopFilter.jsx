import React from "react";
import { Link } from "react-router-dom";
const shopPath = [
  { title: "LADDU", path: "/laddu" },
  { title: "MAWA SWEETS", path: "/mawa-sweets" },
  { title: "DRY FRUITS SWEET", path: "/dry-fruits-sweet" },
  { title: "GHEE SWEETS", path: "/ghee-sweets" },
  { title: "BENGALI SWEETS", path: "/bengali-sweets" },
  { title: "NAMKEEN", path: "/namkeen" },
  { title: "NUTS", path: "/nuts" },
  { title: "COOKIES", path: "/cookies" },
  { title: "FESTIVE GIFTINGS", path: "/festive-giftings" },
  { title: "DEHYDRATED FRUITS", path: "/dehydrated-fruits" },
  { title: "BAKLAWA & BITE", path: "/baklawa-bite" },
  { title: "TRUFFLE & CHOCOLATES", path: "/truffle-chocolates" },
  { title: "GHEWAR", path: "/ghewar" },
  { title: "BHAJI BOX", path: "/bhaji-box" },
  { title: "FALAHAAR SWEETS", path: "/falahaar-sweets" },
];
export default function ShopFilter() {
  return (
    <div className="flex justify-between px-40 py-10">
      <select className="px-5 py-3 border border-gray-300" defaultValue="">
        {shopPath.map((item, index) => (
          <option className="p-3 border border-gray-300" value={item.path} key={index}>
            {item.title}
          </option>
        ))}
      </select>
      <select className="px-5 py-3 border border-gray-300">
        <option value="" selected="selected">
          Popularity
        </option>
        <option value="1">Newly Listed</option>
        <option value="2">Price - High to Low</option>
        <option value="3">Price - Low to High</option>
        <option value="4">Alphabetical </option>
      </select>
    </div>
  );
}
