import React from 'react'

const SubHeading = ({className,text}) => {
  return (
    <h1 className={`text-sublight mb-4 text-center text-xl ${className}`}>{text}</h1>
  )
}

export default SubHeading