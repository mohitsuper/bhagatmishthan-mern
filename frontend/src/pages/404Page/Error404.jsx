import React from 'react';
import errorImg from '../../assets/images/404-error.png'
export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-black bg-[#EEF2FF] text-center px-4">
      <img src={errorImg} className='w-[156px] h-[156px] '/>
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-md font-semibold"
      >
        Go Home
      </a>
    </div>
  );
}
