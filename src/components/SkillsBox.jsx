import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import Flex from './Flex'

const SkillsBox = ({P_text,text}) => {
    return (
        <div>
            <Flex className='pb-5'>
                <RiVerifiedBadgeFill className='mr-5 mt-1' />
                <div>
                    <p className="font-bold text-black flex items-center gap-2">
                        {text}
                    </p>
                    <p className="text-sm text-gray-500">{P_text}</p>
                </div>
            </Flex>


            
        </div>
    )
}

export default SkillsBox