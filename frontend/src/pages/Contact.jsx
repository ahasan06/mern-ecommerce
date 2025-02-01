import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div className='border-t py-10'>

      <div className='flex justify-center'>
        <Title text1={'Contact'} text2={'us'} />
      </div>

      <div className='py-14 flex flex-col md:flex-row justify-center gap-10'>
        <img src={assets.contact_img} alt="contact" className=' md:w-[450px] w-full h-full' />
        <div className=' flex flex-col gap-5 justify-center'>
          <h4 className='text-slate-700  font-bold text-lg'>Our Store</h4>
          <p className='text-slate-600'>54709 Willms Station
          Suite 350, Washington, USA</p>

          <p className='text-slate-600'>Tel: (415) 555-0132
          Email: admin@forever.com</p>
          <h4 className='text-slate-700  font-bold text-lg'>Careers at Forever</h4>

          <p className='text-slate-600'>Learn more about our teams and job openings.</p>
          <button className='border capitalize hover:bg-black hover:text-white py-2'>Explore jobs</button>
        </div>
      </div>


    </div>
  )
}

export default Contact