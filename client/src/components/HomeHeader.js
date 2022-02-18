import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const HomeHeader = () => {
  return (
    <>
      <img
        src='/assets/banner.jpg'
        className='img-fluid'
        style={{ width: '100%', height: '470px' }}
      />
      <h2 className='text-center mt-4 '>CREATE YOUR BLOGS AND PUBLISH</h2>
    </>
  );
};

export default HomeHeader;
