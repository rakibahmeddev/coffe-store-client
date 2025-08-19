import React from 'react';
import BannerImg from '../assets/images/more/banner.png';

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BannerImg})` }}
      className="relative py-20 flex flex-col items-center justify-center text-center shadow-lg bg-cover bg-center h-[450px]"
    >
      <div className="flex w-3/4 mx-auto px-10">
        <div className="w-[50%]"></div>
        <div className="w-[50%] text-left">
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">
            Would you like a Cup of Delicious Coffee?{' '}
          </h1>
          <p className="text-white text-base md:text-base">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <button
            type="button"
            className="w-40 py-3 mt-4  text-sm font-medium text-black rounded-sm bg-[#E2B477] flex items-center justify-center gap-1"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
