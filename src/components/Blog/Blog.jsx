import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import blog1 from "../../assets/blog/blog1.png";
import blog2 from "../../assets/blog/blog2.png";
import blog3 from "../../assets/blog/blog3.png";
import blog4 from "../../assets/blog/blog4.png";
import blog5 from "../../assets/blog/blog5.png";
import blog6 from "../../assets/blog/blog6.png";
const Blog = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    
        
        return () => {
          Aos.refresh();
        };
      }, []);
  return (
    <div className="flex flex-wrap justify-center py-14 gap-x-8 gap-y-10">
        {/* card1 */}
      <div  data-aos="fade-up" className="w-80 lg:w-[400px] bg-[#1A1A1A] text-white font-Poppins rounded-lg">
        <div className="w-full h-auto rounded-xl">
          <img draggable="false" src={blog1} alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full px-8 py-5">
            <h1 className="text-xl  h-28 font-bold mb-3 ">Apa Bedanya Teknik Informatika, Teknik Komputer, Sistem Informasi?</h1>
            <hr />
            <p className="text-sm mt-2 h-32 overflow-auto ">Mungkin kamu pernah menemui jurusan Teknik Informatika, Teknik Komputer, dan Sistem Informasi di sebuah universitas. Meskipun mirip, ketiganya memiliki perbedaan meskipun berkaitan dengan komputer.</p>
            <button className="rounded-xl py-1 px-2 mt-10 duration-500 hover:bg-[#2c386f] bg-[#4256AC] w-full text-lg lg:text-xl text-[#1A1A1A] font-black ">BACA SELENGKAPNYA</button>
        </div>
      </div>
        {/* card2 */}
      <div  data-aos="fade-up" className="w-80 lg:w-[400px] bg-[#1A1A1A] text-white font-Poppins rounded-lg">
        <div className="w-full h-auto rounded-xl">
          <img draggable="false" src={blog2} alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full px-8 py-5">
            <h1 className="text-xl font-bold mb-3 h-28">Data Science Itu Apa Sih ? Contoh dan 5 Langkah Pengolahan Data</h1>
            <hr />
            <p className="text-sm mt-2 h-32 overflow-auto">Data science adalah ilmu yang berhubungan dengan pengelolaan data dalam jumlah besar menggunakan tools dan teknik modern. Simak ulasan lengkapnya di sini!</p>
            <button className="rounded-xl py-1 px-2 mt-10 duration-500 hover:bg-[#2c386f] bg-[#4256AC] w-full text-lg lg:text-xl text-[#1A1A1A] font-black ">BACA SELENGKAPNYA</button>
        </div>
      </div>
        {/* card3 */}
      <div data-aos="fade-up" className="w-80 lg:w-[400px] bg-[#1A1A1A] text-white font-Poppins rounded-lg">
        <div className="w-full h-auto rounded-xl">
          <img draggable="false" src={blog3} alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full px-8 py-5">
            <h1 className="text-xl font-bold mb-3 h-28">4 Rekomendasi Lathian Python Sederhana</h1>
            <hr />
            <p className="text-sm mt-2 h-32 overflow-auto">bahasa python adalah bahasa yang dapat membuat dan membangun sebuah situs web, perangkat lunak, mengotomatiskan sebuah projek, dapat melakukan sebuah analisis data dengan berbagai macam script codenya.</p>
            <button className="rounded-xl py-1 px-2 mt-10 duration-500 hover:bg-[#2c386f] bg-[#4256AC] w-full text-lg lg:text-xl text-[#1A1A1A] font-black ">BACA SELENGKAPNYA</button>
        </div>
      </div>
        {/* card4 */}
      <div data-aos="fade-up" className="w-80 lg:w-[400px] bg-[#1A1A1A] text-white font-Poppins rounded-lg">
        <div className="w-full h-auto rounded-xl">
          <img draggable="false" src={blog4} alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full px-8 py-5">
            <h1 className="text-xl font-bold mb-3 h-28">Graphical User Interface (GUI) Tampilan yang Sederhana</h1>
            <hr />
            <p className="text-sm mt-2 h-32 overflow-auto">Kamu mungkin sudah pernah mendengar user interface secara umum dan pentingnya dalam memudahkan interaksi pengguna dengan komputer. Nah, ternyata, salah satunya adalah graphical user interface (GUI).</p>
            <button className="rounded-xl py-1 px-2 mt-10 duration-500 hover:bg-[#2c386f] bg-[#4256AC] w-full text-lg lg:text-xl text-[#1A1A1A] font-black ">BACA SELENGKAPNYA</button>
        </div>
      </div>
        {/* card5 */}
      <div data-aos="fade-up" className="w-80 lg:w-[400px] bg-[#1A1A1A] text-white font-Poppins rounded-lg">
        <div className="w-full h-auto rounded-xl">
          <img draggable="false" src={blog5} alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full px-8 py-5">
            <h1 className="text-xl font-bold mb-3 h-28">Belajar Hacking Dari Nol: Mudah dan Cepat</h1>
            <hr />
            <p className="text-sm mt-2 h-32 overflow-auto">Eits, kata siapa? Sekarang, semua orang dapat dengan mudah belajar hacker, bahkan dari nol. Artinya, siapapun, dimanapun, dan dengan latar belakang apapun bisa belajar menjadi hacker tanpa mengalami kendala yang berarti.</p>
            <button className="rounded-xl py-1 px-2 mt-10 duration-500 hover:bg-[#2c386f] bg-[#4256AC] w-full text-lg lg:text-xl text-[#1A1A1A] font-black ">BACA SELENGKAPNYA</button>
        </div>
      </div>
        {/* card6 */}
      <div data-aos="fade-up" className="w-80 lg:w-[400px] bg-[#1A1A1A] text-white font-Poppins rounded-lg">
        <div className="w-full h-auto rounded-xl">
          <img draggable="false" src={blog6} alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full px-8 py-5">
            <h1 className="text-xl font-bold mb-3 h-28">Jenis Pekerjaan Bidang IT yang Paling Diminati versi Dicoding</h1>
            <hr />
            <p className="text-sm mt-2 h-32 overflow-auto  ">Pekerjaan bidang IT (Information Technology) merupakan salah satu bidang pekerjaan yang memiliki prospektif cerah untuk kamu tekuni. Saat ini teknologi terus berkembang dan ia telah menggantikan banyak jenis pekerjaan. Namun, teknologi juga menciptakan jenis pekerjaan baru yang tak bisa digantikan oleh robot ataupun kecerdasaan buatan (AI).</p>
            <button className="rounded-xl py-1 px-2 mt-10 duration-500 hover:bg-[#2c386f] bg-[#4256AC] w-full text-lg lg:text-xl text-[#1A1A1A] font-black ">BACA SELENGKAPNYA</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
