import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bgImg from '../assets/images/more/bg2.png';

const CoffeDetails = () => {
  const coffe = useLoaderData();
  const {
    _id,
    name,
    quantity,
    supplier,
    taste,
    category,
    description,
    photoUrl,
  } = coffe;

  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-6 md:p-22"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full md:w-3/4 mx-auto bg-[#F3F3F0] rounded border border-[#382827] py-6 md:py-10">
        {/* Card */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <img
            className="w-[200px] rounded"
            src={photoUrl}
            alt={name}
          />

          <div className="grow p-4">
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-semibold text-xl text-[#382827]">
                Name: <span className="text-lg font-normal">{name}</span>
              </h3>
              <p className="text-base font-medium text-[#382827]">
                Available Quantity:{' '}
                <span className="text-sm font-normal">{quantity}</span>
              </p>
              <p className="text-base font-medium text-[#382827]">
                Taste: <span className="text-sm font-normal">{taste}</span>
              </p>
              <p className="text-base font-medium text-[#382827]">
                Supplier:{' '}
                <span className="text-sm font-normal">{supplier}</span>
              </p>
              <p className="text-base font-medium text-[#382827]">
                Category:{' '}
                <span className="text-sm font-normal">{category}</span>
              </p>
              <p className="text-base font-medium text-[#382827]">
                Description:{' '}
                <span className="text-sm font-normal">{description}</span>
              </p>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
};

export default CoffeDetails;
