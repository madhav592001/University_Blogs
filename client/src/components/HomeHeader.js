import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ImageCarousel from './ImageCarousel';

const HomeHeader = () => {
  return (
    <>
      <ImageCarousel />
      <h2 className='text-center mt-4 '>CREATE YOUR BLOGS AND PUBLISH</h2>
    </>
  );
};

export default HomeHeader;
