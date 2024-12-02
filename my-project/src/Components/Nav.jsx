import React from 'react'
import Logo from '../assets/logo.png'
import { FaAngleDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
const Nav = () => {
  return (
    <nav className='py-3'>
        <div className="container mx-auto">
        <div className=" flex items-center gap-20 justify-between">
                <div className="">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="">
                    <ul className='flex items-center gap-10 font-lato'>
                        <li className='flex items-center gap-2 relative group'>
                            Home<FaAngleDown />
                            <ul className='absolute top-6 left-0 hidden group-hover:block z-30 bg-white'>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>Pages</li>
                        <li>Products</li>
                        <li>Blog </li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className=" flex items-center">
                    <input type="text"  className='border-2 outline-none w-64 h-9 pl-4' />
                    <button className='h-9 w-10 bg-[#FB2E86] flex justify-center items-center'><IoSearchOutline className='text-[25px] text-white' /></button>
                </div>
            </div>
        </div>
    </nav>
    
  )
}

export default Nav