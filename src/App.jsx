import React from 'react'
import Home from './layouts/Home'
import About from './layouts/About'
import Navber from './layouts/Navber'

const App = () => {
  return (
    <div>
      <Navber/>
      <Home/>
      <About/>
    </div>
  )
}

export default App