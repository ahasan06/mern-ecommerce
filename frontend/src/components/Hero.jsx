import React from 'react'
import { assets } from '../assets/assets'
function Hero() {
    return (
        <div className='flex flex-col sm:flex-row  border border-gray-400'>
            {/* Hero Left Side  */}
            <div className=' w-full py-8  flex flex-col items-center  justify-center '>
                <div className='hero-container flex flex-col gap-2 sm:gap-4'>
                    <div className='flex items-center gap-2 text-slate-600 uppercase'>
                        <p className='w-8 md:w-11  h-[2px] bg-slate-600'></p>
                        <p className='font-medium'>Our Bestsellers</p>
                    </div>

                    <h1 className='prata-regular text-3xl lg:text-5xl text-slate-700 font-bold'>Latest Arrivals</h1>

                    <div className='flex items-center gap-2 text-slate-600 uppercase'>
                        <p className='font-medium'>Shop now</p>
                        <p className='w-8 md:w-11  h-[2px] bg-slate-600'></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}

            <img src={assets.hero_img} alt="hero-img" className='w-full sm:w-1/2' />

        </div>
    )
}

export default Hero