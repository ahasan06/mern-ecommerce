import React, { useContext, useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'
import Title from '../components/Title'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/CartSlice'

function Product() {
  const { products, currency } = useContext(ShopContext)
  const { productId } = useParams()
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState('')
  const [image, setImage] = useState('')

  const dispatch = useDispatch();
  const totalCart = useSelector((state) => state.cart.totalCart)
  console.log("Cart content:", totalCart);
  const handleAddCart = () => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
  
    // Create the product object without a unique id for size matching
    const cartItem = {
      ...productData,
      selectedSize: size,
    };
  
    // Dispatch the addToCart action and let it handle adding or updating
    dispatch(addToCart(cartItem));
  
    toast.success("Product added to cart successfully!");
  };
  
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
                productData.sizes.map((s, index) => (
                  <button onClick={() => setSize(s)} key={index} className={`bg-slate-100  text-slate-600   px-6 py-3  border-2 ${s == size ? ' border-custom-pink' : 'border-transparent'} `} >{s}</button>
                ))
              }
            </div>


            <button
              className={`bg-black text-white px-6 py-3 hover:bg-slate-900`}
              // disabled={!size}
              onClick={handleAddCart}
            >
              Add to cart
            </button>
          </div>

          <ul className='flex flex-col items-start gap-1 text-slate-600 border-t pt-5 text-xs w-full '>
            <li>100% Original product.</li>
            <li>Cash on delivery is available on this product.</li>
            <li>Easy return and exchange policy within 7 days</li>
          </ul>

        </div>
      </div>

      {/* Product description and reviews */}
      <div className='mt-10'>
        <div className='flex'>
          <h4 className='px-4 py-2 border font-medium '>Description</h4>
          <h4 className='px-4 py-2 border'>Reviews (122)</h4>
        </div>
        <div className='border p-10'>
          <p className='text-slate-600 text-sm '>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/* Related Products */}
      <div className='mt-16 flex flex-col gap-5 '>
        <Title text1={'Related'} text2={'Products'} />
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product