import React, { useContext } from 'react'
import Title from '../components/Title'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ShopContext } from '../context/ShopContext';
function Cart() {
  const {currency,delivery_fee} = useContext(ShopContext)
  const totalCart = useSelector((state) => state.cart.totalCart)
  const subTotal = useSelector((state) => state.cart.total)
  console.log("Totalcart", totalCart);
    // Calculate Total
    const totalAmount = subTotal + delivery_fee;

  return (
    <div className='pt-10 min-h-[60vh]  border-t relative '>
      <Title text1={'Your'} text2={'Cart'} />

      {
        totalCart.length > 0 ?
          (
            <div className='mt-5 px-2  max-h-[60vh] overflow-y-auto'>
              {
                totalCart.map((item, index) =>
                  <CartItem key={index} prod={item} />
                )
              }

            </div>
          ) : (
           
              <div className='flex min-h-[20vh]  flex-col items-center justify-center '>
                <AiOutlineShoppingCart className='text-slate-400 text-6xl' />
                <p className='text-slate-400'>Opps! Your cart is empty.</p>
              </div>
           
          )
      }
      <div className='pt-5 sm:pt-10 total-cart'>
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

        <div className='flex justify-end pt-8'>
          <button className='bg-black text-white px-6 py-3 text-sm uppercase hover:bg-slate-900'> proceed to checkout</button>
        </div>

      </div>


    </div>
  )
}

export default Cart