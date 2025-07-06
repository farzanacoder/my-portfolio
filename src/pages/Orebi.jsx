import React, { useEffect } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Ecommerce from '../assets/orebi.PNG'
import { Link } from 'react-router-dom'
import Item from '../components/Item'

const Orebi = () => {

 useEffect(()=>{
    window.scrollTo({top:0})
  })

  return (
    <section className='bg-light py-32'>
      <Container>
        <Flex className='flex-col justify-center items-center gap-y-5'>
          <Heading text='OREBI' />
          <SubHeading className='lg:w-4xl w-md' text='This page contains the case study of TalksME Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.' />
          <a href="https://github.com/farzanacoder/Ecommerce_project" target="_blank" rel="noopener noreferrer">
            <Button btnTxt='Project Link' />
          </a>
        </Flex>

        <div className='lg:w-xl w-[300px] mx-auto my-20 h-auto bg-white lg:p-4 p-3 rounded-4xl shadow-2xl'>
          <Image className='w-full rounded-4xl' src={Ecommerce} />
        </div>

        <Flex className='flex-col gap-y-4 px-5'>
          <Heading text='Project OverView' />
          <SubHeading text={`Orebi, built with the dynamic capabilities of React.js and the sleek aesthetics of Tailwind CSS, delivers a seamless and secure shopping experience for users across all devices.`} />
          <SubHeading text={`With its intuitive design and customizable features, Orebi, powered by React.js and tailored with Tailwind CSS, ensures an efficient and user-centric eCommerce journey for customers of all preferences.`} />
          <SubHeading text={`Orebi's modern and scalable infrastructure, integrated with React.js and polished with Tailwind CSS, provides an elegant and feature-rich online shopping experience, promising both convenience and security to users.`} />
          <SubHeading text={`Tailored with the latest advancements in React.js and fine-tuned with the sleekness of Tailwind CSS, Orebi's versatile and interactive platform sets a new standard for modern eCommerce, ensuring a responsive and customizable shopping journey for users worldwide.`} />
        </Flex>

        <div className='py-20'>
          <Heading className='pb-5' text='Tools Used' />
          <Flex className='lg:gap-10 gap-7 lg:ml-60 ml-0 items-center justify-center flex-wrap lg:w-2xl w-xs'>
            <Item text='Tailwind'/>
            <Item text='Javascript'/>
            <Item text='React'/>
            <Item text='React Redux'/>
            <Item text='Git'/>
            <Item text='GitHub'/>
            <Item text='Stripe'/>
          </Flex>
        </div>

        <div>
          <Heading className=' pb-5' text='See Live'/>
          <Flex className='gap-x-10 items-center justify-center'>
            <a href="https://ecommerce-project-one-rust.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button btnTxt='Project Live' />
          </a>
          <Link to='/'>
            <Button btnTxt='Go Back' />
          </Link>
          </Flex>
        </div>
      </Container>
    </section>
  )
}

export default Orebi