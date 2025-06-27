import React from 'react'

const Button = ({btnTxt,className,href}) => {
  return (
    <button href={href} className={`py-4 px-10 border border-drk rounded-4xl hover:bg-transparent hover:text-drk cursor-pointer duration-500 bg-black text-light ${className}`}>{btnTxt}</button>
  )
}

export default Button