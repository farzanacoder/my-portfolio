import React from 'react'

const Paratext = ({className,text}) => {
  return (
     <p className={`${className} text-paralight w-xl my-8`}>{text}</p>
  )
}

export default Paratext