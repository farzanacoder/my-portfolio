import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import SkillsBox from '../components/SkillsBox'
import Flex from '../components/Flex'

const Skills = () => {
  return (
    <section id='skills' className='bg-light'>
      <Container>
        <div className='py-20'>
          <Heading className='lg:text-4xl text-[23px]' text='Skills' />
          <SubHeading className='!text-sm lg:!text-xl' text='My technical level' />
        </div>

        <Flex className='pb-20 flex-col md:flex-row md:mx-7 md:gap-4 lg:flex-row gap-y-10 lg:mx-0 mx-7  ml-7 lg:ml-0 justify-evenly'>
              <div className="bg-white rounded-2xl shadow-xl p-8 px-10 w-full md:w-1/2">
                <h3 className="text-center text-xl lg:text-2xl font-semibold text-black mb-8">
                  Frontend developer
                </h3>
                <Flex className=" flex-wrap flex-col md:flex-row md:gap-x-24  lg:flex-row lg:gap-x-24 items-center">
                <div>
                  <SkillsBox text='HTML' P_text='Experienced' />
                <SkillsBox text='Bootstrap' P_text='Experienced' />
                <SkillsBox text='Javascript' P_text='Intermediate' />
                </div>
                <div>
                  <SkillsBox text='CSS' P_text='Experienced' />
                <SkillsBox text='Tailwind' P_text='Experienced' />
                <SkillsBox text='React' P_text='Experienced' />
                </div>
                </Flex>
              </div>


              <div className="bg-white rounded-2xl shadow-xl p-8 px-10 w-full md:w-1/2">
                <h3 className="text-center text-xl lg:text-2xl font-semibold text-black mb-8">
                  Tools & Platforms
                </h3>
                <Flex className=" md:flex-row md:gap-x-24 flex-wrap flex-col lg:flex-row lg:gap-x-24 items-center">
                <div>
                  <SkillsBox text='Git' P_text='Intermediate' />
                <SkillsBox text='VS Code' P_text='Experienced' />
                <SkillsBox text='NextJs' P_text='Basic' />
                </div>

                <div>
                  <SkillsBox text='GitHub' P_text='Intermediate' />
                <SkillsBox text='Figma' P_text='Experienced' />
                <SkillsBox text='Firebase' P_text='Basic' />
                </div>
                
                </Flex>
              </div>

        </Flex>

      </Container>
    </section>
  )
}

export default Skills