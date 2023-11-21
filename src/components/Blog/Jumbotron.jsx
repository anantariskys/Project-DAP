import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import heroImage from '../../assets/blog/hero_image.png';

const Jumbotron = () => {
  const textShadow = {
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.6)',
  };
  useEffect(() => {
    Aos.init({ duration: 500 });

    
    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div className='w-full h-full  flex flex-col md:flex-row  bg-white   font-Poppins   '>
      <div className='md:w-2/4  flex flex-col items-center justify-center py-10 md:py px-4 md:px-10'>
        <h1 data-aos="fade-right" className='text-xl lg:text-4xl leading-normal  lg:leading-relaxed font-extrabold mb-5' style={textShadow}>
          Perluas Pengetahuan Anda dengan Blog JalanKodeku
        </h1>
        <p data-aos="fade-right" className=' text-lg lg:text-xl '>Membaca blog dari JalanKodeku akan meningkatkan wawasan Anda dan memperkaya pengetahuan Anda.</p>
      </div>
      <div data-aos="fade-left" className='md:w-2/4 md:h-full flex justify-end   '>
        <img src={heroImage} alt='' className='md:object-cover h-44 md:h-auto' />
      </div>
    </div>
  );
};

export default Jumbotron;
