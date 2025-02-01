import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';


function SearchBar() {
    const { search, setSearch, showSearch, setShowSearch,searchRoute, } = useContext(ShopContext)
    const searchHandler = (e) => {
        const { value } = e.target;
        setSearch(value)
    }
    const removeShowSearchHandler = () => {
        setSearch('')
        setShowSearch(false)
    }

    return showSearch && searchRoute ? (
        <div className='border-t py-5 bg-slate-50  flex gap-5 justify-center items-center'>
            <div className='border border-slate-300 text-gray-600 flex items-center px-5 py-2 w-[80%] md:w-1/2 rounded-full'>
                <input value={search} type="text" onChange={searchHandler} placeholder='search...'
                    className='outline-none w-full bg-transparent'
                />
                <img src={assets.search_icon} alt="search" className='w-5 opacity-40 ' />
            </div>
            <button onClick={removeShowSearchHandler}>
                <img src={assets.cross_icon} alt="cross icon" className='w-4 cursor-pointer' />
            </button>
        </div>
    ) : null
}

export default SearchBar