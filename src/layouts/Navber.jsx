import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import { RxCross2 } from 'react-icons/rx'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegAddressCard, FaRegFileAlt, FaRegUser } from 'react-icons/fa'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { TbMessageCircleUser } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

const Navber = () => {
  useEffect(()=>{
     window.scrollTo({top:0})
   })

  let [click, setClick] = useState(false)

  let handleClick = () => {
    setClick(!click)
  }


  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (

    <>
      {/* mobile menu here */}
      <header className=' top-0 left-0 w-full shadow z-10'>
        <nav className='relative h-full bg-light sm:hidden md:hidden lg:hidden py-4 '>
          <Flex className='px-4 justify-between items-center '>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-black italic" >Farjana</a>
            <div onClick={handleClick} className="cursor-pointer">
              {
                click ? <RxCross2 /> : <HiOutlineBars3 />
              }
            </div>
          </Flex>

          {
            click &&
            <>
              <ul className='absolute top-16 left-0 bg-light w-full flex flex-col items-center justify-center gap-y-5 py-4'>
                <Link to='/' state={{ scrollTo: 'home' }}>
                  <Flex className='items-center gap-x-2'>
                    <AiOutlineHome className='text-sm' />
                    <List text='Home' />
                  </Flex>
                </Link>

                <Link state={{ scrollTo: 'about' }}>
                  <Flex className='flex items-center gap-x-2'>
                    <FaRegUser className='text-sm' />
                    <List text='About' />
                  </Flex>
                </Link>

                <Link state={{ scrollTo: 'skills' }}>
                  <Flex className='flex items-center gap-x-2'>
                    <FaRegFileAlt className='text-sm' />
                    <List text='Skills' />
                  </Flex>
                </Link>

                <Link state={{ scrollTo: 'services' }}>
                  <Flex className='flex items-center gap-x-2'>
                    <IoBriefcaseOutline className='text-sm' />
                    <List text='Services' />
                  </Flex>
                </Link>

                <Link state={{ scrollTo: 'project' }}>
                  <Flex className='flex items-center gap-x-2'>
                    <FaRegAddressCard className='text-sm' />
                    <List text='Project' />
                  </Flex>
                </Link>

                <Link state={{ scrollTo: 'contact' }}>
                  <Flex className='flex items-center gap-x-2'>
                    <TbMessageCircleUser className='text-sm' />
                    <List text='Contact' />
                  </Flex>
                </Link>
              </ul>
            </>
          }

        </nav>
      </header>


      {/* desktop menu here */}

      <nav className=' z-10 w-full shadow  hidden xl:block lg:block md:block sm:block bg-light py-5 '>
        <Container>
          <Flex>
            <div className='w-5/12'>
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-black italic" >Farjana</a>
            </div>
            <div className='w-7/12'>
              <Flex className='gap-x-8 xl:gap-x-10 items-center'>
                <Link to='/' state={{scrollTo:'home'}}>
                  <List text='Home' />
                </Link>
                <Link state={{scrollTo:'about'}}>
                  <List text='About' />
                </Link>
                <Link state={{scrollTo:'skills'}}>
                  <List text='Skills' />
                </Link>
                <Link state={{scrollTo:'services'}}>
                  <List text='Services' />
                </Link>
                <Link state={{scrollTo:'project'}}>
                  <List text='Project' />
                </Link>
                <Link state={{scrollTo:'contact'}}>
                  <List text='Contact' />
                </Link>

              </Flex>
            </div>
          </Flex>
        </Container>
      </nav>
    </>




  )
}

export default Navber