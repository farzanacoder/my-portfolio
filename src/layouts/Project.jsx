import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import Orebi from '../assets/orebi.PNG'
import Adventure from '../assets/adventure.jpg'
import Animation from '../assets/animation.jpg'
import Btnclick from '../assets/dom.jpg'
import Cuda from '../assets/cuda.jpg'
import Fresh from '../assets/fresh.jpg'
import GogleLight from '../assets/gogleLight.jpg'
import GoogleDrk from '../assets/googleDrk.jpg'
import Nexcent from '../assets/nexcent.jpg'
import Omah from '../assets/omah.jpg'
import Petroil from '../assets/petroil.jpg'
import Restuarant from '../assets/restuarant.jpg'
import Ui from '../assets/ui.jpg'
import Startup from '../assets/sttartup.jpg'
import Innovate from '../assets/innovate.jpg'
import Lunchipiration from '../assets/inspiration.PNG'
import { IoIosArrowRoundForward } from 'react-icons/io'
import ProjectCard from '../components/ProjectCard'

import "slick-carousel/slick/slick.css";
import Slider from 'react-slick'
import PrevSlide from '../components/PrevSlide'
import NextSlide from '../components/NextSlide'


const Project = () => {
  let [itemlist, setItemlist] = useState(3)
  let list = ['All', 'Html', 'JavaScript', 'React']

  let handleItem = (index) => {
    setItemlist(index)
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevSlide/>,
    nextArrow: <NextSlide/>,

    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='project' className='bg-light pb-20'>
      <Container>
        <Heading text='Project' />
        <SubHeading className='' text='Most recent work' />

        <Flex className='py-10 my-20 flex-col lg:flex-row lg:justify-evenly'>
          <Link to='/orebi'>
            <div className='w-xl mx-auto h-auto bg-white p-4 rounded-4xl shadow-2xl'>
              <Image className='w-full rounded-4xl' src={Orebi} />
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
            <h3 className=" w:full px-10 md:px-0 md:w-[350px] lg:w-[421px] text-drk text-xl md:mr-10 lg:mr-0  md:text-[28px] lg:text-[45px] font-medium font-poppins pb-4 md:pb-8 text-center pt-2 sm:px-20 lg:pt-12 md:leading-[42px] lg:leading-[60px]">Showcase your skills with a personalized career portfolio.</h3>
            <div className='flex items-center justify-center group/btn'>
              <Link to='/lunchipiration'>
                <h5 className='relative'>Case Study <span className='h-[35px] w-[60px] group-hover/btn:w-[120px] duration-300 bg-[#97959340] absolute -top-1 -left-2'></span>
                  <IoIosArrowRoundForward className='text-drk absolute top-0 left-24 font-bold text-2xl' />
                </h5>
              </Link>
            </div>
          </div>
        </Flex>



        {/* Event to Event Project */}
        <section className='pt-20'>
          <Heading text='Event to Event Project' />
          <Flex className='justify-center items-center gap-x-5 py-10'>
            {
              list.map((item, index) => (
                <div key={index} onClick={() => handleItem(index)}>
                  <h1 className={`${index === itemlist ? 'bg-drk text-white' : ''} text-2xl font-medium py-2 px-3 duration-500 rounded-lg cursor-pointer`}>{item}</h1>
                </div>
              ))
            }
          </Flex>

          {
            itemlist === 0 ? (

              <Slider {...settings}>
                <ProjectCard title='Animation' category='Html' image={Animation} />
                <ProjectCard title='Foodie' category='Html' image={Restuarant} />
                <ProjectCard title='Omah' category='Html' image={Omah} />
                <ProjectCard title='Nextcent' category='Html' image={Nexcent} />
                <ProjectCard title='Fresh' category='Html' image={Fresh} />
                <ProjectCard title='Startup' category='Html' image={Startup} />
                <ProjectCard title='UI' category='Html' image={Ui} />
                <ProjectCard title='Petroil' category='Html' image={Petroil} />
                <ProjectCard title='GoogleDrk' category='Html' image={GoogleDrk} />
                <ProjectCard title='GogleLight' category='Html' image={GogleLight} />
                <ProjectCard title='Cuda' category='Html' image={Cuda} />
                <ProjectCard title='Adventure' category='Html' image={Adventure} />

                <ProjectCard title='Flower' category='Javascript' image={Btnclick} />

                <ProjectCard title='Orebi' category='React' image={Orebi} />
                <ProjectCard title='Lunchpiration' category='React' image={Lunchipiration} />
                <ProjectCard title='Innovate' category='React' image={Innovate} />
              </Slider>
            )
              :
              itemlist === 1 ? (
                <Slider {...settings}>

                  <ProjectCard title='Animation' category='Html' image={Animation} />
                  <ProjectCard title='Foodie' category='Html' image={Restuarant} />
                  <ProjectCard title='Omah' category='Html' image={Omah} />
                  <ProjectCard title='Nextcent' category='Html' image={Nexcent} />
                  <ProjectCard title='Fresh' category='Html' image={Fresh} />
                  <ProjectCard title='Startup' category='Html' image={Startup} />
                  <ProjectCard title='UI' category='Html' image={Ui} />
                  <ProjectCard title='Petroil' category='Html' image={Petroil} />
                  <ProjectCard title='GoogleDrk' category='Html' image={GoogleDrk} />
                  <ProjectCard title='GogleLight' category='Html' image={GogleLight} />
                  <ProjectCard title='Cuda' category='Html' image={Cuda} />
                  <ProjectCard title='Adventure' category='Html' image={Adventure} />
                </Slider>

              )
                :
                itemlist == 2 ? (
                  <Slider {...settings}>
                    <ProjectCard title='Flower' category='Javascript' image={Btnclick} />
                  </Slider>

                )
                  :
                  (
                    <Slider {...settings}>
                      <ProjectCard title='Orebi' category='React' image={Orebi} />
                      <ProjectCard title='Lunchpiration' category='React' image={Lunchipiration} />
                      <ProjectCard title='Innovate' category='React' image={Innovate} />
                    </Slider>

                  )

          }

        </section>


      </Container>
    </section>
  )
}

export default Project