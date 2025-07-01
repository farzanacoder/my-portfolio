import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import orebi from '../assets/orebi.PNG'
import Lunchipiration from '../assets/inspiration.PNG'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Project = () => {
  return (
    <section id='project' className='bg-light pb-20'>
      <Container>
        <Heading text='Project' />
        <SubHeading className='' text='Most recent work' />

        <Flex className='py-10 my-20 flex-col lg:flex-row lg:justify-evenly'>
          <Link to='/orebi'>
            <div className='w-xl mx-auto h-auto bg-white p-4 rounded-4xl shadow-2xl'>
              <Image className='w-full rounded-4xl' src={orebi} />
            </div>
          </Link>

          <div>
            <h3 className=" w:full px-10 md:px-0 md:w-[350px] lg:w-[421px] text-drk text-xl md:mr-10 lg:mr-0  md:text-[28px] lg:text-[45px] font-medium font-poppins pb-4 md:pb-8 text-center pt-2 sm:px-20 lg:pt-12 md:leading-[42px] lg:leading-[60px]">Orebi is a convenient online store where you can purchase any products</h3>
            <div className='flex items-center justify-center group/btn'>
              <Link to='/orebi'>
                <h5 className='relative'>Case Study <span className='h-[35px] w-[60px] group-hover/btn:w-[120px] duration-300 bg-[#97959340] absolute -top-1 -left-2'></span>
                <IoIosArrowRoundForward className='text-drk absolute top-0 left-24 font-bold text-2xl' />
                </h5>
              </Link>
            </div>
          </div>
        </Flex>


        <Flex className='py-10 my-20 flex-col lg:flex-row lg:justify-evenly'>
          <Link to='/lunchipiration'>
            <div className='w-xl mx-auto h-auto bg-white p-4 rounded-4xl shadow-2xl'>
              <Image className='w-full rounded-4xl' src={Lunchipiration} />
            </div>
          </Link>

          <div>
            <h3 className=" w:full px-10 md:px-0 md:w-[350px] lg:w-[421px] text-drk text-xl md:mr-10 lg:mr-0  md:text-[28px] lg:text-[45px] font-medium font-poppins pb-4 md:pb-8 text-center pt-2 sm:px-20 lg:pt-12 md:leading-[42px] lg:leading-[60px]">Showcase your skills with a personalized career portfolio.PNG</h3>
            <div className='flex items-center justify-center group/btn'>
              <Link to='/lunchipiration'>
                <h5 className='relative'>Case Study <span className='h-[35px] w-[60px] group-hover/btn:w-[120px] duration-300 bg-[#97959340] absolute -top-1 -left-2'></span>
                <IoIosArrowRoundForward className='text-drk absolute top-0 left-24 font-bold text-2xl' />
                </h5>
              </Link>
            </div>
          </div>
        </Flex>


       
      </Container>
    </section>
  )
}

export default Project