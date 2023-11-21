import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

    
    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div className="z-0 flex justify-center items-center h-screen w-full md:mb-0 mb-36">
      <div className="lg:h-2/4 relative w-4/5 h-4/5 lg:w-5/6 blur-3xl">
        <div className="md:absolute relative w-full h-[50rem] md:h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-2xl md:bottom-0 bottom-10"></div>
      </div>
      <div data-aos="fade-up" className="absolute h-screen w-full items-center flex flex-col justify-center gap-5">
        <div className="sm:shadow-2xl shadow-sm shadow-black border-t-[1px] border-l-[1px] border-[#5B486E] backdrop-blur-3xl p-2 backdrop-brightness-100 rounded-2xl">
          <img className="md:h-10 h-7 relative" src={logo} alt="gagal load" />
        </div>
        <h1 className="text-white md:text-3xl text-lg font-Sarpanch drop-shadow-2xl">JalanKodeku</h1>
        <h1 className="text-white md:text-base text-sm font-Poppins">Your Roadmap to Programming Mastery</h1>
        <div className="border-[1px] border-gray-400 font-Poppins md:text-sm text-xs font-extrabold text-white border-sm border-solid md:px-10 px-4 py-1 md:backdrop-blur-3xl backdrop-blur p-2 rounded-2xl">MULAI BELAJAR</div>
      </div>
    </div>
  );
};

export default Hero;
