import React from 'react'
import About from '../layouts/About'
import Skills from '../layouts/Skills'
import Services from '../layouts/Services'
import Contact from '../layouts/Contact'
import Project from '../layouts/Project'
import Banner from '../layouts/Banner'

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Services />
      <Project />
      <Contact />
    </>
  )
}

export default Home