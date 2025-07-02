import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Msgbox = ({ title, mailTxt, Icon ,link }) => {
    return (
        <div className="bg-white px-20 py-4 rounded-3xl shadow-xl text-center">
            {Icon && <Icon className="mx-auto mb-3 text-3xl" />}
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-sm text-gray-600 mb-2">{mailTxt}</p>
<a href={link} target="_blank" rel="noopener noreferrer">Write Me</a>     
   </div>
    )
}

export default Msgbox
