import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import home from "../assets/home.svg";
import profile from "../assets/profile.svg";
import dashboard2 from "../assets/dashboard2.svg";

const judul = "JalanKodeku </>";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={`z-10  fixed flex h-[80px] w-full justify-between duration-1000 ease-in-out ${navbar ? " bg-[#111111]  opacity-90 " : " bg-black "}`}>
      <div className="flex flex-row gap-10  ">
        <img src={logo} className="h-8 md:h-10 my-auto ml-3 md:ml-20 " alt="" />
        <h1 className="text-white  md:text-2xl font-Sarpanch my-auto">{judul}</h1>
      </div>
      <div className=" h-full flex flex-row items-center text-white font-bold font-Poppins gap-5 mr-20">
        <div className="flex flex-row gap-5 absolute md:relative ">
          <h1>Mini Tes</h1>
          <h1>Kode Editor</h1>
          <h1>Blog</h1>
          <h1>Road Map</h1>
        </div>
        {/* <div className="relative">
          <input type="text" className="w-full text-white px-4 py-2 border rounded-3xl border-none backdrop-blur-3xl bg-gray-700 p-2 backdrop-brightness-100" name="" />
          <div className="absolute  left-2 top-[6px] flex   ">
            <img src={search} alt="" />
          </div>
        </div> */}

        <img src={home} className="h-6" alt="" />
        <img src={profile} className="h-6 " alt="" />
        <img src={dashboard2} className="h-6 block md:hidden" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
