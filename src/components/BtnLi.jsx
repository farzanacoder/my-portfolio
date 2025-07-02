import React from 'react'

const btnLi = ({ className, text }) => {
  return (
    <div>
      <h5 className={`${className} w-30 h-10 text-center pt-2 bg-[#97959340]`}>{text}</h5>
    </div>
  )
}

export default btnLi