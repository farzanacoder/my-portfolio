import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import Flex from './Flex'

const Msgbox = ({ title, mailTxt, Icon, link }) => {
    return (
        <div className="bg-white px-20 py-4 rounded-3xl shadow-xl text-center">
            {Icon && <Icon className="mx-auto mb-3 text-3xl" />}
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-sm text-paralight mb-2">{mailTxt}</p>
            <Flex className='justify-center items-center gap-x-2'>
                <a href={link} target="_blank" rel="noopener noreferrer" className='text-sublight text-sm'>Write Me</a>
                <GoArrowRight className='text-sublight  text-sm font-normal' />
            </Flex>
        </div>
    )
}

export default Msgbox
