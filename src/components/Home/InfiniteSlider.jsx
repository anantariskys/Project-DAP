import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "../../css/animate-scroll.scss";
import star from "../../assets/star.svg";
import starEmpty from "../../assets/star-empty.svg";
const InfiniteSlider = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <>
      <h1 data-aos="fade-up" className=" text-3xl text-white text-center  md:text-4xl font-Poppins font-bold">
        Lihat Penilaian Orang Tentang Kami
      </h1>
      <div className="w-full py-20   relative text-white overflow-y-hidden">
        <div className="absolute h-[55%] w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl bg-[#23016D]"></div>
        <div className="slider h-44  mb-5 ">
          <div className="slide-track flex justify-center gap-7 h-44">
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">JalanKodeku adalah tempat keren buat yang bingung cari jalan di 'tutorial hell'!</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Nih web, bikin belajar komputer jadi gampang buat yang nggak bisa masuk univ.</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Buat yang takut sama SMK komputer, ini jawaban buat belajar sendiri.</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Wah, asik nih, JalanKodeku bisa bantu kamu belajar IT tanpa ribet bahasa Inggris 😁</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Blognya oke, bisa ngasih tau beda antara TIF, Tekkom, dan SI.</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Jadi, kalo lo nyari situs buat belajar komputer, ini jawaban buat lo 👍</p>
            </div>

            {/* copy */}
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">JalanKodeku adalah tempat keren buat yang bingung cari jalan di 'tutorial hell'!</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Nih web, bikin belajar komputer jadi gampang buat yang nggak bisa masuk univ.</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Buat yang takut sama SMK komputer, ini jawaban buat belajar sendiri.</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Wah, asik nih, JalanKodeku bisa bantu kamu belajar IT tanpa ribet bahasa Inggris 😁</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Blognya oke, bisa ngasih tau beda antara TIF, Tekkom, dan SI.</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Jadi, kalo lo nyari situs buat belajar komputer, ini jawaban buat lo 👍</p>
            </div>
          </div>
        </div>





        <div className="slider h-44  ">
          <div className="slide-track-reverse flex justify-center gap-7 h-44">
          <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Belajar IT jadi gampang, no more 'tutorial hell' deh!🔥</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Ada roadmap buat kasih tau jalan belajar yang cocok buat aku</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Belajar pemrograman jadi gampang, ada tips and tricknya.</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Belajar IT jadi seru dan mudah, coba aja situs ini</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Bagus buat yang masih buta IT dan bahasa Inggris wkwk</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Belajar IT jadi gampang, no more ribet!</p>
            </div>

            {/* copy */}
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Belajar IT jadi gampang, no more 'tutorial hell' deh!🔥</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Ada roadmap buat kasih tau jalan belajar yang cocok buat aku</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Belajar pemrograman jadi gampang, ada tips and tricknya.</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Belajar IT jadi seru dan mudah, coba aja situs ini</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Bagus buat yang masih buta IT dan bahasa Inggris wkwk</p>
            </div>
            <div className="slide w-72  h-44 py-8 px-5 bg-black bg-opacity-40 rounded-2xl border-2 border-white border-opacity-30 ">
              <div className="flex h-1/4 gap-2 w-full justify-center mb-2">
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={star} draggable="false" className="h-6" alt="" />
                <img src={starEmpty} draggable="false" className="h-6" alt="" />
              </div>
              <p className="mx-auto text-center ">Belajar IT jadi gampang, no more ribet!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
