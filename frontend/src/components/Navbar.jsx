import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GiCrossMark } from "react-icons/gi";
import { ShopContext } from '../context/ShopContext';
function Navbar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleShowSearchbar = () => {
    setShowSearch(prev => !prev)
  }
  const toggleSubMenuHandler = () => {
    setSubMenuOpen((prev) => !prev);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to="/"><img src={assets.logo} className='w-36' alt="logo" /> </Link>
      <ul className='nav-menu  hidden sm:flex gap-5  text-gray-700'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className='nav_link'>Home</p>
          <hr className='w-2/4   border-none h-[0.5px] bg-gray-600 hidden' />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className='nav_link'>Collection</p>
          <hr className='w-2/4   border-none h-[0.5px] bg-gray-600 hidden' />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className='nav_link'>About</p>
          <hr className='w-2/4   border-none h-[0.5px] bg-gray-600 hidden' />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className='nav_link'>Contact</p>
          <hr className='w-2/4   border-none h-[0.5px] bg-gray-600 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6 '>
        <button onClick={toggleShowSearchbar}>
          <img src={assets.search_icon} alt="search icon" className="w-5 cursor-pointer" />
        </button>

        <div className='relative'>
          <img src={assets.profile_icon} alt="profile icon  " className='w-5 cursor-pointer' onClick={toggleSubMenuHandler} />
          {
            subMenuOpen && (
              <div className='absolute  right-0 top-10'>
                <ul className='flex flex-col items-center gap-2 w-36 py-3 bg-slate-100 shadow rounded text-slate-600'>
                  <NavLink to="/profile">
                    <p>Profile</p>
                  </NavLink>
                  <NavLink to="/orders">
                    <p>
                      Orders
                    </p>
                  </NavLink>
                  <NavLink to="/logout">
                    <p>Logout</p>
                  </NavLink>
                </ul>
              </div>
            )
          }


        </div>

        <div className='cart'>
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="cart" className='w-5' />
            <p className='absolute left-1/2 top-1/2 bg-black rounded-full flex items-center justify-center  w-5 h-5 text-white'>0</p>
          </Link>
        </div>

        <button className='border-none bg-transparent block  sm:hidden '
          onClick={toggleMobileMenu}
        >
          {
            mobileMenuOpen ? (
              <GiCrossMark className='text-xl  ' />

            ) : (
              <img src={assets.menu_icon} alt="menu icon" className='w-5 cursor-pointer' />
            )
          }

        </button>
      </div>

      <div className={`absolute z-50   top-16  right-0 bottom-0 bg-slate-50  overflow-hidden transition-all ease-linear  ${mobileMenuOpen ? 'w-full' : 'w-0'} `}>


        <ul className='nav-menu  flex flex-col   px-4 py-5 text-xl   sm:hidden  gap-5  text-gray-700'>
          <NavLink onClick={toggleMobileMenu} to="/" className="flex flex-col py-2  gap-1 border-b">
            <p className='nav_link'>Home</p>
          </NavLink>

          <NavLink onClick={toggleMobileMenu} to="/collection" className="flex flex-col py-2  gap-1 border-b">
            <p className='nav_link'>Collection</p>

          </NavLink>

          <NavLink onClick={toggleMobileMenu} to="/about" className="flex flex-col py-2  gap-1 border-b">
            <p className='nav_link'>About</p>

          </NavLink>

          <NavLink onClick={toggleMobileMenu} to="/contact" className="flex flex-col py-2  gap-1 border-b">
            <p className='nav_link'>Contact</p>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar