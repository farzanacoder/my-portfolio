import React from 'react'
import Home from './layouts/Home'
import About from './layouts/About'
import Navber from './layouts/Navber'
import Skills from './layouts/Skills'
import Services from './layouts/Services'
import Contact from './layouts/Contact'
import Project from './layouts/Project'

const App = () => {
  return (
    <div>
      <Navber/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App