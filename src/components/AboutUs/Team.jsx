import React from "react";
import ijul from '../../assets/aboutUs/ijul.svg'
import nanta from '../../assets/aboutUs/nanta.svg'
import alif from '../../assets/aboutUs/alif.svg'
import wilson from '../../assets/aboutUs/wilson.svg'
import achan from '../../assets/aboutUs/achan.svg'
import ijul_backGround from '../../assets/aboutUs/ijul-16-9.svg'
import nanta_backGround from '../../assets/aboutUs/nanta-16-9.svg'
import alif_backGround from '../../assets/aboutUs/alif-16-9.svg'
import achan_backGround from '../../assets/aboutUs/achan-16-9.svg'
import linkedin from '../../assets/aboutUs/linkedin.svg'
import ig from '../../assets/aboutUs/ig.svg'
import fb from '../../assets/aboutUs/fb.svg'
const Team = () => {
  return (
    <div className="mt-28">
      <h1 className=" top-40 font-Poppins text-5xl font-extrabold text-white text-center mb-20">JKtole Team’s</h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-20 mb-16">
        <div className="w-80 bg-[#3D3D3D]  rounded-[1.8rem] hover:rotate-12   duration-200 ease-in-out "> 
            <img draggable='false' src={ijul_backGround} alt="" className="z-0 w-full aspect-video object-cover blur-[1px] rounded-t-[1.8rem]  " />
            <img draggable='false' src={ijul} alt="" className="z-30 mx-auto object-cover  -mt-[6.8rem] rounded-full relative" />
            <div className="bg-white w-full z-20 -mt-16 pt-20 rounded-[1.8rem] pb-12 relative">
                <h2 className="font-Poppins text-2xl text-center font-black">IKHLASUL AMAL</h2>
                <p className="font-Poppins text-xl text-center font-medium mb-11">UI/UX Designer</p>
                <div className="flex justify-center gap-3">
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={ig} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={fb} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div  className="w-80 bg-[#3D3D3D]  rounded-[1.8rem] "> 
            <img draggable='false' src={achan_backGround} alt="" className="z-0 w-full blur-[1px] aspect-video object-cover rounded-t-[1.8rem]  " />
            <img draggable='false' src={achan} alt="" className="z-30 mx-auto object-cover -mt-[6.8rem] rounded-full relative" />
            <div className="bg-white w-full z-20 -mt-16 pt-20 rounded-[1.8rem] pb-12 relative">
                <h2 className="font-Poppins text-2xl text-center font-black">M. AHSAN FURQON</h2>
                <p className="font-Poppins text-xl text-center font-medium mb-11">Project Manager</p>
                <div className="flex justify-center gap-3">
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={ig} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={fb} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-80 bg-[#3D3D3D]  rounded-[1.8rem] "> 
            <img draggable='false' src={alif_backGround} alt="" className="z-0 w-full blur-[1px] aspect-video object-cover rounded-t-[1.8rem]  " />
            <img draggable='false' src={alif} alt="" className="z-30 mx-auto object-cover -mt-[6.8rem] rounded-full relative" />
            <div className="bg-white w-full z-20 -mt-16 pt-20 rounded-[1.8rem] pb-12 relative">
                <h2 className="font-Poppins text-2xl text-center font-black">ALIF NUR SANUBARI</h2>
                <p className="font-Poppins text-xl text-center font-medium mb-11">UI/UX Designer</p>
                <div className="flex justify-center gap-3">
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={ig} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={fb} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-80 bg-[#3D3D3D]  rounded-[1.8rem] "> 
            <img src={nanta_backGround} alt="" draggable='false' className="z-0 w-full blur-[1px] aspect-video object-cover rounded-t-[1.8rem]  " />
            <img src={nanta} alt="" draggable='false' className="z-30 mx-auto object-cover -mt-[6.8rem] rounded-full relative" />
            <div className="bg-white w-full z-20 -mt-16 pt-20 rounded-[1.8rem] pb-12 relative">
                <h2 className="font-Poppins text-2xl text-center font-black">ANANTA RISKY SUSANTO</h2>
                <p className="font-Poppins text-xl text-center font-medium mb-11">Frontend</p>
                <div className="flex justify-center gap-3">
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={ig} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={fb} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div  className="w-80 bg-[#3D3D3D]  rounded-[1.8rem] "> 
            <img draggable='false' src={alif_backGround} alt=""  className="z-0 w-full blur-[1px] aspect-video object-cover rounded-t-[1.8rem]  " />
            <img draggable='false' src={wilson} alt="" className="z-30 mx-auto object-cover -mt-[6.8rem] rounded-full relative" />
            <div className="bg-white w-full z-20 -mt-16 pt-20 rounded-[1.8rem] pb-12 relative">
                <h2 className="font-Poppins text-2xl text-center font-black">WILSON HAMONANGAN</h2>
                <p className="font-Poppins text-xl text-center font-medium mb-11">Frontend, UX Designer</p>
                <div className="flex justify-center gap-3">
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={ig} alt="" />
                    </div>
                    <div className="h-11 w-11 bg-[#CCCCCC] rounded-full flex justify-center items-center ">
                        <img src={fb} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
     
    </div>
  );
};

export default Team;
