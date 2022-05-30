import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{ minHeight: '20rem',marginTop:"10%" }} className='w-100 bg-primary text-white'>
      <Container>
        <div className='w-100 p-5'>
          <h3 className='text-white text-center'>Team Members</h3>
          <div className=' d-flex px-3 justify-content-around mt-3 '>
            <b>Madhav Shukla (191B148)</b>
            <b>Ritul Jain (191B200)</b>
            <b>Yash Raghuwanshi (191B148)</b>
          </div>
        </div>
        <hr />
        <div className='w-100 d-flex justify-content-center align-items-center'>
          <b className='text-center'>
            Sourch Code: <a>https://github.com/madhav592001/University_Blogs</a>{' '}
          </b>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
