import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import Flex from './Flex'

const SkillsBox = ({P_text,text}) => {
    return (
        <div>
            <Flex className='pb-5'>
                <RiVerifiedBadgeFill className='lg:mr-5 mr-2 mt-1' />
                <div>
                    <p className="lg:font-bold font-semibold lg:text-lg text-sm text-black">
                        {text}
                    </p>
                    <p className="text-xs text-sublight">{P_text}</p>
                </div>
            </Flex>


            
        </div>
    )
}

export default SkillsBox