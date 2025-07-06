import React from 'react'

const Paratext = ({className,text}) => {
  return (
     <p className={`${className} text-[15px] lg:text-xl !w-full lg:mt-0 -mt-6 lg:!w-2xl mb-8 px-8 lg:px-0 text-paralight`}>{text}</p>
  )
}

export default Paratext