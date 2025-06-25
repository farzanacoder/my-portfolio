import React from 'react'

const Button = ({btnTxt,className}) => {
  return (
    <button className={`py-4 px-10 rounded-4xl hover:bg-light hover:text-drk cursor-pointer duration-500 bg-black text-light ${className}`}>{btnTxt}</button>
  )
}

export default Button