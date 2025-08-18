import React from 'react'

const Button = (w,h) => {
  return (
    <div>
         <div className='flex justify-center items-center gap-4'>
            <button className='bg-[#1771B7] text-white p-1.5 w-[7em] rounded-[10px] h-[32px] hover:bg-[#2d2d5b] hover:scale-[1.1] hover:cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Button
