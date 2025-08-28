import React from 'react';

const Users = () => {
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
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
