import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import ProductItem from './ProductItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Autoplay  } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';


function RelatedProduct({ category, subCategory }) {
    const { products } = useContext(ShopContext);
    const relatedProduct = products.filter(
        (product) => product.category === category && product.subCategory === subCategory
    )
    return (
        <div>
            {
                relatedProduct.length > 0 ? (

                    <Swiper
                        modules={[EffectCoverflow,Autoplay]}
                        effect="coverflow" // Use Flip effect
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        slidesPerView={3}
                        breakpoints={{
                            1024: { slidesPerView: 5 },
                        }}
                       
                        className='w-full'
                    >
                        {
                            relatedProduct.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} rating={item.rating} totalsales={item.totalsales} bestseller={item.bestseller} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    // <div className='grid grid-cols-2   xl:grid-cols-3 2xl:grid-cols-4  gap-8'>
                    //     {relatedProduct.map((item, index) => (
                    //         <ProductItem
                    //             key={index}
                    //             id={item._id}
                    //             image={item.image}
                    //             name={item.name}
                    //             price={item.price}
                    //             rating={item.rating}
                    //             totalsales={item.totalsales}
                    //             bestseller={item.bestseller}
                    //         />
                    //     ))}
                    // </div>
                ) :
                    (
                        <div>
                            <p className="text-slate-600">No related products found.</p>
                        </div>
                    )

            }
        </div>
    )
}

export default RelatedProduct