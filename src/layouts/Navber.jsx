import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import { RxCross2 } from 'react-icons/rx'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegAddressCard, FaRegFileAlt, FaRegUser } from 'react-icons/fa'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { TbMessageCircleUser } from 'react-icons/tb'

const Navber = () => {
  let [click, setClick] = useState(false)

  let handleClick = () => {
    setClick(!click)
  }
  return (

   <>
    {/* mobile menu here */}
    <header className='fixed top-0 left-0 w-full shadow z-50'>
      <nav className='relative h-full bg-light sm:hidden md:hidden lg:hidden py-4 '>
        <Flex className='px-4 justify-between items-center '>
        <a href="index.html" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-black italic" >Farjana</a>
        <div onClick={handleClick} className="cursor-pointer">
          {
            click ? <RxCross2 /> : <HiOutlineBars3 />
          }
        </div>
      </Flex>

     {
      click && 
      <>
       <ul className='absolute top-0 left-0 w-full flex flex-col items-center justify-center gap-y-5 py-4'>
        <Flex className='items-center gap-x-2'>
          <AiOutlineHome className='text-sm' />
          <List text='Home' />
        </Flex>
        <Flex className='flex items-center gap-x-2'>
          <FaRegUser className='text-sm' />
          <List text='About' />
        </Flex>
        <Flex className='flex items-center gap-x-2'>
          <FaRegFileAlt className='text-sm' />
          <List text='Skills' />
        </Flex>
        <Flex className='flex items-center gap-x-2'>
          <IoBriefcaseOutline className='text-sm' />
          <List text='Services' />
        </Flex>
        <Flex className='flex items-center gap-x-2'>
          <FaRegAddressCard className='text-sm' />
          <List text='Project' />
        </Flex>
        <Flex className='flex items-center gap-x-2'>
          <TbMessageCircleUser className='text-sm' />
          <List text='Contact' />
        </Flex>
      </ul>
      </>
     }

    </nav>
    </header>


    {/* desktop menu here */}

     <nav className='fixed top-0 left-0 w-full shadow z-50 hidden xl:block lg:block md:block sm:block bg-light py-5 '>
        <Container>
            <Flex>
              <div className='w-5/12'>
        <a href="index.html" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-black italic" >Farjana</a>
              </div>
                <div className='w-7/12'>
                <Flex className='gap-x-8 xl:gap-x-10 items-center'>
              <List text='Home'/>
              <List text='About'/>
              <List text='Skills'/>
              <List text='Services'/>
              <List text='Project'/>
              <List text='Contact'/>
                </Flex>                
                </div>
            </Flex>
        </Container>
    </nav>
   </>




  )
}

export default Navber