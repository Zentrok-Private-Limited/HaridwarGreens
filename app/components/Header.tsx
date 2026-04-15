import React from 'react'
import { WiSnowflakeCold } from "react-icons/wi";



function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 font-semibold text-base flex justify-between items-center px-4 py-3 bg-transparent rounded-lg'>
        <div>
            <p className='font-extrabold text-base'>Haridwar Greens</p>
           
        </div>

        <div>
             <ul className='flex gap-6 items-center px-4'>
                <li>Home</li>
                <li><WiSnowflakeCold /></li>
                <li>About</li>
                <li><WiSnowflakeCold /></li>
                <li>Products</li>
            </ul>
        </div>

        <div className='px-4'>
            <button className='bg-[#275123] text-white rounded-lg px-6 py-2 text-sm'>Contact Us</button>
        </div>
    </div>
  )
}

export default Header