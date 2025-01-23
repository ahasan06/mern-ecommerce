import React, { useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { ShopContext } from '../context/ShopContext';
import { addToCart, removeFromCart } from '../features/cart/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
function CartItem({ prod }) {
  const { currency } = useContext(ShopContext)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(addToCart(prod));
  }
  const handleDecrease = () => {
    if (prod.quantity > 1) {
      dispatch(addToCart({ ...prod, quantity: -1 })); // Decrease quantity
    } else {
      dispatch(removeFromCart(prod)); // Remove item if quantity is 1
    }
  }

  const handleRemove = () => {
    dispatch(removeFromCart(prod))
    toast.success("remove from successfully!")
  }

  return (
    <div>
      <div className='cart-card flex justify-between border-t border-b  py-5'>
        <div className='flex gap-4 w-[60%]  sm:w-[70%]'>
          <img src={prod.image} alt="image" className='w-12 sm:w-20' />
          <div className='cart-body text-xs sm:text-lg flex flex-col gap-2'>
            <h4 className='  text-slate-700 font-medium'>{prod.name}</h4>
            <div className='flex items-center gap-2 sm:gap-4'>
              <p className='text-gray-600'> {currency} {prod.price}</p>
              <p className='bg-slate-50 text-slate-600  px-2  sm:px-3 sm:py-1 border'>{prod.selectedSize}</p>
            </div>
          </div>
        </div>
        <div className='flex  w-[35%] sm:w-[30%]  items-center justify-between'>
          <div className='flex items-center sm:gap-2'>
            <button
              className='bg-slate-50 text-slate-600  px-2  sm:px-3 sm:py-1 border'
              onClick={handleDecrease}
            >
              -
            </button>
            <input type="text" value={prod.quantity} className='w-6 sm:w-10 text-center text-xs sm:text-sm text-slate-600 ' />
            <button
              className='bg-slate-50 text-slate-600  px-2  sm:px-3 sm:py-1  border'
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <button>  <AiOutlineDelete className='text-xl sm:text-3xl text-slate-500' onClick={handleRemove} /></button>
        </div>
      </div>
    </div>
  )
}

export default CartItem