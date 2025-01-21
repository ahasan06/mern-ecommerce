import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'

import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';


function BestSeller() {
    const {products} = useContext(ShopContext)
    const [bestSeller,setBestSeller] = useState([])

    useEffect(()=>{
        const bestProducts = products.filter((item)=>item.bestseller && item.totalsales>400)
        setBestSeller(bestProducts.slice(0,5))
    },[products])


    

    return (
        <div className='my-10' >
            <div className='flex flex-col items-center  justify-center text-center py-8'>
                <Title text1={'Best'} text2={'Sellers'} />
                <p className='lg:w-1/2 text-slate-600 text-xs sm:text-sm md:text-lg'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, magnam eius modi vitae sapiente soluta eum laborum atque similique natus?
                </p>
            </div>
            
            <Swiper 
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className='best-products '
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            }}
            >   
            {
             bestSeller.map((item,index)=>(
                <SwiperSlide key={index}>
                      <ProductItem id={item.id} image={item.image} name={item.name} price={item.price} rating={item.rating} totalsales={item.totalsales} bestseller={item.bestseller} />
                </SwiperSlide>
             ))
            }
            </Swiper>

        </div>
    )
}

export default BestSeller