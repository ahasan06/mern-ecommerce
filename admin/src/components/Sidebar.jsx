import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

function Sidebar() {
  return (
    <div className='w-[20%] min-h-screen border-r'>
      <div className='flex flex-col gap-4 pt-6 pl-[10%] text-[15px] '>
        <Link to="/add" className="flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l border-gray-300">
            <img className='w-5 h-5 ' src={assets.add_icon} alt="" />
            <p className='hidden md:block font-medium'>Add Items</p>
        </Link>

        <NavLink to="/list" className="flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l border-gray-300 ">
            <img className='w-5 h-5 ' src={assets.order_icon} alt="" />
            <p className='hidden md:block font-medium'>List Items</p>
        </NavLink>

        <NavLink to="/order" className="flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l border-gray-300">
            <img className='w-5 h-5 ' src={assets.order_icon} alt="" />
            <p className='hidden md:block font-medium'>Order Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
