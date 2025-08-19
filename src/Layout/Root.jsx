import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='max-w-full mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
