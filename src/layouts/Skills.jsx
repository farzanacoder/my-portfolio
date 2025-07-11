import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import SkillsBox from '../components/SkillsBox'
import Flex from '../components/Flex'

const Skills = () => {
  return (
    <section id='skills' className='bg-light lg:py-16'>
      <Container>
        <div className='pt-16 pb-8'>
          <Heading text='Skills' />
          <SubHeading text='My technical level' />
        </div>

        <Flex className='lg:pb-20 pb-5 flex-col md:flex-row md:mx-7 md:gap-4 lg:flex-row gap-y-10 lg:mx-0 mx-7  ml-7 lg:ml-0 justify-center'>

          <div className="bg-white rounded-2xl shadow-xl p-6 px-10 lg:w-md w-full md:w-1/2 hover:scale-105 duration-500">
            <h3 className="text-center text-lg lg:text-2xl font-semibold text-black mb-8">
              Frontend developer
            </h3>
            <Flex className="flex-row gap-x-6 md:gap-x-24 lg:gap-x-24 justify-center items-center">
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


          <div className="bg-white rounded-2xl shadow-xl p-8 px-10 w-full lg:w-md md:w-1/2 hover:scale-105 duration-500">
            <h3 className="text-center text-lg lg:text-2xl font-semibold text-black mb-8">
              Tools & Platforms
            </h3>
            <Flex className=" flex-row gap-x-6 lg:gap-x-24 justify-center items-center">
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