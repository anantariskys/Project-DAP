import React from 'react'
import hero from '../../assets/aboutUs/hero.svg'
const Hero = () => {
  return (
    <div className='h-full w-full '>
        <img draggable='false' src={hero} alt=""  className='z-0 w-full object-cover  '/>
        <h1 className='z-10 absolute lg:top-40 md:top-24  sm:top-16 top-14 font-Poppins lg:text-5xl md:text-lg sm:text-base text-xs font-extrabold text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2'>JKtole Team’s</h1>
        
        
    </div>
  )
}

export default Hero