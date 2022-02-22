import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  return (
    <Carousel style={{ height: '450px',width:"100%" }}>
      <Carousel.Item interval={2000}>
        <img
          className='d-block w-100'
          src='/assets/banner.jpg'
          alt='First slide'
          style={{ objectFit: 'contain', height: '450px' }}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className='d-block w-100'
          src='/assets/banner1.jpg'
          alt='Second slide'
          style={{ objectFit: 'contain', height: '450px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='/assets/banner2.jpg'
          alt='Third slide'
          style={{ objectFit: 'contain', height: '450px' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
