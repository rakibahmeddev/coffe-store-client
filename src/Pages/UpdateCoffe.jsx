import { useLoaderData } from 'react-router-dom';
import bgImg from '../assets/images/more/bg2.png';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
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
  console.log(coffe);

  const handleUpdateCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const description = form.description.value;
    const photoUrl = form.photourl.value;

    const coffe = {
      name,
      quantity,
      supplier,
      taste,
      category,
      description,
      photoUrl,
    };
    console.log(coffe);

    // send data to the server
    fetch(`http://localhost:3000/coffe/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(coffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div
      className="bg-no-repeat bg-cover bg-center  p-22"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="py-10 bg-[#F4F3F0] ">
        <h1 className="text-4xl text-center font-semibold text-slate-700 pb-4">
          Update Coffe of : {name}
        </h1>
        <form
          onSubmit={handleUpdateCoffe}
          className="flex flex-col items-center text-sm"
        >
          {/* flex  */}
          <div className="w-full px-16">
            {/* add coffe name and quantity row  */}
            <div className="mb-3">
              <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                <div className="w-full">
                  <label className="text-black/70" htmlFor="name">
                    Coffe Name
                  </label>
                  <input
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none bg-white focus:border-[#e3b578]"
                    type="text"
                    name="name"
                    placeholder="Coffe Name"
                    defaultValue={name}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="text-black/70" htmlFor="name">
                    Available Quantity
                  </label>
                  <input
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none  bg-white focus:border-[#e3b578]"
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    defaultValue={quantity}
                    required
                  />
                </div>
              </div>
            </div>

            {/* supplier and taste row  */}
            <div className="mb-3">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full">
                  <label className="text-black/70" htmlFor="name">
                    Supplier
                  </label>
                  <input
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none  bg-white focus:border-[#e3b578]"
                    type="text"
                    name="supplier"
                    placeholder="Supplier"
                    defaultValue={supplier}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="text-black/70" htmlFor="name">
                    Taste
                  </label>
                  <input
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none  bg-white focus:border-[#e3b578]"
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    defaultValue={taste}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Category and Description row  */}
            <div className="mb-3">
              <div className="flex flex-col md:flex-row items-center gap-8 ">
                <div className="w-full">
                  <label className="text-black/70" htmlFor="name">
                    Category
                  </label>
                  <input
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none  bg-white focus:border-[#e3b578]"
                    type="text"
                    name="category"
                    placeholder="Category"
                    defaultValue={category}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="text-black/70" htmlFor="name">
                    Description
                  </label>
                  <input
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none  bg-white focus:border-[#e3b578]"
                    type="text"
                    name="description"
                    placeholder="Description"
                    defaultValue={description}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Photo url row  */}
            <div className="mb-3">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full">
                  <label className="text-black/70" htmlFor="name">
                    Photo URL
                  </label>
                  <input
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none  bg-white focus:border-[#e3b578]"
                    type="text"
                    name="photourl"
                    placeholder="Photo URL"
                    defaultValue={photoUrl}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Add Coffe"
            className="mt-5 bg-[#e3b578] text-[#372727] h-12 w-56 px-4 rounded active:scale-95 transition hover:border hover:border-[#e3b578] hover:bg-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffe;
