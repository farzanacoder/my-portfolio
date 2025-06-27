import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'

const Project = () => {
  return (
    <section id='project'>
      <Container>
        <Heading text='Project'/>
        <SubHeading className='' text='Most recent work'/>
        <Flex>
          <div className='w-6/12 bg-green-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non nostrum veniam blanditiis dolor esse fuga numquam officiis ipsam architecto.</div>
          <div className='w-6/12 bg-purple-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sed dolores quidem debitis veritatis beatae quae quas quis iure ipsa quo est? Ab porro voluptates reprehenderit quas, neque minima aperiam.</div>
        </Flex>
      </Container>
    </section>
  )
}

export default Project