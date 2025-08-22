import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeDetails = () => {
  const coffe = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, description, photoUrl } = coffe;

  return (
    <div>
      <h2>Coffe Details {name}</h2>
    </div>
  );
};

export default CoffeDetails;
