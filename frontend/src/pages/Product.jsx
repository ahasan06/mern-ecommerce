import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

function Product() {
  const { products, currency } = useContext(ShopContext)
  const { productId } = useParams()
  const [productData, setProductData] = useState(false);
  const [size ,setSize] = useState('')
  const [image, setImage] = useState('')


  const fetchProduct = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setImage(item.image[0]);
        setProductData(item);
      }
    });
  };


  useEffect(() => {
    fetchProduct()
  }, [productId, products])
  console.log(productData);


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product container */}
      <div className='flex flex-col sm:flex-row gap-12 ' >
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3  ">
          <div className=' sm:w-[16%]  flex sm:flex-col overflow-x-auto sm:overflow-y-auto  gap-1 '>
            {productData?.image.map((item, index) => (
              <button
                onClick={() => setImage(item)} // Updates the selected image on click
                key={index}
                className={`border-2 w-[26%] sm:w-full  ${image === item ? 'border-custom-pink  ' : 'border-transparent'
                  }`}
              >
                <img
                  src={item}
                  alt="product-thumbnail"
                  className={`  sm:w-full  ${image === item ? 'blur-[2px]' : 'blur-0'
                    }`}
                />
              </button>
            ))}
          </div>
          <div className='w-full sm:w-[80%] overflow-hidden '>
            <img src={image} alt="image" className='w-full h-auto transition-transform duration-300 ease-in-out hover:scale-150 cursor-zoom-in ' />
          </div>
        </div>
        {/* product details */}
        <div className="flex-1 flex flex-col items-start gap-12 ">
          <div className='flex flex-col gap-2'>
            <h2 className='font-medium text-2xl'>{productData.name}</h2>
            <div className='flex items-center gap-1'>
              <img src={assets.star_icon} alt="" className='w-3 ' />
              <img src={assets.star_icon} alt="" className='w-3 ' />
              <img src={assets.star_icon} alt="" className='w-3 ' />
              <img src={assets.star_icon} alt="" className='w-3 ' />
              <img src={assets.star_dull_icon} alt="" className='w-3 ' />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='font-medium text-2xl text-slate-800'>{currency}{productData.price}</p>
          </div>
          <p className='text-slate-600 w-[80%]'>{productData.description}</p>

          <div className='flex flex-col   gap-4'>
            <h4 className='text-slate-600 font-medium'>Select Size</h4>
            <div className='flex gap-2'>
              {
                productData.sizes.map((size, index) => (
                  <button key={index} className={`bg-slate-50  text-slate-600   px-6 py-3 `} >{size}</button>
                ))
              }
            </div>


            <button className='bg-black text-white px-6 py-3 hover:bg-slate-900'>
              Add to cart
            </button>
          </div>

          <ul className='flex flex-col items-start gap-1 text-slate-600 border-t pt-5 text-xs '>
            <li>100% Original product.</li>
            <li>Cash on delivery is available on this product.</li>
            <li>Easy return and exchange policy within 7 days</li>
          </ul>

        </div>
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product