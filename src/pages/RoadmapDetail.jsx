import React, { useRef, useEffect, useState } from "react";
import dotline1 from "../assets/roadmapDetail/dotline1.svg";
import dotline2 from "../assets/roadmapDetail/dotline2.svg";
import dotline3 from "../assets/roadmapDetail/dotline3.svg";
import dotline4 from "../assets/roadmapDetail/dotline4.svg";
import dotline5 from "../assets/roadmapDetail/dotline5.svg";
import dotline6 from "../assets/roadmapDetail/dotline6.svg";
import dotline7 from "../assets/roadmapDetail/dotline7.svg";
import dotline8 from "../assets/roadmapDetail/dotline8.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap/Roadmap.jsx";
const RoadmapDetail = () => {
  useEffect(() => {
    scrollTo(0,0)
      
    return () => {
     
    }
  },)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black">
    <Navbar></Navbar>
    <Roadmap></Roadmap>
    <Footer></Footer>
    
    </div>
  );
};

export default RoadmapDetail;
