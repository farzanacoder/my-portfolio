import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const NextSlide = ({className , onClick}) => {
  return (
     <div className={`${className} relative`} 
     onClick={onClick}> 
     <div className='w-14 h-10 bg-drk duration-500 hover:bg-[#04050780] text-light z-10 flex justify-center items-center rounded-xl absolute -bottom-[124px] right-[50px] lg:right-[470px] -translate-y-1/2 -translate-x-1/2 cursor-pointer'> <IoIosArrowForward className=' text-xl' /></div>
    </div>
  )
}

export default NextSlide