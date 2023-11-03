import React from 'react'
import CNN from '../../assets/home/CNN.svg'
import IDN from '../../assets/home/IDN_times.svg'
import CNBC from '../../assets/home/CNBC.svg'
import Bisnis from '../../assets/home/bisnis.svg'
const Penilaian = () => {
  return (
    <div className='w-full md:flex md:justify-center place-items-center grid grid-cols-2 md:gap-32 md:my-28 px-8 mb-11'>
        <img src={CNN} alt="" className='md:h-auto h-[60%]' />
        <img src={IDN} alt="" className='md:h-auto ' />
        <img src={Bisnis} alt=""className='md:h-auto h-[60%]' />
        <img src={CNBC} alt=""className='md:h-auto h-[80%]' />
    </div>
  )
}

export default Penilaian