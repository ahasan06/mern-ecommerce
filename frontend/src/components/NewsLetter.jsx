import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='text-center my-10 flex flex-col gap-3 '>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto border '>
                <input className='w-full sm:flex-1 outline-none px-5 ' type="email" placeholder='Enter your email' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsletterBox
