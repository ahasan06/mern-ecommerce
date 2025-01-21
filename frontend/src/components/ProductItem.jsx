import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
function ProductItem({ id, image, name, price, rating, totalsales }) {
    const { currency } = useContext(ShopContext)



    return (
        <Link to={`/product/${id}`} className='block'>
            <div className='product-cart relative '>
                <div className='overflow-hidden relative '>
                    <img src={image[0]} alt={name} className="w-full hover:scale-110 transition-all ease-in-out  rounded-lg" />
                    {/* <div className='absolute   bottom-0   right-0' >
                        <div className='flex flex-col gap-2 '>
                            <p className='bg-custom-pink w-24 italic  text-xs  text-center text-slate-600  font-bold shadow ' >
                            Sold: {totalsales} pcs
                            </p>
                            <p className='bg-custom-pink w-24 italic  text-xs   text-slate-600   text-center font-bold rounded-br-lg '  >
                                Rating :  {rating}
                            </p>
                        </div>
                    </div> */}


                    <div className='absolute bg-white  rounded-tl-xl  h-[20%] w-[60%]  bottom-0   right-0 shadow-xl'
                     >
                        <div className='flex flex-col h-full justify-center items-center pl-5 pt-2 sm:pl-0 sm:pt-0 '>
                            <p className=' w-24 italic  text-xs  text-slate-600   ' >
                                Sold: {totalsales} pcs
                            </p>
                            <p className=' w-24 italic  text-xs   text-slate-600  '  >
                                Rating :  {rating}
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className='mt-2'>
                    <p className='text-sm lg:text-lg  font-semibold'>{name}</p>
                    <p className='text-sm text-gray-600'>{currency}{price}</p>
                </div>

            </div>
        </Link>
    )
}

export default ProductItem