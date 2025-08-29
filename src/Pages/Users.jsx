import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { IoMdEye } from 'react-icons/io';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (id) => {
    console.log(id);

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
        fetch(`http://localhost:3000/users/${id}`, {
          method: 'Delete',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('deleted', data);

            if (data.deletedCount) {
              const remainings = users.filter((user) => user._id !== id);
              setUsers(remainings);

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
    <div className="w-full md:w-3/4 mx-auto rounded py-6 md:py-10">
      <h1 className="text-4xl text-center font-semibold text-slate-700 pb-4">
        Users
      </h1>

      {/* table  */}

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.accountCreationTime}</td>
                <td>
                  <button
                    type="button"
                    className="bg-[#D2B48C] text-white cursor-pointer m-1 p-2 rounded 
                                           transition-all duration-200 hover:bg-[#c19c73] hover:scale-110"
                  >
                    <IoMdEye />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    type="button"
                    className="bg-[#EA4744] text-white cursor-pointer m-1 p-2 rounded 
                                                       transition-all duration-200 hover:bg-[#d33d3b] hover:scale-110"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
