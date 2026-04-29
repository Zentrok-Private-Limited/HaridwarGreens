import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#E5E9AC] text-black p-8 md:p-16 h-[600px] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Section: Contact Info */}
        <div className="md:col-span-4 space-y-8">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">(Email)</p>
            <a href="mailto:hello@nakula.com" className="text-xl md:text-2xl font-bold text-[#297B43] hover:opacity-80 transition-opacity">
              hello@haridwargreens.com
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">(Phone)</p>
            <p className="text-2xl font-semibold">+91 0009999000</p>
          </div>
        </div>

        {/* Middle Section: Links & Socials */}
        <div className="md:col-span-2">
          <p className="text-gray-500 text-xs uppercase mb-6">(Links)</p>
          <ul className="space-y-3 text-xl font-medium">
            <li><a href="#" className="hover:text-[#297B43]">Home</a></li>
            <li><a href="#" className="hover:text-[#297B43]">About</a></li>
            <li><a href="#" className="hover:text-[#297B43]">Products</a></li>
            <li><a href="#" className="hover:text-[#297B43]">Contact</a></li>
           
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-gray-500 text-xs uppercase mb-6">(Socials)</p>
          <ul className="space-y-3 text-xl font-medium">
            <li><a href="#" className="flex items-center hover:text-[#297B43]">X/Twitter <span className="ml-1 text-sm">↗</span></a></li>
            <li><a href="#" className="flex items-center hover:text-[#297B43]">Instagram <span className="ml-1 text-sm">↗</span></a></li>
            <li><a href="#" className="flex items-center hover:text-[#297B43]">LinkedIn <span className="ml-1 text-sm">↗</span></a></li>
          </ul>
            
        </div>

        {/* Right Section: Status & Newsletter */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end space-y-6">
          <div className="text-right flex flex-col items-end">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium uppercase">Stocks are Available </span>
            </div>
            <p className="text-[#297B43] text-xs uppercase">grab yours now</p>
          </div>

          <div className="w-full max-w-sm">
            <p className="text-[#297B43] text-sm mb-4">Sign up for our newsletter to get latest insights and updates</p>
            <div className="relative border-b border-gray-700 pb-2">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="bg-transparent w-full outline-none text-lg py-2"
              />
            </div>
            <button className="mt-6 w-full border border-gray-700 rounded-full py-3 hover:bg-[#297B43] hover:text-white transition-all font-bold tracking-widest text-xs uppercase">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#297B43] uppercase tracking-widest">
        <div className="mb-4 md:mb-0">
        <p>©{new Date().getFullYear()} HARIDWARGREENS. ALL RIGHTS RESERVED</p>
          <div className="flex gap-4 mt-1">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
