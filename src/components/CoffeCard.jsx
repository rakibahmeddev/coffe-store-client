import React from 'react';
import { IoMdEye } from 'react-icons/io';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';

const CoffeCard = ({ coffe }) => {
  const { name, quantity, supplier, taste, category, description, photoUrl } =
    coffe;
  return (
    <div className="p-4 bg-white rounded-lg shadow  flex items-center ">
      {/* image area  */}
      <div className="w-[25%]">
        <img
          className="rounded-md max-h-40 w-full object-cover"
          src={photoUrl}
          alt="officeImage"
        />
      </div>

      {/* contents area  */}
      <div className="w-[65%]">
        <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">{name}</p>
        <p className="text-gray-500 text-sm my-3 ml-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore..
        </p>
      </div>

      {/* buttons area  */}
      <div className="w-[15%] ">
        <div className="flex flex-col justify-end items-end">
          <button
            type="button"
            className=" bg-[#D2B48C] text-white m-1 p-2 rounded"
          >
            <IoMdEye />
          </button>

          <button
            type="button"
            className=" bg-[#3C393B] text-white m-1 p-2 rounded"
          >
            <FaPenToSquare />
          </button>

          <button
            type="button"
            className=" bg-[#EA4744] text-white m-1 p-2 rounded"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
