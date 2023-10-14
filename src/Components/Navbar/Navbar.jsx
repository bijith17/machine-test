import React, { useState } from 'react';
import Logo from '../../assets/Logo.png'
import { FaChevronDown } from "react-icons/fa6";
import Features from '../Features/Features';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [priceClick,setPriceClick]= useState(false);


  return (
    <nav className="  p-4">
      <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <img src={Logo} alt="Logo" className="w-36 " />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex font-bold space-x-6">
            <a href="#" className="hover:text-green-600 transition duration-300">Pricing</a>
            <a href="#" className="hover:text-green-600 transition duration-300">Contact Us</a>
            <a href="#" className="hover:text-green-600 transition duration-300">Features</a>
            
            <div className="relative group hover:text-green-400">
              <button onClick={()=>setPriceClick(!priceClick)} className="transition duration-300"> Pricing  <FaChevronDown className='inline text-green-400'/> </button>
           
                    <div  className={ priceClick ? 'visible absolute  group-focus:block text-green-500 mt-2  py-2  space-y-2 transition duration-300': 'hidden'  }>
                    <div className=" w-52 transition duration-300">
                    <p className=' py-1 transition duration-300' >Pricing 1</p>
                    <p className=' py-1 transition duration-300' >Pricing 1</p>
                    </div>
                    </div>
           
             
            </div>
            <a href="#" className="hover:text-green-600 transition duration-300">Contact</a>
            </div>
            <div className='hidden md:flex '>
            <button className="bg-green-400 mr-2  px-4 py-2 rounded border-2 hover:border-green-400 hover:bg-transparent transition duration-300 ">Get A Demo</button>
            <button className=" ml-3 px-4 py-2 rounded border-2 border-green-400 hover:bg-green-400 transition duration-300">Sign In</button>
          </div>
        </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-2 px-4 md:hidden">
          <a href="#" className="block hover:text-green-600 transition duration-300 py-1 ">Pricing</a>
          <a href="#" className="block hover:text-green-600 transition duration-300 py-1 ">Contact Us</a>
          <button className="block hover:text-green-600 transition duration-300 py-1 ">Features <FaChevronDown className='inline text-green-400'/></button>
          <button onClick={()=>setPriceClick(!priceClick)} className="block hover:text-green-600 transition duration-300 py-1 ">Pricing <FaChevronDown className='inline text-green-400'/></button>
          <div  className={ priceClick ? 'visible relative group-focus:block text-green-500 mt-2  py-2  space-y-2 transition duration-300': 'hidden'  }>
                    <Features />
                    </div>
                    <a href="#" className="block hover:text-green-600 transition duration-300 py-1 ">Contact</a>
          <button className="bg-green-400 mr-2  px-4 py-2 rounded border-2 hover:border-green-400 hover:bg-transparent transition duration-300 ">Get A Demo</button>
          <button className=" ml-3 px-4 py-2 rounded border-2 border-green-400 hover:bg-green-400 transition duration-300">Sign In</button>
                  </div>
      )}
    </nav>
  );
}

export default Navbar;
