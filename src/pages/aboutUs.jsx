import React from 'react'
import Hero from '../components/AboutUs/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutDesc from '../components/AboutUs/AboutDesc'
import Team from '../components/AboutUs/Team'
import { useEffect } from 'react'

const aboutUs = () => {
  useEffect(() => {
    scrollTo(0,0)
  
    return () => {
      
    }
  }, )
  
  return (
    <div className='w-full  bg-black'>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutDesc></AboutDesc>
      <Team></Team>
      <Footer></Footer>
    </div>
  )
}

export default aboutUs