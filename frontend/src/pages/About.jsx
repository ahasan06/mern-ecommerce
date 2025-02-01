import React from 'react'
import Title from '../components/Title'
import { assets } from './../assets/assets';
import NewsletterBox from '../components/NewsLetter';
function About() {
  return (
    <div className='border-t py-10'>

      <div className='flex  justify-center'>
        <Title text1={'About'} text2={'us'} />
      </div>

      <div className='about__us mt-10 flex flex-col lg:flex-row items-center gap-14 xl:w-[85%] mx-auto lg:mx-0'>
        <img src={assets.about_img} alt="about-img" className=' lg:w-[450px] w-full h-full' />
        <div className='about_us body flex flex-col gap-5'>
          <p className='text-slate-600'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
            <br />
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <div className=' flex flex-col gap-2'>
            <h4 className='font-bold text-slate-800'>Our Mission</h4>
            <p className='text-slate-600'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <Title text1={'Why'} text2={'choose us'} />

        <div className='py-10 grid grid-cols-1 md:grid-cols-3'>
          <div className='about_card border p-20 flex flex-col gap-3'>
            <h4 className='font-bold text-slate-800'>Quality Assurance:</h4>
            <p className='text-slate-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>

          <div className='about_card border p-20 flex flex-col gap-3'>
            <h4 className='font-bold text-slate-800'>Convenience::</h4>
            <p className='text-slate-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>

          <div className='about_card border p-20 flex flex-col gap-3'>
            <h4 className='font-bold text-slate-800'>Exceptional Customer Service:</h4>
            <p className='text-slate-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>

        <NewsletterBox/>

      </div>

    </div>
  )
}

export default About