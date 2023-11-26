import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import home from "../assets/home.svg";
import profile from "../assets/profile.svg";
import dashboard2 from "../assets/dashboard2.svg";
import arrow from "../assets/arrow.svg";

import { Link } from "react-router-dom";

const judul = "JalanKodeku </>";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [active, setActive] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const handleJumpToSection = () => {
    const sliderSection = document.getElementById('slider-section');
    if (sliderSection) {
      sliderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hamburgerHandler = () => {
    setActive(false);
    setHamburger(!hamburger);
  };
  const activeHandler = () => {
    setActive(!active);
  };

  const navbarStyle = {
    background: navbar ? " linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)) " : "transparent",
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav style={navbarStyle} className={`${navbar ? "backdrop-blur-xl " : "backdrop-blur-none"} z-50  fixed flex h-[60px] md:h-[80px] w-full justify-between duration-500  ease-in-out   `}>
        <div className="flex flex-row md:gap-10 gap-2  ">
          <img src={logo} className="h-8 md:h-10 my-auto ml-3 md:ml-5  lg:ml-20 " alt="" />
          <h1 className="text-white  md:text-2xl font-Sarpanch my-auto">{judul}</h1>
        </div>
        <div className=" h-full flex flex-row items-center text-white font-bold font-Poppins gap-5 mr-5 md:mr-20 ">
          <div className="hidden md:flex  text-xs lg:text-lg  md:bottom-0  md:flex-row gap-2 lg:gap-5   ">
            <Link to='/miniTest'>
            <h1>Mini Tes</h1>
            </Link>
            <Link to="/kodeEditor">
              <h1>Kode Editor</h1>
            </Link>

            <Link to="/blog">
              <h1>Blog</h1>
            </Link>
            <h1 onClick={handleJumpToSection} className="cursor-pointer">Road Map</h1>
          </div>
          {/* <div className="relative">
          <input type="text" className="w-full text-white px-4 py-2 border rounded-3xl border-none backdrop-blur-3xl bg-gray-700 p-2 backdrop-brightness-100" name="" />
          <div className="absolute  left-2 top-[6px] flex   ">
            <img src={search} alt="" />
          </div>
        </div> */}
          <Link to="/">
            <img src={home} className="h-6" alt="" />
          </Link>
          <Link to="/auth">
            <img src={profile} className="h-6 " alt="" />
          </Link>
          <img src={dashboard2} onClick={hamburgerHandler} className={`h-6 block md:hidden ${hamburger ? "rotate-45" : "rotate-0"}  duration-500`} alt="" />
        </div>
      </nav>
      <div className={` ${hamburger ? "   bg-transparent  top-0 mt-[60px] " : " top-[-500px]  "} fixed  z-50  w-full  md:hidden duration-1000 transition-all ease-in-out`}>
        <div className="flex flex-col px-8 w-[90%]  backdrop-blur-lg gap-y-3  border-l-[1px] border-b-[1px] border-r-[1px] mx-auto pb-6 rounded-xl ">
          <div className="flex justify-start  ">
            <h3 className="text-xl font-extrabold  font-Poppins text-white">Menu</h3>
          </div>
          <h1 className="text-base font-semibold font-Poppins text-white border-b-[1px] pb-1">Beranda</h1>

          <div className="flex flex-col border-b-[1px] ">
            <div className="flex justify-between">
              <h1  className="text-base w-full font-semibold font-Poppins text-white mt pb-1" onClick={activeHandler}>
                Road Map
              </h1>
              <img onClick={activeHandler} src={arrow} alt="" className={`${active ? "-rotate-180" : "rotate-0"} duration-500 ease-in-out`} />
            </div>
            <ul className={`transition-max-h duration-300 ease-in-out font-Poppins text-white backdrop-blur-lg  font-light pl-6 ${active ? "max-h-80" : "max-h-0"} overflow-hidden`}>
              <li className="before:content-['\2022'] before:w-5 before:h-5 text-base before:mr-2   before:my-auto border-b-[1px] mb-3">Java</li>
              <li className="before:content-['\2022'] before:w-5 before:h-5 text-base before:mr-2   before:my-auto border-b-[1px] mb-3">Python</li>
              <Link to="/roadMap">
                <li className="before:content-['\2022'] before:w-5 before:h-5 text-base before:mr-2   before:my-auto border-b-[1px] mb-3">Frontend</li>
              </Link>
              <li className="before:content-['\2022'] before:w-5 before:h-5 text-base before:mr-2   before:my-auto border-b-[1px] mb-3">Backend</li>
              <li className="before:content-['\2022'] before:w-5 before:h-5 text-base before:mr-2   before:my-auto border-b-[1px] mb-3">Cyber Security</li>
              <li className="before:content-['\2022'] before:w-5 before:h-5 text-base before:mr-2   before:my-auto border-b-[1px] mb-3">Android</li>
              <li className="before:content-['\2022'] before:w-5 before:h-5 text-base before:mr-2   before:my-auto border-b-[1px] mb-8">Data Scientist</li>
            </ul>
          </div>
          <Link to="/blog">
            <h1 className="text-base font-semibold font-Poppins text-white border-b-[1px] pb-1">Blog</h1>
          </Link>
          <Link to="/kodeEditor">
            <h1 className="text-base font-semibold font-Poppins text-white border-b-[1px] pb-1">Kode Editor</h1>
          </Link>
          <Link to='/miniTest'>
          <h1 className="text-base font-semibold font-Poppins text-white border-b-[1px] pb-1">Mini Tes</h1>

          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
