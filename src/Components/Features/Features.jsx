import React from 'react'
import { MdDiamond } from "react-icons/md";
import { FaCartShopping, FaCircleDollarToSlot, FaCrown, FaGofore } from "react-icons/fa6";
function Features() {
  return (
    <div className='bg-green-200 h-screen'>
    <div className='pt-10 container mx-auto grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 sm:px-4 md:px-6 lg:px-10'>
        <div className="bg-violet-500 text-white sm:rounded-tl-xl sm:rounded-bl-xl p-7 shadow-lg shadow-slate-900/90">
            <div className="content my-4">
            <div className="flex  ">
            <FaCircleDollarToSlot className='text-5xl sm:text-6xl sm:py-2'/>
                    <div className="text ml-3 px-2 py-4 bg-violet-400 w-full">
                        <h2 className='font-bold'>ENTRY LEVEL</h2>
                        <p>Best for small scale business</p>
                    </div>
            </div>
            </div>
            <div className="content my-4">
            <div className="flex">
                <MdDiamond className='text-5xl sm:text-6xl py-2'/>
            <div className="text ml-3 px-2 py-4  w-full">
                <h2 className='font-bold'>PREMIUM</h2> 
                 <p>Best for medium size business</p>
            </div>
            </div>
            </div>
            <div className="content my-4">
            <div className="flex">
                <FaCrown className='text-5xl sm:text-6xl py-2'/>
            <div className="ml-3 px-2 py-4  w-full">
                <h2  className='font-bold'>ENTERPRISE</h2>
                <p>Best for large size business</p>
            </div>
            </div>
            </div>
        </div>
        {/* features  */}
        <div className="bg-white p-14 shadow-lg shadow-slate-900/90">
            <h2 className='text-violet-700 font-bold  my-6'>FEATURES</h2>
            <ul>
                <li className='py-1'><FaGofore className='inline mr-3 '/> Online Acess To Software 24/7</li>
                <li className='py-1'><FaGofore className='inline mr-3 '/> Free Funded Referral Platform</li>
                <li className='py-1'><FaGofore className='inline mr-3 '/> 24/7 Online Support</li>
                <li className='py-1'><FaGofore className='inline mr-3 '/> 10 User Accounts</li>
                <li className='py-1'><FaGofore className='inline mr-3 '/> Free E - File</li>
            </ul>
            <p className='text-violet-700 ml-9 mt-3 underline font-bold cursor-pointer'>Know More</p>
        </div>
        {/* price */}
        <div className="bg-gray-200 p-20 sm:rounded-br-lg sm:rounded-bt-lg shadow-lg shadow-slate-900/90 ">
        <h4 className='text-violet-700'>PRICE</h4>
        <p className='pt-6 text-slate-700'>Value for money pack</p>
        <p className='text-6xl text-violet-700'>$499</p>
        <button className='mt-8 py-3 px-8 rounded-md text-white bg-greens border-green border-2 hover:bg-white hover:border-greens hover:border-2 hover:text-black transition duration-300 '>Buy Now <FaCartShopping className='inline'/> </button>
        </div>



    </div>
    </div>
  )
}

export default Features
