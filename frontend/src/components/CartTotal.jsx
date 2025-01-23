import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import { useSelector } from 'react-redux'

function CartTotal() {
    const { currency, delivery_fee } = useContext(ShopContext)
    const totalCart = useSelector((state) => state.cart.totalCart)
    const subTotal = useSelector((state) => state.cart.total)
    const totalAmount = subTotal + delivery_fee;
    return (
        <div>
            <Title text1={'Cart'} text2={'Total'} />
            <div className='flex flex-col pt-5'>
                <div className='total-cart-item flex items-center justify-between border-b py-2'>
                    <p className='text-slate-700'>Subtotal</p>
                    <p className='text-slate-700' >{currency}{subTotal}</p>
                </div>
                <div className='total-cart-item flex items-center justify-between border-b py-2'>
                    <p className='text-slate-700'>Shipping Fee</p>
                    <p className='text-slate-700'> {currency} {delivery_fee}</p>
                </div>
                <div className='total-cart-item flex items-center justify-between py-2'>
                    <p className='text-slate-900 font-bold'>Total</p>
                    <p className='text-slate-900 font-bold'> {totalCart.length > 0 ? `${currency} ${totalAmount}` : '0'}</p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal