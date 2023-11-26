import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const KodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  const handleRunCode = () => {
    try {
      // Membuat elemen div baru untuk me-render HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlCode;

      // Mengganti isi output dengan hasil render HTML
      setOutput(tempDiv.outerHTML);
      setError(null);
    } catch (err) {
      // Menangani kesalahan jika ada
      setOutput("");
      setError(err.toString());
    }
  };

  return (
    <div className="bg-black h-screen lg:block flex flex-col justify-center gap-y-3 items-center">
      <div className="h-3/4 flex items-center justify-center mx-auto my-auto absolute w-5/6 inset-0  blur-3xl z-0 ">
        <div className="md:absolute relative w-full h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-3xl  "></div>
      </div>
      <div className="h-[80px] hidden lg:block">
        <Navbar></Navbar>
      </div>
      <h1 className="z-10 text-white lg:hidden w-4/5 text-center">Maaf Kode Editor hanya bisa diakses di device desktop, mohon gunakan device desktop untuk menggunakan fitur ini !!!</h1>
      <Link className="z-10" to='/'>

      <button className=" text-white lg:hidden py-1 rounded-lg hover:bg-opacity-40 duration-200 ease-in-out px-3 border-2 border-white border-opacity-20 bg-black bg-opacity-20"> Kembali ke beranda</button>
      </Link>
      <div className="lg:flex  h-4/5 z-10 text-white text-base font-Poppins hidden   border-separate px-10">
        <div className="w-1/2 h-full  relative">
          <textarea className="w-full h-full bg-opacity-20 bg-white rounded-s-xl rounded-e-none border resize-none  p-2" value={htmlCode} onChange={(e) => setHtmlCode(e.target.value)} placeholder="Tulis kode html,css dan js mu disini...."></textarea>
         <button className="mt-4 absolute border-2 bg-white bg-opacity-20 hover:bg-opacity-40 duration-200 ease-in-out border-white border-opacity-20 text-white px-3 bottom-3 right-3 py-1  rounded" onClick={handleRunCode}>
            Run
          </button>
        </div>

        <div className="w-1/2 h-full z-10 ">
          <div className="border h-full overflow-auto rounded-e-xl rounded-s-none bg-opacity-40 bg-black result-section">{error ? <div className="text-red-500">{error}</div> : <div dangerouslySetInnerHTML={{ __html: output }}></div>}</div>
        </div>
      </div>
    </div>
  );
};

export default KodeEditor;
