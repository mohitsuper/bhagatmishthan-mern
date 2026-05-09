import React from 'react';
import { Link } from 'react-router-dom';

export default function SIngleCard({ data }) {
  return (
    <Link to={`/shop/${data.category}/${data._id}`}>
      <div className="bg-white rounded-xl shadow-md p-4 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={data?.img || data?.subimage[0]}
          alt={data?.title}   loading="lazy" 
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="p-4">
          <h5 className="text-lg font-semibold text-gray-800 truncate">{data?.title}</h5>
          <p className="mt-2 text-gray-700">
            <span className="text-xl font-bold text-green-600">₹ {data?.price}</span>
            <span className="text-sm text-gray-500 ml-2">({data?.pcs} Pcs.)</span>
          </p>
          <button className='bg-indigo-500 px-5 text-white mt-4 py-2 rounded-md'>Add To Card</button>
        </div>
      </div>
    </Link>
  );
}
