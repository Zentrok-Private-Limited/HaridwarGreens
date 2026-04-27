import React from 'react'
import { WiSnowflakeCold } from "react-icons/wi";
import { GoArrowRight } from "react-icons/go";



function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 font-semibold text-base flex items-center px-8 py-3 bg-[#E5E9AC] text-black rounded-lg mx-4 my-2'>

      {/* Left */}
      <div className='flex-1'>
        <ul className='flex gap-6 items-center'>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
        </ul>
      </div>

      {/* Center */}
      <div className='flex-1 flex justify-center'>
        <img
          src="/haridwargreenslogoheader.png"
          alt="logo"
          className='h-12 w-auto'
        />
      </div>

      {/* Right */}
      <div className='flex-1 flex justify-end'>
        <button className='bg-black flex items-center gap-2 text-white rounded-lg px-6 py-2 text-sm'>
          Explore Products
          <GoArrowRight />
        </button>
      </div>

    </div>
  );
}

export default Header