import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import leftArrow from "../../assets/payment/leftArrow.svg";
import checkIcon from "../../assets/payment/check-icon.svg"
import apple from "../../assets/payment/apple.svg"

import { Link } from 'react-router-dom';

const judul = "JalanKodeku </>";
const FormPayment = () => {
    const [isClicked,setIsClicked] = useState( false);
  const [inputValue, setInputValue] = useState('');

  const handleHapusClick = () => {
   
    setInputValue('');
  };

  return (
    <>
    <div className="z-0  flex justify-center bg-black items-center h-[75rem]  md:h-screen w-full md:mb-0 ">
    <div className="lg:h-2/4 relative w-4/5 h-4/5 lg:w-5/6 blur-3xl">
        <div className="md:absolute relative w-full h-[50rem] md:h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-2xl md:bottom-0 bottom-10"></div>
      </div>
    <div className="absolute md:h-screen w-full  items-center flex flex-col justify-center gap-5   ">
      <div className="w-4/5  h-4/5 flex flex-col ">
        <div className="flex gap-8 mb-4">
          <Link to={'/'}><img src={leftArrow} alt="" /></Link>
          <div className="flex flex-row md:gap-7 gap-2  ">
            <div className="sm:shadow-2xl shadow-sm   shadow-black border-t-[1px] border-l-[1px] border-[#5B486E]   backdrop-blur-3xl  p-2 backdrop-brightness-100 rounded-2xl">
              <img className="md:h-7 h-4  relative" draggable="false" src={logo} alt="gagal load" />
            </div>
            <h1 className="text-white  md:text-2xl font-Sarpanch my-auto">{judul}</h1>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col  h-full lg:px-16">
          <div className="lg:w-1/2 pl-10 py-10 font-Poppins text-white bg-opacity-40 bg-black rounded-bl-none lg:rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none">
            <div className="flex gap-6 items-center">
              <div className="rounded-full h-14 w-14 bg-blue-400"></div>
              <h1  className="text-xl md:text-2xl font-bold  text-left w-3/4">Alur Frontend - Sertifikat Penyelesaian</h1>
            </div>
            <h2 className="text-3xl mt-8">Rp 179.000,-</h2>
            <p className="text-lg  w-[80%] mt-8">Dapatkan Sertifikat Penyelesaian resmi dari JalanKodeku. Sertifikat ini dapat terhubung dengan LinkedIn dan memiliki link di website kami untuk membuktikan keasliannya.</p>
          </div>
          <div className="lg:w-1/2 md:px-10 px-5 py-10 bg-white bg-opacity-10 rounded-br-2xl lg:rounded-tr-2xl rounded-tr-none rounded-bl-2xl lg:rounded-bl-none font-Poppins text-white">
            <div className="flex justify-between text-xl">
              <p>Harga Sertifikat</p>
              <p>Rp 179.000</p>
            </div>
            <p className="font-bold text-xl mt-7">Kode Diskon</p>
            <div className="flex gap-4 mt-3 items-center ">
              <div onClick={()=>{setIsClicked(!isClicked)}} className="h-7 w-7 bg-black bg-opacity-10 flex items-center justify-center rounded-md border-2 border-white border-opacity-10">
                {
                  isClicked?(
                    <img src={checkIcon} draggable="false" alt="" />

                  ):(
                    <div></div>
                  )
                }
              </div>
              <p className="text-lg ">Saya punya kode diskon</p>
            </div>
            <div className=" flex border-2 border-white border-opacity-10 h-10  rounded-lg justify-start items-center mt-3">
              <input disabled={!isClicked} value={inputValue} onChange={(e) => setInputValue(e.target.value) } className=" px-2 bg-transparent h-full w-3/4 rounded-s-md"   type="text" />
              <button onClick={handleHapusClick}  className=" rounded-e-lg border-l-2 border-opacity-10 border-white  flex justify-center items-center w-1/4  px-3 bg-black bg-opacity-10 h-full ">HAPUS</button>
            </div>
            <div className="flex justify-between text-xl mt-6">
              <p>Diskon</p>
              <p>Rp 50.000</p>
            </div>
            <div className="flex justify-between text-xl mt-2">
              <p>Total Pembayaran</p>
              <p>Rp 129.000</p>
            </div>
            <button className="bg-black w-full h-10 py-2 flex justify-center items-center rounded-2xl mt-3">
              <img src={apple} alt="" />
            </button>
            <button className="bg-[#3E43FB] duration-300 hover:bg-blue-950 h-10 w-full font-Poppins py-2 flex justify-center items-center rounded-2xl mt-2">
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default FormPayment