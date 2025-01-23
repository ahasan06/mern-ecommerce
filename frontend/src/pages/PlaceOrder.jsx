import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../features/cart/CartSlice'
function PlaceOrder() {
   const { navigate } = useContext(ShopContext)
  const dispatch = useDispatch()
   const initalState = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
    paymentMethod: 'cash-on-delivery',
  }

  const [formData, setFormData] = useState(initalState)
  // Update form data dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSelection = (method) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }))
  }
  const handleSubmit = () => {
    console.log('Order Details:', formData);
    dispatch(placeOrder(formData));
    navigate('/orders'); 
  };

  return (
    <div className='min-h-[60vh]  pt-10 border-t'>
      <Title text1={'Delivery'} text2={'Information'} />
      <div className=' grid grid-cols-1 lg:grid-cols-2  py-5 '>

        {/* left delivery information */}
        <div className='lg:w-[80%]  '>

          <form className='information-cart flex flex-col gap-2 '>
            <div className='grid grid-cols-2 gap-2'>
              <input type="text" placeholder='First name'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                className='outline-none border px-2 py-1 rounded text-slate-600' />
              <input type="text" placeholder='Last  name'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}

                className='outline-none border px-2 py-1 rounded text-slate-600' />
            </div>
            <input type="email" placeholder='Email address'
              name='email'
              value={formData.email}
              onChange={handleInputChange}

              className='outline-none border px-2 py-1 rounded text-slate-600' />
            <input type="text" placeholder='Street'
              name='street'
              value={formData.street}
              onChange={handleInputChange}

              className='outline-none border px-2 py-1 rounded text-slate-600' />

            <div className='grid grid-cols-2 gap-2'>
              <input type="text" placeholder='City'
                name='city'
                value={formData.city}
                onChange={handleInputChange}

                className='outline-none border px-2 py-1 rounded text-slate-600' />
              <input type="text" placeholder='State'
                name='state'
                value={formData.state}
                onChange={handleInputChange}

                className='outline-none border px-2 py-1 rounded text-slate-600' />

              <input type="number" placeholder='Zipcode'
                name='zipcode'
                value={formData.zipcode}
                onChange={handleInputChange}

                className='outline-none border px-2 py-1 rounded text-slate-600' />
              <input type="text" placeholder='Country'
                name='country'
                value={formData.country}
                onChange={handleInputChange}

                className='outline-none border px-2 py-1 rounded text-slate-600' />
            </div>

            <input type="number" placeholder='Phone'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}

              className='outline-none border px-2 py-1 rounded text-slate-600' />

          </form>

        </div>

        {/* Right delivery information */}
        <div className='flex flex-col '>
          <div className=' pt-10 lg:pt-0'>
            <CartTotal />
          </div>
          <h4 className='text-slate-800 uppercase pt-10'>PAYMENT METHOD</h4>
          <div className='flex  flex-col sm:flex-row    gap-4 pt-4'>
            <button
              className='flex items-center gap-2 border rounded-lg  h-12 px-2'
              onClick={() => handlePaymentSelection('stripe')}
            >
              <p
                className={`p-2 border rounded-full ${formData.paymentMethod === 'stripe' ? 'bg-green-500' : 'bg-slate-300'
                  }`}
              ></p>
              <img src={assets.stripe_logo} alt="stripe" className="w-16" />
            </button>

            <button className='flex items-center gap-2 border rounded-lg h-12 px-2 '
              onClick={() => handlePaymentSelection('razorpay')}
            >
              <p
                className={`p-2 border rounded-full ${formData.paymentMethod === 'razorpay' ? 'bg-green-500' : 'bg-slate-300'
                  }`}
              ></p>
              <img src={assets.razorpay_logo} alt="razorpay" className="w-20" />
            </button>

            <button className='flex items-center gap-2 border rounded-lg  h-12 px-2'
              onClick={() => handlePaymentSelection('cash-on-delivery')}
            >
              <p
                className={`p-2 border rounded-full ${formData.paymentMethod === 'cash-on-delivery' ? 'bg-green-500' : 'bg-slate-300'
                  }`}
              ></p>
              <p className='text-slate-600'>Cash on Delivery</p>
            </button>
          </div>

          <div className='mt-5  flex items-center'>
            <button onClick={handleSubmit} className='border px-8 py-2 bg-black hover:bg-slate-900 text-slate-50'>Place order</button>
          </div> 
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder