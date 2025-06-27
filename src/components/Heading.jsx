import React from 'react'

const Heading = ({className,text}) => {
  return (
    <h1  className={`${className} text-4xl text-center font-bold mb-5`}>{text}</h1>
  )
}

export default Heading