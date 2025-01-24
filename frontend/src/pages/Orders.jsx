import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { useSelector } from 'react-redux';
import OrderItem from '../components/OrderItem';


function Orders() {

  const orders = useSelector((state) => state.cart.orders);
  const orderItems = useSelector((state) => state.cart.orderItems);


  return (
    <div className='pt-10 border-t'>
      
      <div className='pb-10'>
       <Title text1={'My'} text2={'Orders'} />
      </div>

      <div className='flex flex-col max-h-56 overflow-y-auto'>
        {
          orderItems.map((order,index) => (
            <OrderItem key={index} items = {order} orders = {orders}/>
          ))
        }
      </div>

    </div>
  )
}

export default Orders