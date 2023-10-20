import React from "react";
import logo from "../assets/logo.svg";

const judul = "JalanKodeku </>";

const Footer = () => {
  return (
    <div className="bg-[#111111] w-full h-[600px] flex flex-col px-40  pt-20">
      <div className="flex flex-col">
        <div className="flex flex-row ">
          <img src={logo} alt="" />
          <h1 className="text-white text-2xl font-Sarpanch my-auto">{judul}</h1>
        </div>
        <p className="text-white text-xl">Your Roadmap to Programming Mastery</p>
      </div>
      <div className="flex  text-white mt-8  font-Poppins w-full ">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Malang</h1>
          <p className="text-base w-72 mb-6">Fakultas Ilmu Komputer Universitas Brawijaya, Malang, Indonesia</p>
          <h1 className="font-bold text-2xl">Bima</h1>
          <p className="text-base w-60">JK House, Kota Bima 3004, Indonesia</p>
        </div>
        <div className="flex flex-row justify-around w-full">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Products</h1>
            <p className="text-base">Roadmap</p>
            <p className="text-base">Code editor</p>
            <p className="text-base">Blog</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Company</h1>
            <p className="text-base">About Us</p>
            <p className="text-base">Contact Us</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Other</h1>
            <p className="text-base">Privacy & Policy</p>
            <p className="text-base">Terms & Condition</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Social Media</h1>
            <p className="text-base">Instagram</p>
            <p className="text-base">Youtube Channel</p>
            <p className="text-base">Telegram</p>
            <p className="text-base">Facebook Page</p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col w-full mt-14   font-Poppins text-white">
            <p className="text-base mb-4">Ikuti kami di</p>
            <div className="flex flex-row gap-6">
              <div className="rounded-full h-10 w-10 bg-[#484848]"></div>
              <div className="rounded-full h-10 w-10 bg-[#484848]"></div>
              <div className="rounded-full h-10 w-10 bg-[#484848]"></div>
              <div className="rounded-full h-10 w-10 bg-[#484848]"></div>
            </div>
            <p className="text-base mt-5">© 2023 JalanKodeku · Made with ❤️ by Tim JKtole</p>

      </div>
    </div>
  );
};

export default Footer;
