import React from 'react'
import Jumbotron from '../components/Blog/Jumbotron'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog/Blog.jsx'
import Footer from '../components/Footer.jsx'

const blog = () => {
  return (
    <div className='bg-black w-full h-auto'>
      <div className='h-[60px] md:h-[80px] w-full'>
        <Navbar></Navbar>
      </div>
      <Jumbotron></Jumbotron>
      <Blog></Blog>
      <Footer></Footer>


    </div>
  )
}

export default blog