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
    <section id='services' className='text-center bg-light py-20 pb-40'>
      <Container>
         <Heading text='Services'/>
        <SubHeading className='pb-16 w-2xl mx-auto' text='Our consultants have years of experience on the in success. ​Through the provision of our services. Find the service we provide'/>
         <Flex className='justify-between'>
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