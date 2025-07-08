import React from 'react'
import About from '../layouts/About'
import Skills from '../layouts/Skills'
import Services from '../layouts/Services'
import Contact from '../layouts/Contact'
import Project from '../layouts/Project'
import Banner from '../layouts/Banner'
import Chaticon from '../components/Chaticon'
import ProjectCounter from '../layouts/ProjectCounter'

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Project />
      <ProjectCounter/> 
      <Services />
      <Contact />
      <Chaticon/>
    </>
  )
}

export default Home