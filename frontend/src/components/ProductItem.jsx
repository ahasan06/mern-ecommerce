import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
function ProductItem({ id, image, name, price }) {
    const { currency } = useContext(ShopContext)
    console.log(name);


    return (
        <Link to={`/product/${id}`} className='block'>
            <div className='product-cart'>
                <div className='overflow-hidden'>
                    <img src={image[0]} alt={name} className="w-full hover:scale-110 transition-all ease-in-out  rounded-lg" />
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