import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  return (
    <from className=" flex flex-col items-center gap-4 w-[90%] mx-auto  min-h-[60vh] justify-center sm:max-w-96 ">
      <div className='inline-flex gap-2 items-center text-gray-600'>
        <p className='prata-regular text-3xl capitalize'>Login</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-600' />
      </div>
      <input type="email" placeholder='email' className='border text-xs border-slate-400 px-2 py-3  rounded w-full' />
      <input type="password" placeholder='password' className='border text-xs border-slate-400 px-2 py-3 rounded w-full ' />
      <div className='flex items-center justify-between  w-full'>
        <button className='text-xs border-b'>Forgot your password ?</button>
        <Link to={'/signup'}> <button className=' capitalize'>Signup</button></Link>
      </div>
      <button className='bg-black text-white hover:bg-slate-900 px-6 py-1 rounded'>Login</button>
    </from>
  )
}

export default Login