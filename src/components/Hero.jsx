import React from "react";
import logo from "../assets/logo.svg";
const Hero = () => {
  return (
    <div className="z-0  flex justify-center items-center h-screen w-full">
      <div className="h-2/4 relative w-5/6 bg-gradient-to-b blur-3xl  from-[#A35ECD] via-[#23016D] to-[#35957E]">
        <div className="absolute w-full h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-2xl top-10 left-10 "></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-2xl top-10 right-10 "></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-2xl bottom-10 left-10 "></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-2xl bottom-10 right-10 "></div>
      </div>
      <div className="absolute h-screen w-full  items-center flex flex-col justify-center gap-5 ">
        
        <div className="shadow-2xl   shadow-black border-t-[1px] border-l-[1px] border-[#5B486E]   backdrop-blur-3xl  p-2 backdrop-brightness-100 rounded-2xl">
          <img className="h-10 relative" src={logo} alt="gagal load" />
        </div>
        <h1 className="text-white text-5xl font-Sarpanch drop-shadow-2xl  ">JalanKodeku</h1>
        <h1 className="text-white text-xl font-Poppins">Your Roadmap to Programming Mastery</h1>
        <div className="border-[1px] border-gray-400 font-Poppins text-lg font-extrabold text-white border-sm border-solid px-10 py-1 backdrop-blur-3xl  p-2 backdrop-brightness-100 rounded-2xl ">MULAI BELAJAR</div>
       
      </div>
    </div>
  );
};

export default Hero;
