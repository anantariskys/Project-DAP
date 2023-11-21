import React from "react";
import dotline1 from "../assets/roadmapDetail/dotline1.svg";
import dotline2 from "../assets/roadmapDetail/dotline2.svg";
import dotline3 from "../assets/roadmapDetail/dotline3.svg";
import dotline4 from "../assets/roadmapDetail/dotline4.svg";
const roadmap = () => {
  return (
    <div className=" bg-black h-full  w-full text-white font-Poppins  items-center flex flex-col  gap-5 pb-52">
      <h1 className="text-5xl font-semibold ">Front End Developer Path</h1>
      <p className="text-xl">Melangkah Menjadi Frontend Terdepan</p>
      <div className="relative  -bottom-6 w-1 h-32 rounded-md bg-white"></div>
      <div className="flex  w-full items-start justify-center">
        <div className="w-[45%] flex items-center justify-center  h-10">
          <div className="w-96 relative left-[7.5rem] h-1 rounded-md bg-white"></div>

          <div className="relative  w-1 h-40 rounded-md -left-[16.6rem] top-[4.9rem] bg-white"></div>
        </div>
        <div className="w-[10%] flex justify-center h-10 items-center ">
          <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-28 px-5 rounded-xl">INTERNET</div>
        </div>
        <div className="w-[45%] flex justify-center ">
          <img src={dotline1} draggable="false" className="relative w-56 -left-[7.9rem]  " alt="" />
          <div className="flex flex-col gap-1  relative -left-[10.4rem]">
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Bagaimana internet bekerja</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Apa itu HTTP?</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Apa itu Domain Name?</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Apa itu hosting?</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">DNS dan bagaimana DNS bekerja?</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Bagaimana browser bnekerja?</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-start justify-center  ">
        <div className="relative left-[10.9rem] -top-[5rem]  flex">
          <div className=" flex justify-center h-10 items-center ">
            <div className="bg-black bg-opacity-20 border-2 border-white text-center border-opacity-20 py-1 w-28 px-5 rounded-xl">HTML</div>
            <div className="relative top-[6.1rem] -left-[3.72rem] w-1 h-40 rounded-md bg-white"></div>
          </div>
          <img src={dotline2} className="relative -top-[3.7rem] h-40" alt="" />
          <div className=" relative -top-20  flex flex-col gap-1 ">
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-5 rounded-xl">Belajar basic</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-5 rounded-xl">Menulis Semantik HTML</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-5 rounded-xl">Formulir dan validasi</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-5 rounded-xl">Aksesbilitas</div>
            <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-5 rounded-xl">Dasar-dasar SEO</div>
          </div>
        </div>

        <div className="flex  w-full items-start justify-center relative bottom-20">
          <div className="w-1/4">
            <div className=" flex justify-center h-10 items-center relative left-[8.1rem]">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-28 px-5 rounded-xl text-center">CSS</div>
              <img src={dotline3} alt="" className="relative h-24 top-10 -left-4" />
            </div>
            <div className="relative  w-1 h-40 rounded-md left-[14.2rem]  bg-white"></div>
            <div className="relative  w-[36rem]  h-1 -top-1 rounded-md left-[14.2rem]  bg-white"></div>
          </div>
          <div className="w-1/4">
            <div className=" relative w-3/4 top-[0.20rem] left-14 flex flex-col gap-1 ">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Belajar basic</div>
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Membuat Layout</div>
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Desain Responsif</div>
            </div>
          </div>
          <div className="w-1/4">
            <div className=" relative w-3/4 top-[0.20rem] left-14 flex flex-col gap-1 ">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Belajar dasar-dasar</div>
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Belajar Manipulasi DOM</div>
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 text-center  px-2 rounded-xl">Fetch API</div>

              <div className=" flex justify-center h-10 items-center relative top-14">
                <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-28 rounded-xl text-center">Javascript</div>
              </div>
              <div className=" flex">
                <div className="w-36 relative left-[11.5rem] top-7 h-1 rounded-md bg-white"></div>
                <div className="w-1 relative left-[11.3rem] -top-[4.4rem] h-[6.4rem] rounded-md bg-white"></div>
                <div className="w-1 relative left-[11.3rem] -top-[4.4rem] h-96 rounded-md bg-white ml-10"></div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className=" relative w-3/4 -top-10  flex flex-col gap-1 justify-center items-end  h-full ">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-28 px-5 rounded-xl text-center mb-5">GIT</div>
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-56 text-center  px-2 rounded-xl">Version Control Systems</div>
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-56 text-center  px-2 rounded-xl">VCS Hosting</div>
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-28 px-5 rounded-xl text-center mt-5">GitHub</div>
            </div>
          </div>
        </div>

        <div className="flex  w-full items-start justify-center relative bottom-[6.7rem]">
          <div className="w-1/4">
            <div className="w-32 relative right-24 -top-5 h-1 rounded-md"></div>
            <div className=" relative w-3/4 -top-10  flex flex-col gap-1 justify-center items-end  h-full ">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-56 text-center  px-2 rounded-xl">Package Managers</div>
            </div>
            <div className="w-1 left-36 -top-10 relative  h-36 rounded-md bg-white"></div>
            <div className=" relative w-3/4 -top-10  flex flex-col gap-1 justify-center items-end  h-full ">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-56 text-center  px-2 rounded-xl">CSS Preprocessors</div>
            </div>
            <div className="w-1 left-36 -top-10 relative  h-36 rounded-md bg-white"></div>
          </div>
          <div className="w-1/4">
            <div className="w-28 relative right-20 -top-5 h-1 rounded-md bg-white"></div>
            
            <div className=" relative w-3/4 right-3 -top-10  flex flex-col gap-1 justify-center items-end  h-full ">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-52 text-center  px-2 rounded-xl">Menulis CSS</div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="w-32 relative right-24 -top-5 h-1 rounded-md bg-white"></div>
            <div className=" relative w-3/4 right-3 -top-10  flex flex-col gap-1 justify-center items-end  h-full ">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-52 text-center  px-2 rounded-xl">Pilihlah Framework</div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="w-32 relative right-24 -top-5 h-1 rounded-md bg-white"></div>
            <div className=" relative w-3/4 -top-10  flex flex-col gap-1 justify-center items-end  h-full ">
              <div className="bg-black bg-opacity-20 border-2 border-white border-opacity-20 py-1 w-56 text-center  px-2 rounded-xl">Package Managers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default roadmap;
