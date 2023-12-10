import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import ig from "../assets/ig.svg"
import yt from "../assets/yt.svg"
import tele from "../assets/tele.svg"
import fb from "../assets/fb.svg"
const judul = "JalanKodeku </>";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

    
    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <div data-aos="fade-up" className="bg-[#111111] w-full z-30  flex flex-col lg:px-40 md:px-14 px-8 pb-9 md:pt-20 pt-10 " >
      <div className="flex flex-col">
        <div className="flex flex-row ">
          <img src={logo} alt="" className="md:w-16 w-9" />
          <h1 className="text-white md:text-2xl text-base font-Sarpanch my-auto">{judul}</h1>
        </div>
        <p className="text-white md:text-xl text-xs">Your Roadmap to Programming Mastery</p>
      </div>
      <div className="flex md:flex-row flex-col   text-white mt-8  font-Poppins w-full ">
        <div className="flex flex-col">
          <h1 className="font-bold md:text-2xl text-base">Malang</h1>
          <p className="md:text-base text-xs w-72 md:mb-6 mb-2">Fakultas Ilmu Komputer Universitas Brawijaya, Malang, Indonesia</p>
          <h1 className="font-bold  md:text-2xl text-base">Bima</h1>
          <p className="md:text-base text-xs w-60 md:mb-0 mb-5">JK House, Kota Bima 3004, Indonesia</p>
        </div>
        <div className="lg:flex sm:flex lg:flex-row md:grid md:grid-cols-3 flex-col justify-around w-full  md:gap-4 gap-5">
          <div className="flex flex-col">
            <h1 className="font-bold md:text-2xl text-base">Products</h1>
            <Link to='/miniTest'>
              <p className="md:text-base text-xs">Mini Test</p>
            </Link>
            <Link to='/kodeEditor'>
            <p className="md:text-base text-xs">Kode editor</p>
            </Link>
            <Link to='/blog'><p className="md:text-base text-xs">Blog</p></Link>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold md:text-2xl text-base">Company</h1>
            <Link to="/aboutUs"><p className="md:text-base text-xs">About Us</p></Link>
            <p className="md:text-base text-xs">Contact Us</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold md:text-2xl text-base">Other</h1>
            <p className="md:text-base text-xs">Privacy & Policy</p>
            <p className="md:text-base text-xs">Terms & Condition</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold md:text-2xl text-base">Social Media</h1>
            <p className="md:text-base text-xs">Instagram</p>
            <p className="md:text-base text-xs">Youtube Channel</p>
            <p className="md:text-base text-xs">Telegram</p>
            <p className="md:text-base text-xs">Facebook Page</p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col w-full md:mt-16 mt-5   font-Poppins text-white">
            <p className="md:text-base text-xs mb-4">Ikuti kami di</p>
            <div className="flex flex-row md:gap-6 gap-3">
              <div className="rounded-full md:h-10 group hover:bg-[#2f2f2f] duration-300 ease-in-out md:w-10 h-8 w-8 bg-[#484848] flex justify-center items-center">
                <img className='group-hover:rotate-12 group-hover:scale-75 duration-300 ease-in-out'  src={ig} alt="" />
              </div>
              <div className="rounded-full md:h-10 group hover:bg-[#2f2f2f] duration-300 ease-in-out md:w-10 h-8 w-8 bg-[#484848] flex justify-center items-center">
                <img className='group-hover:rotate-12 group-hover:scale-75 duration-300 ease-in-out' src={yt} alt="" />
              </div>
              <div className="rounded-full md:h-10 group hover:bg-[#2f2f2f] duration-300 ease-in-out md:w-10 h-8 w-8 bg-[#484848] flex justify-center items-center">
                <img className='group-hover:rotate-12 group-hover:scale-75 duration-300 ease-in-out' src={tele} alt="" />
              </div>
              <div className="rounded-full md:h-10 group hover:bg-[#2f2f2f] duration-300 ease-in-out md:w-10 h-8 w-8 bg-[#484848] flex justify-center items-center">
                <img className='group-hover:rotate-12 group-hover:scale-75 duration-300 ease-in-out' src={fb} alt="" />
              </div>
              
            </div>
            <p className="md:text-base text-xs mt-5">© 2023 JalanKodeku · Made with ❤️ by Tim JKtole</p>

      </div>
    </div>
  );
};

export default Footer;
