import React from 'react'

function Title({ text1, text2 }) {
    return (
        <div className='flex items-center gap-2'>
            <div className='title-contain  flex gap-1 uppercase '>
                <h2 className='text-xl sm:text-3xl prata-regular text-slate-500 font-bold relative'>{text1}
                    <div className='bg-custom-pink h-6 w-full blur-lg  absolute top-1/2 -translate-y-1/2   -z-10 '></div>
                </h2>
                <h2 className='text-xl sm:text-3xl prata-regular text-slate-800 font-bold'>{text2}</h2>
            </div>
             <div className='h-[2px] w-16 rounded-full  bg-slate-700'></div>
        </div>
    )
}

export default Title