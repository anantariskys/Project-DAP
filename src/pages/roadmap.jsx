import React from "react";
import dotline1 from "../assets/roadmapDetail/dotline1.svg";
import dotline2 from "../assets/roadmapDetail/dotline2.svg";
import dotline3 from "../assets/roadmapDetail/dotline3.svg";
import dotline4 from "../assets/roadmapDetail/dotline4.svg";
const roadmap = () => {
  return (
    <div className=" bg-purple-500 mx-auto container   text-white font-Poppins     pb-52">
      <div className="w-[90%]  mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center font-semibold ">Front End Developer Path</h1>
        <p className="text-sm md:text-xl mx-auto text-center">Melangkah Menjadi Frontend Terdepan</p>
        <div className="relative w-[2px] mx-auto lg:w-1 h-8 md:h-16 lg:h-32 rounded-md bg-white"></div>
        <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[12%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">INTERNET</div>
      </div>
      <div className="w-[90%] mx-auto relative h-[50vh] lg:h-screen bg-yellow-400">
        <div className="h-[2px] mx-auto lg:h-1 w-[30%] absolute left-[14%]  top-[-2%]  rounded-md bg-white"></div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[20%] rounded-md top-[-2%] left-[14%] bg-white"></div>

        <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px absolute left-[8.3%] top-[18.5%]  w-[12%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">
          HTML
        </div>
          <img src={dotline2} className="w-[8%] left-[20%] top-[5.3%] absolute h-auto" alt="" />

        <div className="flex flex-col absolute w-[90%] left-[33%] top-[-1.5%] lg:top-[-4%]  gap-y-[2px]  lg:gap-y-1">
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">Bagaimana internet bekerja</div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">Apa itu HTTP?</div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">Apa itu Domain Name?</div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">Apa itu hosting?</div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">DNS dan bagaimana DNS bekerja</div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">Bagaimana browsers bekerja?</div>
        </div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[20%] rounded-md top-[23.5%] left-[14%] bg-white"></div>

        <div className="w-1/4 flex absolute left-[51%] top-[-1%] lg:top-[-2%] ">
          <img src={dotline1} className="w-[65%] h-auto" alt="" />
        </div>
        <div className="flex flex-col absolute w-[90%] left-[33%] top-[-1.5%] lg:top-[-4%]  gap-y-[2px]  lg:gap-y-1">
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">
            Bagaimana internet bekerja
          </div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">Apa itu HTTP?</div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">
            Apa itu Domain Name?
          </div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">Apa itu hosting?</div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">
            DNS dan bagaimana DNS bekerja
          </div>
          <div className="bg-black bg-opacity-20 border-2 mx-auto  border-white border-opacity-20 py-px   w-[29%] flex items-center justify-center text-[4px] md:text-[5%] lg:text-[100%] text-center  px-2 rounded-xl">
            Bagaimana browsers bekerja?
          </div>
        </div>
        <h1>test</h1>
      </div>
    </div>
  );
};

export default roadmap;
