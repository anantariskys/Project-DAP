import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import KodeEditor from '../../assets/home/Img_kode_editor.svg';
import Blog from '../../assets/home/img_ninja_blog.svg';
import Sertifikat from '../../assets/home/img_sertifikat.svg';
import Forum from '../../assets/home/img_forum.svg';

const Introduction = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

    
    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <>
      <div className="w-5/6 mx-auto mb-28  ">
        <h1 data-aos="fade-up" className="md:text-5xl text-2xl  font-extrabold text-center font-Poppins text-white md:mb-16 mb-2">Kode Editor</h1>
        <div data-aos="fade-up"   className="flex md:flex-row flex-col  justify-start gap-14">
          <img  src={KodeEditor} draggable='false' className="hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl md:h-96 h-52 md:aspect-auto aspect-video md:object-none object-cover" alt="" />
          <div  className="flex flex-col font-Poppins text-white">
            <h2  className="lg:text-3xl md:text-xl text-base font-extrabold md:mb-10 mb-2 lg:mt-6 mt-1">Berlatih langsung dari dalam browser</h2>
            <p className="lg:text-2xl md:text-base text-sm font-medium leading-relaxed text-left">
              Dengan menggunakan Kode Editor kami, kamu tidak perlu mempelajari dan menginstall aplikasi Integrated Development Environment (IDE) ataupun Standard Development Kit (SDK). Sehingga kamu bisa langsung ngoding dan fokus pada
              pembelajaran.
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mb-28 ">
        <h1 data-aos="fade-up" className="md:text-5xl text-2xl  font-extrabold text-center font-Poppins text-white  md:mb-16 mb-2">Blog</h1>
        <div data-aos="fade-up"   className="flex md:flex-row-reverse flex-col  justify-start gap-14">
          <img  src={Blog} draggable='false' className="hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl md:h-96 h-52 md:aspect-auto aspect-video md:object-none object-cover object-top" alt="" />
          <div  className="flex flex-col font-Poppins text-white">
            <h2 className="lg:text-3xl md:text-xl text-base font-extrabold md:mb-10 mb-2 lg:mt-6 mt-1 md:text-right">Segala Informasi Seputar Ngoding</h2>
            <p className="lg:text-2xl md:text-base text-sm font-medium leading-relaxed md:text-right">
            Disini kamu bisa membaca berbagai artikel dari berbagai topik mulai dari pengembangan karir, tips belajar, hingga trigger yang bakal memotivasi kamu.
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mb-28  ">
        <h1 data-aos="fade-up" className="md:text-5xl text-2xl  font-extrabold text-center font-Poppins text-white md:mb-16 mb-2">Sertifikat</h1>
        <div data-aos="fade-up"  className="flex md:flex-row flex-col  justify-start gap-14">
          <img  src={Sertifikat} draggable='false' className="hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl md:h-96 h-52 md:aspect-auto aspect-video md:object-none object-cover" alt="" />
          <div  className="flex flex-col font-Poppins text-white">
            <h2 className="lg:text-3xl md:text-xl text-base font-extrabold md:mb-10 mb-2 lg:mt-6 mt-1">Validasi Skill Kamu</h2>
            <p className="lg:text-2xl md:text-base text-sm font-medium leading-relaxed text-left">
            Sertifikat penyelesaian roadmap akan kamu dapatkan setelah kamu menuntaskan salah satu roadmap. Sertifikat ini dapat kamu pajang di LinkedIn loh. Lumayan kan, biar kamu makin dilirik pas nyari kerja.
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mb-28  ">
        <h1 data-aos="fade-up" className="md:text-5xl text-2xl  font-extrabold text-center font-Poppins text-white  md:mb-16 mb-2">Forum</h1>
        <div data-aos="fade-up"  className="flex md:flex-row-reverse flex-col  justify-start gap-14">
          <img  src={Forum} draggable='false' className="hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl md:h-96 h-52 md:aspect-auto aspect-video md:object-none object-cover object-top" alt="" />
          <div  className="flex flex-col font-Poppins text-white">
            <h2 className="lg:text-3xl md:text-xl text-base font-extrabold md:mb-10 mb-2 lg:mt-6 mt-1 md:text-right">Kesulitan? Jangan kuatir!</h2>
            <p className="lg:text-2xl md:text-base text-sm font-medium leading-relaxed md:text-right">
            Jika kamu memiliki kesulitan apapun, silakan membuka forum JalanKodeku, kamu dapat bertanya pertanyaan seputar pemrograman hingga tips tentang karir. Para sepuh juga akan membantu menjawab berbagai pertanyaan yang kamu miliki.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
