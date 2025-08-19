import React from 'react';
import cup from '../assets/images/icons/1.png';
import badge from '../assets/images/icons/2.png';
import grades from '../assets/images/icons/3.png';
import bottle from '../assets/images/icons/4.png';

const Features = () => {
  return (
    <div className="bg-[#ECEAE3] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* features cards  */}
        <div className="p-4 rounded-lg text-sm max-w-80">
          <img className="w-10 h-10 " src={cup} alt="officeImage" />
          <p className="text-[#331A15] text-xl font-semibold mt-2">
            Awesome Aroma{' '}
          </p>
          <p className="text-[#1B1A1A] mt-3">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="p-4 rounded-lg text-sm max-w-80">
          <img className="w-10 h-10 " src={badge} alt="officeImage" />
          <p className="text-[#331A15] text-xl font-semibold mt-2">
            High Quality{' '}
          </p>
          <p className="text-[#1B1A1A] mt-3">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="p-4 rounded-lg text-sm max-w-80">
          <img className="w-10 h-10 " src={grades} alt="officeImage" />
          <p className="text-[#331A15] text-xl font-semibold mt-2">
            Pure Grades{' '}
          </p>
          <p className="text-[#1B1A1A] mt-3">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="p-4 rounded-lg text-sm max-w-80">
          <img className="w-10 h-10 " src={bottle} alt="officeImage" />
          <p className="text-[#331A15] text-xl font-semibold mt-2">
            Proper Roasting{' '}
          </p>
          <p className="text-[#1B1A1A] mt-3">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
