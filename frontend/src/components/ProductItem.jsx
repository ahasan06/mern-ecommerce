import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
function ProductItem({ id, image, name, price, rating, totalsales }) {
    const { currency } = useContext(ShopContext)
    console.log(name);


    return (
        <Link to={`/product/${id}`} className='block'>
            <div className='product-cart relative '>
                <div className='overflow-hidden relative '>
                    <img src={image[0]} alt={name} className="w-full hover:scale-110 transition-all ease-in-out  rounded-lg" />
                    <div className='absolute   bottom-0   right-0' >
                        <div className='flex flex-col gap-2 '>
                            <p className='bg-custom-pink w-24 italic  text-xs  text-center text-slate-600  font-bold shadow ' >
                            Sold: {totalsales} pcs
                            </p>
                            <p className='bg-custom-pink w-24 italic  text-xs   text-slate-600   text-center font-bold rounded-br-lg '  >
                                Rating :  {rating}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <p className='text-lg font-semibold'>{name}</p>
                    <p className='text-sm text-gray-600'>{currency}{price}</p>
                </div>

            </div>
        </Link>
    )
}

export default ProductItem