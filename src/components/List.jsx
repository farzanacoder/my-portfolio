import React from 'react'
import { Link } from 'react-scroll'

const List = ({text,className}) => {
    return (
        <div>
            <li className={`list-none text-sm lg:text-base font-medium hover:text-blue-400 cursor-pointer duration-300 ${className}`}><Link to={text.toLowerCase()} smooth={true} duration={500}>{text} </Link></li>
        </div>
    )
}

export default List