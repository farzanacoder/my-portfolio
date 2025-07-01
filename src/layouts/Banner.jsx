import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import SubHeading from '../components/SubHeading'
import { FiGithub } from 'react-icons/fi'
import { PiLinkedinLogoBold } from 'react-icons/pi'
import { CiFacebook } from 'react-icons/ci'
import { ImWhatsapp } from 'react-icons/im'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      {/* Hero Section here*/}
      <section id='Banner' className="flex flex-col items-center py-10 pt-40 bg-light">
        <Container>
          <Flex className='gap-x-5 items-center'>
            <div className='flex flex-col gap-y-5 absolute left-1 lg:left-24 items-center'>
              <a href="https://github.com/farzanacoder"><FiGithub className='text-xl hover:text-light duration-500' /></a>
              <a href="https://www.linkedin.com/in/farzana-islam-b5a478339/"><PiLinkedinLogoBold className='text-xl hover:text-light duration-500' /></a>
              <a href="https://www.facebook.com/farzana.coder"><CiFacebook className='text-2xl hover:text-light duration-500' /></a>
              <a href="https://wa.me/8801869214651"><ImWhatsapp className='text-xl hover:text-light duration-500' /></a>
            </div>

            <div className="my-10 text-center">
              <h1 className="lg:text-4xl text-[23px] font-bold mb-5">          Hi, I'm Farjana
                Akter... <span className="inline-block">👋</span></h1>
              <SubHeading className='!w-full' text='Creative React Front-End Developer' />
              <p className="text-paralight !w-full lg:!w-xl mb-8 px-10">
                I'm a passionate React frontend developer based in Dhaka, blending creativity with clean code to build beautiful and responsive user interfaces. I’m dedicated to crafting pixel-perfect designs that deliver smooth user experiences.
              </p>
              <Button btnTxt='Say Hello' />
            </div>
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Banner