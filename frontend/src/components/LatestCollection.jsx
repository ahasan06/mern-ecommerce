import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isGridView, setIsGridView] = useState(false)

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  const toggleGridViewHandler = () => {
    setIsGridView((prev) => !prev)
  }

  return (
    <div className='my-10'>
      <div className='flex gap-3 py-8 text-center flex-col items-center justify-center'>
        <Title text1={'Latest'} text2={'Collections'} />
        <p className='lg:w-1/2 text-slate-600 text-xs sm:text-sm md:text-lg'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, magnam eius modi vitae sapiente soluta eum laborum atque similique natus?
        </p>
      </div>

      {/* Swiper for Latest Products */}
      <div className='flex justify-end '>
        <button onClick={toggleGridViewHandler}
          className=" py-2    text-slate-600  hover:text-slate-400  transition"
        >
          {
            isGridView ? "minimize" : "see all"
          }

        </button>
      </div>
      {
        isGridView ?
          (

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 '>
              {latestProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} rating={item.rating} totalsales={item.totalsales} bestseller={item.bestseller} />
              ))}
            </div>

          ) :
          (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className='latest-products '
            >

              {latestProducts.map((item ,index) => (
                <SwiperSlide key={index}>
                  <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} rating={item.rating} totalsales={item.totalsales} bestseller={item.bestseller} />
                </SwiperSlide>
              ))}
            </Swiper>

          )
      }



    </div >
  );
}

export default LatestCollection;
