import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { GoArrowRight } from 'react-icons/go'

const ProjectCard = ({ image, title, category }) => {
    return (
        <Flex className='w-[320px] flex-col gap-x-5 items-center bg-white py-5 rounded-2xl relative group/item'>
            <Flex className='w-[300px] h-52 bg-light justify-center items-center rounded-2xl'>
                <div className='w-[300px] mx-auto h-52 bg-light rounded-2xl p-4'>
                    <Image className='w-full h-full rounded-2xl shadow-2xl' src={image} />
                </div>
            </Flex>

            <h1 className='text-xl text-drk font-semibold pt-4'>{title}</h1>

            <Flex className='justify-center gap-x-2 items-center'>
                <p className='text-md text-paralight'>{category}</p>
                <GoArrowRight className='text-sublight  text-md' />
            </Flex>

            <Flex className='w-full h-full rounded-2xl absolute top-0 left-0 gap-x-4 justify-center items-center bg-gradient-to-l from-[#a4b0be]  to-[#57606f]  opacity-0 group-hover/item:opacity-70 transition-all duration-500 text-black text-2xl font-extrabold font-robo cursor-pointer'>
                <div className='delay-100'>Live</div>
                <div className='delay-150 translate-y-[450%] group-hover/item:translate-y-0 transition-all duration-300'>Project</div>
                <div className='delay-200 translate-y-[450%] group-hover/item:translate-y-0 transition-all duration-300'><GoArrowRight /></div>
            </Flex>
        </Flex>
    )
}

export default ProjectCard