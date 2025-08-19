import React from 'react';
import cup from '../assets/images/cups/Rectangle 9.png';
import cup2 from '../assets/images/cups/Rectangle 10.png';
import cup3 from '../assets/images/cups/Rectangle 11.png';
import cup4 from '../assets/images/cups/Rectangle 12.png';
import cup5 from '../assets/images/cups/Rectangle 13.png';
import cup6 from '../assets/images/cups/Rectangle 14.png';
import cup7 from '../assets/images/cups/Rectangle 15.png';
import cup8 from '../assets/images/cups/Rectangle 16.png';

import galleryBg from '../assets/images/more/bg.jpg';

const Gallery = () => {
  const images = [cup, cup2, cup3, cup4, cup5, cup6, cup7, cup8];

  return (
    <div className="py-18"
    style={{ backgroundImage: `url(${galleryBg})` }}
    >
      <h1 className="text-3xl text-[#331A15] font-semibold text-center mx-auto">
        Our Coffee Designs
      </h1>
      <p className="text-sm text-[#331A15] text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works - each piece crafted with
        intention, emotion, and style.
      </p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 px-2 md:px-0">
        {images.map((img, index) => (
          <div key={index} className="w-full overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`coffee-${index}`}
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105 hover:shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
