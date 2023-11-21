import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import Slider from '../components/Home/Slider'
import InfiniteSlider from '../components/Home/InfiniteSlider'
import Footer from '../components/Footer'
import Introduction from '../components/Home/Introduction'
import Penilaian from '../components/Home/Penilaian'
import { useEffect } from 'react'



const home = () => {
  useEffect(() => {
    scrollTo(0,0)
      
    return () => {
     
    }
  },)
  
  return (
    <div  className="w-full  bg-black  ">
      <Navbar ></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      <Introduction></Introduction>
      <InfiniteSlider></InfiniteSlider>
      <Penilaian></Penilaian>
      <Footer></Footer>
      
     
      

    
    </div>
  )
}

export default home