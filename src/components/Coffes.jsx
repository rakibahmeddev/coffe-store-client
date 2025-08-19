import React from 'react';
import bgImg from '../assets/images/more/bg1.png';
import CoffeCard from './CoffeCard';

const Coffes = ({ coffes }) => {
  console.log(coffes);
  return (
    <div
      className="relative py-16 bg-no-repeat bg-cover bg-center z-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative w-3/4 mx-auto z-20 grid md:grid-cols-2 gap-4">
        {coffes.map((coffe) => (
          <CoffeCard key={coffe._id} coffe={coffe} />
        ))}
      </div>
    </div>
  );
};

export default Coffes;
