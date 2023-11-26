
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import java from "../../assets/roadmap/java.png";
import python from "../../assets/roadmap/python.svg";
import fe from "../../assets/roadmap/fe.svg";
import be from "../../assets/roadmap/be.svg";
import cs from "../../assets/roadmap/cs.svg";
import android from "../../assets/roadmap/android.svg";
import ds from "../../assets/roadmap/ds.svg";
import linkcard from "../../assets/roadmap/link-card.svg";
import left from "../../assets/roadmap/Left-button.svg";
import right from "../../assets/roadmap/Right-button.svg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';





const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

    
    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <>
      <div id="slider-section" className="w-full md:mb-64 mb-20 pt-14 lg:pt-20    ">
        <h1 data-aos="fade-up" className="text-white font-extrabold text-3xl md:text-5xl text-center font-Poppins mb-10 ">Daftar Road Map</h1>
        <Swiper
  
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          style={{
            "--swiper-pagination-bullet-inactive-color": "white",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-inactive-opacity" :"0.5",
            "--swiper-pagination-color": "white",
          }}
          breakpoints={{
            360: {
              slidesPerView: 1, 
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 240, 
                modifier: 2.5,
              }
            },
            768: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 160, 
                modifier: 2.5,
              } 
            },
            1024: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 120, 
                modifier: 2.5,
              }
               
            }
          }}
          
          
          
          pagination={{ 
            el: ".swiper-pagination", 
            clickable: true, 
            dynamicBullets:true,

     
            
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container  pb-10 "
        >
          <SwiperSlide>
            <div className="bg-opacity-10 border-[1px]  shadow-md bg-white p-6 w-72 md:w-80 mx-auto  rounded-[50px]">
              <img src={java} className="mx-auto mb-3 h-24  " alt="" />
              <h1 className="text-white text-3xl font-Poppins font-extrabold mb-2">Java</h1>
              <p className="text-xl text-white font-Poppins h-20 leading-7 mb-9">Belajar bahasa java mulai dari fundamental</p>
              <a href="/">
                <div className="w-28 p-2 gap-3 mb-14 border-[1px]  bg-slate-400 bg-opacity-20 rounded-3xl flex justify-center flex-row text-white font-Poppins align-middle">
                  <p>Eksplor</p>
                  <img src={linkcard} alt="" />
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-opacity-10 border-[1px]  shadow-md bg-white p-6 w-72 md:w-80 mx-auto  rounded-[50px]">
              <img src={python} className="mx-auto mb-3 h-24" alt="" />
              <h1 className="text-white text-3xl font-Poppins font-extrabold mb-2">Python</h1>
              <p className="text-xl text-white font-Poppins h-20 leading-7 mb-9">Langkah demi langkah untuk menjadi python developer</p>
              <a href="/">
                <div className="w-28 p-2 gap-3 mb-14 border-[1px]  bg-slate-400 bg-opacity-20 rounded-3xl flex justify-center flex-row text-white font-Poppins align-middle">
                  <p>Eksplor</p>
                  <img src={linkcard} alt="" />
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-opacity-10 border-[1px]  shadow-md bg-white p-6 w-72 md:w-80 mx-auto  rounded-[50px]">
              <img src={fe} className="mx-auto mb-3 h-24 " alt="" />
              <h1 className="text-white text-3xl font-Poppins font-extrabold mb-2">Frontend</h1>
              <p className="text-xl text-white font-Poppins h-20 leading-7 mb-9">Melangkah Menjadi Frontend terdepan</p>
              <Link to="/roadmap">
                <div className="w-28 p-2 gap-3 mb-14 border-[1px]  bg-slate-400 bg-opacity-20 rounded-3xl flex justify-center flex-row text-white font-Poppins align-middle">
                  <p>Eksplor</p>
                  <img src={linkcard} alt="" />
                </div>
                </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-opacity-10 border-[1px]  shadow-md bg-white p-6 w-72 md:w-80 mx-auto  rounded-[50px]">
              <img src={be} className="mx-auto mb-3 h-24" alt="" />
              <h1 className="text-white text-3xl font-Poppins font-extrabold mb-2">Backend</h1>
              <p className="text-xl text-white font-Poppins h-20 leading-7 mb-9">Menjadi Backend Developer yang kompeten</p>
              <a href="/">
                <div className="w-28 p-2 gap-3 mb-14 border-[1px]  bg-slate-400 bg-opacity-20 rounded-3xl flex justify-center flex-row text-white font-Poppins align-middle">
                  <p>Eksplor</p>
                  <img src={linkcard} alt="" />
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-opacity-10 border-[1px]  shadow-md bg-white p-6 w-72 md:w-80 mx-auto  rounded-[50px]">
              <img src={cs} className="mx-auto mb-3 h-24" alt="" />
              <h1 className="text-white text-3xl font-Poppins font-extrabold mb-2">Cyber Security</h1>
              <p className="text-xl text-white font-Poppins h-20 leading-7 mb-9">Menjadi seorang ahli keamanan siber</p>
              <a href="/">
                <div className="w-28 p-2 gap-3 mb-14 border-[1px]  bg-slate-400 bg-opacity-20 rounded-3xl flex justify-center flex-row text-white font-Poppins align-middle">
                  <p>Eksplor</p>
                  <img src={linkcard} alt="" />
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-opacity-10 border-[1px]  shadow-md bg-white p-6 w-72 md:w-80 mx-auto  rounded-[50px]">
              <img src={android} className="mx-auto mb-3 h-24" alt="" />
              <h1 className="text-white text-3xl font-Poppins font-extrabold mb-2">Android</h1>
              <p className="text-xl text-white font-Poppins h-20 leading-7 mb-9">Menjadi Android developer ternama</p>
              <a href="/">
                <div className="w-28 p-2 gap-3 mb-14 border-[1px]  bg-slate-400 bg-opacity-20 rounded-3xl flex justify-center flex-row text-white font-Poppins align-middle">
                  <p>Eksplor</p>
                  <img src={linkcard} alt="" />
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-opacity-10 border-[1px]  shadow-md bg-white p-6 w-72 md:w-80 mx-auto  rounded-[50px]">
              <img src={ds} className="mx-auto mb-3 h-24 " alt="" />
              <h1 className="text-white text-3xl font-Poppins font-extrabold mb-2">Data Scientist</h1>
              <p className="text-xl text-white font-Poppins h-20 leading-7 mb-9">Belajar menjadi data scientist</p>
              <a href="/">
                <div className="w-28 p-2 gap-3 mb-14 border-[1px]  bg-slate-400 bg-opacity-20 rounded-3xl flex justify-center flex-row text-white font-Poppins align-middle">
                  <p>Eksplor</p>
                  <img src={linkcard} alt="" />
                </div>
              </a>
            </div>
          </SwiperSlide>
          
          <div className="swiper-pagination"></div>
          {/* <div className="flex-row flex ">
          <img src={left} alt="" className="swiper-button-prev  " />
          <img src={right} alt="" className="swiper-button-next  " />
        </div> */}
         
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
