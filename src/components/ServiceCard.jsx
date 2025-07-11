import React from 'react'
import Flex from './Flex'
import { HiPlusSm } from 'react-icons/hi'
import { GrHtml5 } from 'react-icons/gr'
import { TbBrandJavascript } from 'react-icons/tb'
import { RiReactjsLine } from 'react-icons/ri'
import Image from './Image'



const ServiceCard = ({title,image, text}) => {
  return (
        <div className='relative group/box -left-[85px] lg:-left-0 w-[270px] h-[300px] rounded-2xl'>
            <Image className='w-full h-full rounded-t-2xl' src={image}/>
      
            <div className='absolute w-[190px] h-[100px] duration-500 hover:bg-[#04050780] bg-[#2f354280] rounded-tr-xl -bottom-[30px] left-0'>
                <Flex className='py-4 px-3 gap-x-3'>
                    <div className='w-[30px] h-[2px] bg-white mt-3'></div>
                    <div>
                    <h4 className='text-lg text-white font-semibold pb-1'> {title}</h4>
                    <p className='text-sm text-white'>{text}</p>
                    </div>
                </Flex>
            </div>

            <div className='absolute group/boxicn w-[40px] h-[40px] bg-[#2f354280]  duration-500 hover:bg-[#04050780] flex justify-center items-center rounded-full bottom-5 right-5'>
                <HiPlusSm className='text-white text-2xl group-hover/boxicn:rotate-[360deg] group-hover/boxicn:duration-500'/>
            </div>
            <div className='absolute group/boxicn w-[40px] h-[40px] bg-[#2f354280]  duration-500 hover:bg-[#04050780] flex justify-center items-center rounded-full bottom-5 right-5 -z-10 group-hover/box:bottom-[75px] group-hover/box:z-10 group-hover/box:duration-500'>
                <GrHtml5 className='text-white text-2xl group-hover/boxicn:rotate-[360deg] group-hover/boxicn:duration-500'/>
            </div>
            <div className='absolute group/boxicn w-[40px] h-[40px] bg-[#2f354280]  duration-500 hover:bg-[#04050780] flex justify-center items-center rounded-full bottom-5 right-5 -z-10 group-hover/box:bottom-[131px] group-hover/box:z-10 group-hover/box:duration-500'>
                <TbBrandJavascript className='text-white text-2xl group-hover/boxicn:rotate-[360deg] group-hover/boxicn:duration-500'/>
            </div>
            <div className='absolute group/boxicn w-[40px] h-[40px] bg-[#2f354280]  duration-500 hover:bg-[#04050780] flex justify-center items-center rounded-full bottom-5 right-5 -z-10 group-hover/box:bottom-[185px] group-hover/box:z-10 group-hover/box:duration-500'>
                <RiReactjsLine  className='text-white text-2xl group-hover/boxicn:rotate-[360deg] group-hover/boxicn:duration-500'/>
            </div>

        </div>
  )
}

export default ServiceCard