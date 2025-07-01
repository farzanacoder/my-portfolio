import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout