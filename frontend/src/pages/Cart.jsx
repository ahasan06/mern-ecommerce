import React, { useContext } from 'react'
import Title from '../components/Title'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ShopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal';

function Cart() {
  const { navigate } = useContext(ShopContext)
  const totalCart = useSelector((state) => state.cart.totalCart)


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
        <CartTotal />
        <div className='flex justify-end pt-8'>
          <button onClick={() => navigate('/place-order')} className='bg-black text-white px-6 py-3 text-sm uppercase hover:bg-slate-900'> proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart