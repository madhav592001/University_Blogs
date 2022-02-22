import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ProfileSettings = () => {
  return (
    <Container className='p-5'>
      <div className='d-flex align-items-center justify-content-between'>
        <h3 className='text-success'>Update Your Account</h3>
        <small style={{color:"red",cursor:"pointer"}} >Delete Your Account</small>
      </div>
      <div
        className='w-100 d-flex justify-content-center'
        style={{ height: '300px' }}
      >
        <img
          alt='profile'
          className='rounded-circle'
          src='/assets/banner.jpg'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Form>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Update Image</Form.Label>
          <Form.Control type='file' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>User Name</Form.Label>
          <Form.Control type='text' placeholder='user name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default ProfileSettings;
