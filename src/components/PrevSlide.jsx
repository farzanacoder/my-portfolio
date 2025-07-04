import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const PrevSlide = ({ className, onClick }) => {
    return (
        <div
            className={`${className} relative`}
            onClick={onClick}
        >
            <div className='w-14 h-10 duration-500 hover:bg-[#04050780]  bg-drk text-light z-10 flex items-center justify-center rounded-xl absolute top-[400px] left-[500px] -translate-y-1/2 -translate-x-1/3 cursor-pointer'><IoIosArrowBack className=' text-2xl' /></div>
        </div>
    )
}

export default PrevSlide