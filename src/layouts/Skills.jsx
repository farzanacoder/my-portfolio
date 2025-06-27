import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const Skills = () => {
  return (
    <section id='skills' className='bg-light'>
      <Container>
        <div className='py-20'>
          <Heading text='Skills' />
          <SubHeading className='' text='My technical level' />
        </div>

       <div className='flex gap-x-10 ml-40'>
         <Flex className='pb-20'>
          <div className=' bg-white rounded-xl'>
            <div className="bg-white rounded-2xl shadow-xl p-8 px-16">
              <h3 className="text-center text-2xl font-semibold text-black mb-8">
                Frontend developer
              </h3>

              <div className="grid grid-cols-2 gap-y-6 gap-x-6">
                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      HTML
                    </p>
                    <p className="text-sm text-gray-500">Experienced</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      CSS
                    </p>
                    <p className="text-sm text-gray-500">Experienced</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      Bootstrap
                    </p>
                    <p className="text-sm text-gray-500">Experienced</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      Tailwind
                    </p>
                    <p className="text-sm text-gray-500">Experienced</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      Javascript
                    </p>
                    <p className="text-sm text-gray-500">Basic</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      React
                    </p>
                    <p className="text-sm text-gray-500">Intermediate</p>
                  </div>
                </Flex>
              </div>

            </div>
          </div>
        </Flex>


        <Flex className='pb-20'>
          <div className=' bg-white rounded-xl '>
            <div className="bg-white rounded-2xl shadow-xl p-8 px-16">
              <h3 className="text-center text-2xl font-semibold text-black mb-8">
                Frontend developer
              </h3>

              <div className="grid grid-cols-2 gap-y-6 gap-x-6">
                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      HTML
                    </p>
                    <p className="text-sm text-gray-500">Experienced</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      CSS
                    </p>
                    <p className="text-sm text-gray-500">Experienced</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      Bootstrap
                    </p>
                    <p className="text-sm text-gray-500">Experienced</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      Tailwind
                    </p>
                    <p className="text-sm text-gray-500">Experienced</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      Javascript
                    </p>
                    <p className="text-sm text-gray-500">Basic</p>
                  </div>
                </Flex>

                <Flex>
                  <RiVerifiedBadgeFill className='mr-5 mt-1' />
                  <div>
                    <p className="font-bold text-black flex items-center gap-2">
                      React
                    </p>
                    <p className="text-sm text-gray-500">Intermediate</p>
                  </div>
                </Flex>
              </div>

            </div>
          </div>
        </Flex>
       </div>

      </Container>
    </section>
  )
}

export default Skills