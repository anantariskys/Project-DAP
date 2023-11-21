import Aos from 'aos';
import 'aos/dist/aos.css';
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
      <h1 data-aos="fade-up" className=" text-3xl text-white text-center mb-14 md:text-4xl font-Poppins font-bold">Lihat Penilaian Orang Tentang Kami</h1>
      <div  className="slider h-44">
        <div  className="slide-track flex justify-center gap-7 h-44">
          
          <div className="slide w-72  h-44 bg-purple-600">1</div>
          <div className="slide w-72  h-44 bg-purple-600">2</div>
          <div className="slide w-72  h-44 bg-purple-600">3</div>
          <div className="slide w-72  h-44 bg-purple-600">4</div>
          <div className="slide w-72  h-44 bg-purple-600">5</div>
          <div className="slide w-72  h-44 bg-purple-600">6</div>
          <div className="slide w-72  h-44 bg-purple-600">1</div>
          <div className="slide w-72  h-44 bg-purple-600">2</div>
          <div className="slide w-72  h-44 bg-purple-600">3</div>
          <div className="slide w-72  h-44 bg-purple-600">4</div>
          <div className="slide w-72  h-44 bg-purple-600">5</div>
          <div className="slide w-72  h-44 bg-purple-600">6</div>
        </div>
      </div>
      <div className="slider h-44 mt-8">
        <div className="slide-track-reverse flex justify-center gap-7 h-44">
          <div className="slide w-72  h-44 bg-red-500">1</div>
          <div className="slide w-72  h-44 bg-yellow-400">2</div>
          <div className="slide w-72  h-44 bg-green-500">3</div>
          <div className="slide w-72  h-44 bg-blue-500">4</div>
          <div className="slide w-72  h-44 bg-orange-600">5</div>
          <div className="slide w-72  h-44 bg-purple-600">6</div>
          <div className="slide w-72  h-44  bg-red-500">1</div>
          <div className="slide w-72  h-44 bg-yellow-400">2</div>
          <div className="slide w-72  h-44 bg-green-500">3</div>
          <div className="slide w-72  h-44 bg-blue-500">4</div>
          <div className="slide w-72  h-44 bg-orange-600">5</div>
          <div className="slide w-72  h-44 bg-purple-600">6</div>
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
