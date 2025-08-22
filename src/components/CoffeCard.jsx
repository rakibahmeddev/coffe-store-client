import React from 'react';
import { IoMdEye } from 'react-icons/io';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeCard = ({ coffe }) => {
  const { _id, name, supplier, taste, photoUrl } = coffe;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // send delete request from here
        fetch(`http://localhost:3000/coffe/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  return (
    <div
      className="p-4 bg-[#F5F4F1] rounded-lg shadow-lg flex items-center 
                    transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* image area */}
      <div className="w-[25%]">
        <img
          className="rounded-md w-[80px] transition-transform duration-300 hover:scale-105"
          src={photoUrl}
          alt="officeImage"
        />
      </div>

      {/* contents area */}
      <div className="w-[65%]">
        <h3 className="text-[#331A15] text-base ml-2 mt-2">
          <b>Name: </b>
          <span className="">{name}</span>
        </h3>
        <p className="text-black font-semibold text-sm my-3 ml-2">
          Supplier: <span className="font-normal">{supplier}</span>
        </p>
        <p className="text-black font-semibold text-sm my-3 ml-2">
          Taste: <span className="font-normal">{taste}</span>
        </p>
      </div>

      {/* buttons area */}
      <div className="w-[15%]">
        <div className="flex flex-col justify-end items-end">
          <Link to={`coffeDetails/${_id}`}>
            <button
              type="button"
              className="bg-[#D2B48C] text-white cursor-pointer m-1 p-2 rounded 
                       transition-all duration-200 hover:bg-[#c19c73] hover:scale-110"
            >
              <IoMdEye />
            </button>
          </Link>

          <Link to={`updateCoffe/${_id}`}>
            <button
              type="button"
              className="bg-[#3C393B] text-white cursor-pointer m-1 p-2 rounded 
                       transition-all duration-200 hover:bg-[#2e2b2c] hover:scale-110"
            >
              <FaPenToSquare />
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            type="button"
            className="bg-[#EA4744] text-white cursor-pointer m-1 p-2 rounded 
                       transition-all duration-200 hover:bg-[#d33d3b] hover:scale-110"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
