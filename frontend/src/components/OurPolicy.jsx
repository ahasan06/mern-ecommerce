import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
function OurPolicy() {
    return (
        <div className='my-10'>
            <div className='flex flex-col items-center  justify-center text-center py-8'>
                <Title text1={'Our'} text2={'Policy'} />
                <p className='lg:w-1/2 text-slate-600 text-xs sm:text-sm md:text-lg'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, magnam eius modi vitae sapiente soluta eum laborum atque similique natus?
                </p>
            </div>

            <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10'>

            <div className='flex flex-col justify-center items-center'>
                <img src={assets.exchange_icon} alt="icon"  className='w-12 mb-5 ' />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-700'>We offer hassle free exchange policy</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <img src={assets.quality_icon} alt="icon"  className='w-12 mb-5 ' />
                <p className='font-semibold'>7 Days Return Policy</p>
                <p className='text-gray-700'>We Provides 7 days free </p>
            </div>


            <div className='flex flex-col justify-center items-center'>
                <img src={assets.support_img} alt="icon"  className='w-12 mb-5 ' />
                <p className='font-semibold'>Best Customer Support</p>
                <p className='text-gray-700'>We provide 24/7 customer support</p>
            </div>
            </div>

        </div>
    )
}

export default OurPolicy