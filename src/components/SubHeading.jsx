import React from 'react'

const SubHeading = ({className,text}) => {
  return (
    <h1 className={`text-drk mb-4 mr-7 text-xl ${className}`}>{text}</h1>
  )
}

export default SubHeading