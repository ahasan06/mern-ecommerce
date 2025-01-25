import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function OrderItem({ items, orders }) {
    const { currency } = useContext(ShopContext)
    return (
        <div className='border-y py-4'>
            <div className='order-cart flex items-center justify-between text-xs md:text-sm'>
                {/* left cart */}
                <div className='flex items-center gap-2 w-1/2 text-slate-600'>
                    <img src={items.image} alt="image" className='w-10 h-10 rounded-full md:rounded-none md:w-16 md:h-16' />
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-bold'>{items.name}</h4>
                        <div className='flex items-center  gap-4'>
                            <p>{currency}{items.price}</p>
                            <p>Qty : {items.quantity}</p>
                            <p>Size : <span>{items.selectedSize}</span></p>
                        </div>
                        <div>Date: <span className='text-slate-400'>{new Date(orders[0].date).toDateString()}</span></div>
                    </div>
                </div>

                {/* middle cart */}
                <div className='flex items-center gap-2 text-slate-600'>
                    <div className='bg-green-700 p-1 rounded-full'></div>
                    <p>Ready to ship</p>
                </div>

                {/* end cart */}
                <div className='border px-2 py-1 rounded shadow-sm text-slate-600'>
                    <p>Track order</p>
                </div>


            </div>
        </div>
    )
}

export default OrderItem
