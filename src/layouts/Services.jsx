import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import ServiceCard from '../components/ServiceCard'
import Ecommerce from '../assets/ecommerce.jpg'
import Social from '../assets/social media.jpg'
import Corporate from '../assets/corporate.jpg'
import Personal from '../assets/personal.jpg'

const Services = () => {
  return (
    <section id='services' className='text-center bg-light py-20 lg:py-32'>
      <Container>
         <Heading text='Services'/>
        <SubHeading className='' text='Our consultants have years of experience on the in success. ​Through the provision of our services. Find the service we provide'/>
         <Flex className='lg:justify-between lg:flex-row flex-col gap-y-20 mx-28 lg:gap-y-0 lg:mx-0'>
            <ServiceCard title='E-Commerce' text='Development' image={Ecommerce}/>
            <ServiceCard title='Social Media' text='Development' image={Social}/>
            <ServiceCard title='Corporate' text='Development' image={Corporate}/>
            <ServiceCard title='Personal' text='Development' image={Personal}/>
          </Flex>
       
      </Container>
    </section>
  )
}

export default Services