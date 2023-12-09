import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import hero from '../../assets/aboutUs/hero.svg';

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = () => {
      const image = new Image();
      image.src = hero;
      image.onload = () => setLoading(false);
    };

    loadImage();
  }, []);

  return (
    <div className='h-screen w-full relative'>
      {loading ? (
        <Skeleton height={500} width='100%' duration={2} />
      ) : (
        <>
          <img
            draggable='false'
            src={hero}
            alt=''
            className='z-0 w-full object-cover'
          />
          {/* Your other content */}
        </>
      )}

      {!loading && (
        <h1 className='z-10 absolute lg:top-40 md:top-24 sm:top-16 top-14 font-Poppins lg:text-5xl md:text-lg sm:text-base text-xs font-extrabold text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          JKtole Team’s
        </h1>
      )}
    </div>
  );
};

export default Hero;
