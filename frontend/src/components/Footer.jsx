import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <footer className=' mt-40 '>

            <div className='flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-12' >
                <div className='w-full md:w-2/3 text-gray-600 '>
                    <img src={assets.logo} alt="logo" className='w-36 ' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id, libero nobis quas magnam iusto placeat officia sapiente error quasi!</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5 uppercase'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600 text-sm'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 uppercase'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600 text-sm'>
                        <li>+1-000-000-0000+</li>
                        <li>ahasanhnahid@gmail.com</li>
                        <li>Delivery</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>

            <div className='mt-10'>
                <hr />
                <p className='text-sm text-gray-600 py-5 text-center'>Copyright 2025 @ ahasanhnahid - All Right Reserved.</p>
            </div>


        </footer>
    )
}

export default Footer