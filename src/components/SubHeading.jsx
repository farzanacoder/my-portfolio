import React from 'react'

const SubHeading = ({className,text}) => {
  return (
    <h1 className={`text-sublight px-2 lg:px-0 mb-4 text-center text-base lg:w-2xl w-full pb-8 mx-auto lg:text-xl ${className}`}>{text}</h1>
  )
}

export default SubHeading