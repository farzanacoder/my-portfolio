import React from 'react'

const Heading = ({className,text}) => {
  return (
    <h1  className={`${className} lg:text-4xl font-semibold text-3xl text-center lg:font-bold mb-5`}>{text}</h1>
  )
}

export default Heading