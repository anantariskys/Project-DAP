import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Aos from "aos";
import "aos/dist/aos.css";
import ijul from "../../assets/aboutUs/ijul.svg";
import nanta from "../../assets/aboutUs/nanta.svg";
import alif from "../../assets/aboutUs/alif.svg";
import wilson from "../../assets/aboutUs/wilson.svg";
import achan from "../../assets/aboutUs/achan.svg";
import ijul_backGround from "../../assets/aboutUs/ijul-16-9.svg";
import nanta_backGround from "../../assets/aboutUs/nanta-16-9.svg";
import alif_backGround from "../../assets/aboutUs/alif-16-9.svg";
import achan_backGround from "../../assets/aboutUs/achan-16-9.svg";
import linkedin from "../../assets/aboutUs/linkedin.svg";
import ig from "../../assets/aboutUs/ig.svg";
import fb from "../../assets/aboutUs/fb.svg";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

    return () => {
      Aos.refresh();
    };
  }, []);

  const renderTeamCard = (name, background, image, role) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadImage = () => {
        const img = new Image();
        img.src = background;
        img.onload = () => setLoading(false);
      };

      loadImage();
    }, [background]);

    return (
      <div data-aos="zoom-in" className="w-80 bg-[#3D3D3D] rounded-[1.8rem] hover:rotate-12 duration-200 ease-in-out">
        <img draggable="false" src={background} alt="" className="z-0 w-full blur-[1px] aspect-video object-cover rounded-t-[1.8rem]" />
        {loading ? (
          <Skeleton height={200} width="100%" />
        ) : (
          <>
            <img draggable="false" src={image} alt="" className="z-30 mx-auto object-cover -mt-[6.8rem] rounded-full relative" />
            <div className="bg-white w-full z-20 -mt-16 pt-20 rounded-[1.8rem] pb-12 relative">
              <h2 className="font-Poppins text-2xl text-center font-black">{name}</h2>
              <p className="font-Poppins text-xl text-center font-medium mb-11">{role}</p>
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
          </>
        )}
      </div>
    );
  };

  return (
    <div className="mt-28">
      <h1 className="top-40 font-Poppins text-5xl font-extrabold text-white text-center mb-20">JKtole Team’s</h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-20 mb-16">
        {renderTeamCard("IKHLASUL AMAL", ijul_backGround, ijul, "UI/UX Designer")}
        {renderTeamCard("M. AHSAN FURQON", achan_backGround, achan, "Project Manager")}
        {renderTeamCard("ALIF NUR SANUBARI", alif_backGround, alif, "UI/UX Designer")}
        {renderTeamCard("ANANTA RISKY SUSANTO", nanta_backGround, nanta, "Frontend")}
        {renderTeamCard("WILSON HAMONANGAN", alif_backGround, wilson, "UI/UX Designer")}
      </div>
    </div>
  );
};

export default Team;
