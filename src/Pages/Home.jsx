import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import CoffeCard from '../components/CoffeCard';
import CoffesContainer from '../components/Coffes';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const coffes = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <CoffesContainer coffes={coffes}></CoffesContainer>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
