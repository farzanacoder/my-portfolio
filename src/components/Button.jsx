import React from 'react'

const Button = ({btnTxt,className,href}) => {
  return (
    <button href={href} className={`lg:py-4 lg:!px-10 py-2 !px-6 lg:text-base text-sm border border-drk rounded-4xl hover:bg-transparent hover:text-drk cursor-pointer duration-500 bg-black text-light ${className}`}>{btnTxt}</button>
  )
}

export default Button