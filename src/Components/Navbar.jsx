import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <> 
    {/* <div className="absolute w-1447 h-42 left-7 top-0 flex">
      <ul>
        <li className='absolute w-169 h-19 left-166 top-12 font-sans font-normal text-base leading-19 text-black'>Free 14-days B-Care guide</li>
        <li className='absolute w-169 h-19 left-166 top-12 font-sans font-normal text-base leading-19 text-black'>Upgrade</li>
        <li className='absolute w-44 h-19 left-1097 top-11 font-sans font-normal font-medium text-base leading-5 text-blue-600'>Signin</li>
      </ul>
    </div> */}
    <nav className="border-b  border-solid flex items-center justify-between flex-wrap bg-white-800 p-3">
      <div className="flex items-center flex-shrink-0 text-pink-500 mr-6">
        <span className="font-semibold text-xl text-pink-500  tracking-tight">B-Care</span>
      </div>
       
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow lg:text-right">
          <a href="#responsive-header" className=" font-bold block mt-4 lg:inline-block lg:mt-0 text-bold text-pink-500  hover:text-black mr-4">
            Doctor
          </a>
          <a href="#responsive-header" className="font-bold block mt-4 lg:inline-block lg:mt-0 text-bold text-pink-500  hover:text-black mr-4">
            Users
          </a>
          <a href="#responsive-header" className="font-bold  block mt-4 lg:inline-block lg:mt-0 text-bold text-pink-500  hover:text-black mr-0 lg:mr-4">
            Blogs
          </a>
          <a href="#responsive-header" className="font-bold  block mt-4 lg:inline-block lg:mt-0 text-bold text-pink-500  hover:text-black mr-0 lg:mr-4">
             Test
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue border-blue 
          hover:border-b
           hover:text-white-500 hover:bg-pink-500 mt-4 lg:mt-0 mr-4">Login</a>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
