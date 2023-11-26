import React, { useRef, useEffect, useState } from "react";
import dotline1 from "../../assets/roadmapDetail/dotline1.svg";
import dotline2 from "../../assets/roadmapDetail/dotline2.svg";
import dotline3 from "../../assets/roadmapDetail/dotline3.svg";
import dotline4 from "../../assets/roadmapDetail/dotline4.svg";
import dotline5 from "../../assets/roadmapDetail/dotline5.svg";
import dotline6 from "../../assets/roadmapDetail/dotline6.svg";
import dotline7 from "../../assets/roadmapDetail/dotline7.svg";
import dotline8 from "../../assets/roadmapDetail/dotline8.svg";

import { Link } from "react-router-dom";

const Roadmap = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" bg-black mx-auto  w-full   text-white font-Poppins pb-56 md:pb-96 md:pt-44 pt-16  ">
      {/* MODAL */}
      {showModal ? (
        <div onClick={() => setShowModal(false)} className="fixed inset-0 z-50 flex items-center md:justify-end justify-center h-screen w-screen bg-black bg-opacity-80">
          <div className=" font-Poppins  backdrop-blur-lg w-3/4 md:w-2/5 h-screen rounded-lg p-8 ">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4">HTML</h2>
              <p className="md:text-base text-sm mb-4">
                HTML merupakan singkatan dari HyperText Markup Language. HTML digunakan pada frontend dan memberikan struktur pada halaman web, dimana kita dapat memberikan style menggunakan CSS dan membuatnya lebih interaktif menggunakan
                JavaScript.
              </p>
              <p className="md:text-base text-sm">Kunjungi link di bawah untuk belajar lebih banyak :</p>
              <ul className="list-disc">
                <a   target="_self" href="https://www.petanikode.com/tutorial/html/">
                  <li className="underline md:text-base text-sm">petanikode : Tutorial HTML</li>
                </a>
                <a  target="_self" href="https://www.w3schools.com/html/">
                  <li className="underline md:text-base text-sm">W3School : HTML Tutorial</li>
                </a>
                <a  target="_self" href="https://skilvul.com/courses/html-dasar">
                  <li className="underline md:text-base text-sm">Skilvul : HTML Dasar</li>
                </a>
                <a  target="_self" href="https://htmlreference.io/">
                  <li className="underline md:text-base text-sm">htmlreference.io : HTML elements</li>
                </a>
                <a  target="_self" href="https://www.codecademy.com/learn/learn-html">
                  <li className="underline md:text-base text-sm">Codecademy - Learn HTML</li>
                </a>
                <a  target="_self" href="https://www.niagahoster.co.id/blog/belajar-html/">
                  <li className="underline md:text-base text-sm">niagahoster : Belajar HTML</li>
                </a>
                <a  target="_self" href="https://www.dewaweb.com/blog/panduan-lengkap-untuk-belajar-html-bagi-pemula/">
                  <li className="underline md:text-base text-sm">dewaweb : belajar HTML bagi pemula</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
      {/* MODAL END */}

      <div className="  h-[200vw] absolute w-full  blur-3xl z-0 ">
        <div className="relative w-[90%] h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-3xl mx-auto "></div>
      </div>
      <div className="w-[90%] z-1 relative mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center font-semibold ">Front End Developer Path</h1>
        <p className="text-sm md:text-xl mx-auto text-center">Melangkah Menjadi Frontend Terdepan</p>
        <div className="relative w-[2px] mx-auto lg:w-1 h-8 md:h-16 lg:h-32 rounded-md bg-white"></div>
        <div
          onClick={() => setShowModal(true)}
          className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-px   w-[12%] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-1 rounded-xl"
        >
          INTERNET
        </div>
      </div>
      <div className={`w-full mx-auto relative ]`} style={{ height: `${screenWidth / 2}px` }}>
        <div className="h-[2px] mx-auto lg:h-1 w-[30%] absolute left-[14%]  top-[-2%]  rounded-md bg-white"></div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[20%] rounded-md top-[-2%] left-[14%] bg-white"></div>

        <div
          onClick={() => setShowModal(true)}
          className="bg-black bg-opacity-20 border-[0.2vw] z-10 mx-auto  border-white border-opacity-20 py-px absolute left-[8.3%] top-[18.5%]  w-[12%] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-2 rounded-xl"
        >
          HTML
        </div>

        <div
          onClick={() => setShowModal(true)}
          className="bg-black bg-opacity-20 border-[0.2vw] z-10 mx-auto  border-white border-opacity-20 py-px absolute left-[8.3%] top-[22vw]  w-[12%] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-2 rounded-xl"
        >
          CSS
        </div>
        <img src={dotline2} className="w-[6vw] left-[20vw] top-[4vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute w-[90%] left-[-5vw]  top-[3.2vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Belajar basic
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Menulis Semantik HTML
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Formulir dan Validasi
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Aksesbilitas
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Dasar-dasar SEO
          </div>
        </div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[20%] rounded-md top-[23.5%] left-[14%] bg-white"></div>
        <img src={dotline3} className="w-[7vw] left-[19vw] top-[22.5vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute w-[90%] left-[-9.5vw]  top-[22vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[20vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Belajar basic
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[20vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Menulis Semantik HTML
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[20vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Formulir dan Validasi
          </div>
        </div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[24%] rounded-md top-[48.5%] left-[14%] bg-white"></div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[40%] rounded-md top-[72%] left-[14%] bg-white"></div>
        <div
          onClick={() => setShowModal(true)}
          className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-px absolute left-[54vw] top-[35.3vw]  w-[12%] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-2 rounded-xl"
        >
          JavaScript
        </div>
        <img src={dotline5} className="w-[0.1vw] left-[60vw] top-[33.5vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute left-[50vw]  top-[25vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[20vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Belajar Dasar-dasar
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[20vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Belajar Manipulasi DOM
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[20vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Fetch API
          </div>
        </div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[11.7%] rounded-md top-[72%] left-[66.5vw] bg-white"></div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[9%] rounded-md top-[63.6%] left-[78%] bg-white"></div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[50%] rounded-md top-[63.6%] left-[80%] bg-white"></div>
        <div className="flex flex-col absolute left-[83vw]  bottom-[26vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[10vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            GIT
          </div>
        </div>
        <img src={dotline5} className="w-[0.1vw] left-[88vw] bottom-[24.3vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute left-[73vw]  top-[26vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[20vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Version Control Systems
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[20vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            VCS Hosting
          </div>
        </div>
        <div className="flex flex-col absolute left-[83vw]  bottom-[14vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[10vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Github
          </div>
        </div>
        <img src={dotline5} className="w-[0.1vw] left-[88vw] bottom-[17vw] absolute h-auto" alt="" />

        <div className="w-1/4 flex absolute left-[51%] top-[-2%] ">
          <img src={dotline1} className="w-[65%] h-auto" alt="" />
        </div>
        <div className="flex flex-col  absolute  left-[65vw]  top-[-2vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Bagaimana internet bekerja
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Apa itu HTTP?
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Apa itu Domain Name?
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Apa itu hosting?
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            DNS dan bagaimana DNS bekerja
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[28vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Bagaimana browsers bekerja?
          </div>
        </div>
      </div>
      <div className={`w-full mx-auto relative `} style={{ height: `${screenWidth / 2}px` }}>
        <div className="flex flex-col absolute left-[83vw]  top-[5.5vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[10vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            npm
          </div>
        </div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[20%] rounded-md top-0 left-[80%] bg-white"></div>
        <img src={dotline5} className="w-[0.1vw] left-[88vw] top-[8.3vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute left-[77.5vw]  top-[9.8vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[15vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Package Manager
          </div>
        </div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[8%] rounded-md top-[11vw] right-[22.5vw] bg-white"></div>
        <div className="flex flex-col absolute right-[30.5vw]  top-[9.8vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[15vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Pilihlah Framework
          </div>
        </div>
        <img src={dotline5} className="w-[0.1vw] right-[40.5vw] top-[8.3vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute right-[35.5vw]  top-[3vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[10vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Vue.js
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[10vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            React
          </div>
        </div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[8%] rounded-md top-[11vw] right-[45.5vw] bg-white"></div>
        <div className="flex flex-col absolute left-[31.3vw]  top-[9.8vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[15vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Menulis CSS
          </div>
        </div>
        <img src={dotline5} className="w-[0.1vw] right-[61.5vw] top-[12.5vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute right-[56.5vw]  top-[14vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[10vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Tailwind CSS
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[10vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Radix UI
          </div>
        </div>
        <img src={dotline5} className="w-[0.1vw] right-[61.5vw] top-[19.5vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute right-[56.5vw]  top-[21vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[10vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Shadcn UI
          </div>
        </div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[8%] rounded-md top-[11vw] left-[23vw] bg-white"></div>
        <div className="flex flex-col absolute left-[8vw]  top-[9.8vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[15vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            CSS Architecture
          </div>
        </div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[3%] rounded-md top-[11vw] left-[5vw] bg-white"></div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[20%] rounded-md top-[11vw] left-[5vw] bg-white"></div>
        <div className="flex flex-col absolute left-[2vw]  top-[21vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[13vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            CSS Preprocessor
          </div>
        </div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[13.5%] rounded-md top-[23.5vw] left-[5vw] bg-white"></div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[35%] rounded-md top-[30vw] left-[5vw] bg-white"></div>
        <div className="flex flex-col absolute left-[40vw]  top-[29vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[15vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Build Tools
          </div>
        </div>
        <img src={dotline6} className="w-[6vw] left-[55vw] top-[23vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute left-[60.5vw]  top-[23vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Module Bundlers
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Task Runners
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Linters adn Formatters
          </div>
        </div>
        <img src={dotline7} className="w-[4vw] right-[24vw] top-[20.5vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute right-[12vw]  top-[20vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Vite
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            esbuild
          </div>
        </div>
        <div className="flex flex-col absolute right-[12vw]  top-[25.7vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            npm scripts
          </div>
        </div>
        <img src={dotline8} className="w-[4vw] right-[24vw] top-[27vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute left-[60.5vw]  bottom-[10vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Apps Testing
          </div>
        </div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[15%] rounded-md bottom-[11vw] left-[47.5vw] bg-white"></div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[13%] rounded-md bottom-[11vw] right-[39.5vw] bg-white"></div>
        <img src={dotline8} className="w-[4vw] right-[24vw] bottom-[11vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute right-[12vw]  bottom-[10vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Vitest
          </div>
        </div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[21%] rounded-md bottom-0 right-[33vw] bg-white"></div>
        <img src={dotline5} className="w-[0.1vw] right-[18vw] bottom-[8vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute right-[12vw]  bottom-[5vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Playwright
          </div>
        </div>
      </div>
      <div className={`w-full mx-auto relative  `} style={{ height: `${screenWidth / 2}px` }}>
        <div className="flex flex-col absolute right-[25vw]  top-0  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[16vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Server Side Rendering (SSR)
          </div>
        </div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[8%] rounded-md top-[1vw] right-[41vw] bg-white"></div>
        <div className="flex flex-col absolute right-[49vw]  top-0  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[16vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Static Site Generator
          </div>
        </div>
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[8%] rounded-md top-[1vw] right-[65vw] bg-white"></div>
        <div className="flex flex-col absolute right-[73vw]  top-0  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[16vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Mobile Apps
          </div>
        </div>
        <img src={dotline5} className="w-[0.1vw] right-[35vw] top-[3vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute right-[29vw]  top-[5vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Apollo
          </div>
        </div>

        <img src={dotline5} className="w-[0.1vw] right-[52vw] top-[3vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute right-[46vw]  top-[5vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Astro
          </div>
        </div>

        <img src={dotline5} className="w-[0.1vw] left-[22vw] top-[3vw] absolute h-auto" alt="" />
        <div className="flex flex-col absolute left-[16vw]  top-[5vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            React Native
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Flutter
          </div>
        </div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[40%] rounded-md top-[2.5vw] left-[12vw] bg-white"></div>
        <div className="flex flex-col absolute right-[73vw]  top-[22.5vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[16vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Aplikasi Desktop
          </div>
        </div>
        <div className="flex flex-col absolute right-[77vw]  top-[26.5vw]  gap-y-[1px]  lg:gap-y-1">
          <div
            onClick={() => setShowModal(true)}
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Electron
          </div>
        </div>
        <img src={dotline5} className="w-[0.1vw] right-[83vw] top-[25vw] absolute h-auto" alt="" />
        <div className="absolute h-[2px] mx-auto lg:h-1 w-[23%] rounded-md top-[23.5vw] left-[27vw] bg-white"></div>
        <div className="absolute w-[2px] mx-auto lg:w-1 h-[27%] rounded-md bottom-[13vw] right-[50vw] bg-white"></div>
        <div className="flex absolute top-[37vw] left-[35vw] flex-col w-[30vw] h-[10vw] bg-black bg-opacity-20 justify-center rounded-xl  items-center border-[0.2vw] gap-y-[1vw] mx-auto  border-white border-opacity-20">
          <p className="text-[1vw]">Melanjutkan belajar dengan mengikuti alur yang relevan</p>
          <div className="flex w-full justify-between">
            <div
              className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
            >
              Roadmap TypeScript
            </div>
            <div
              className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[12vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
            >
              Roadmap NodeJs
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-1 relative  flex-col w-[40vw] h-[15vw] bg-black bg-opacity-20 px-3 justify-center rounded-xl  items-center border-[0.2vw] gap-y-[1vw] mx-auto  border-white border-opacity-20">
        <p className="text-[1vw] text-center">
          Selamat! anda telah menyelesaikan Alur Frontend. Untuk mendapatkan sertifikat silahkan melakukan pembayaran dengan mengklik tombol dibawah, dengan ini anda telah membantu menyediakan layanan pembelajaran secara gratis bagi banyak
          orang.
        </p>
        <div className="flex w-full justify-between">
          
          <Link to={'/'}>
          <div
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[18vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Belum punya duit
          </div>
          </Link>
          <Link to='/payment'>
          <div
            className="bg-black bg-opacity-20 border-[0.2vw] mx-auto  border-white border-opacity-20 py-[0.4vw]  w-[18vw] hover:bg-opacity-60 duration-300 ease-in-out flex items-center justify-center text-[1vw] text-center  px-[0.1vw] rounded-xl"
          >
            Dapatkan Sertifikat
          </div>
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
