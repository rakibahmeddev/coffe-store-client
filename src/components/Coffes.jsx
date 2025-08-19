import React from 'react';
import bgImg from '../assets/images/more/bg1.png';
import CoffeCard from './CoffeCard';

const Coffes = ({ coffes }) => {
  console.log(coffes);
  return (
    <div
      className="relative py-22 bg-no-repeat bg-contain bg-center z-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h2 className="text-4xl text-center font-semibold text-[#331A15] pb-4">
        Popular Coffes{' '}
      </h2>

      <div className="relative w-3/4 mx-auto z-20 grid md:grid-cols-2 gap-8 mt-9">
        {coffes.map((coffe) => (
          <CoffeCard key={coffe._id} coffe={coffe} />
        ))}
      </div>
    </div>
  );
};

export default Coffes;
