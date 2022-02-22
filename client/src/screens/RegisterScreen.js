import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const RegisterScreen = () => {
  return (
    <Container className='p-5 d-flex justify-content-center align-items-center'>
      <Form className='w-75'>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>UserName</Form.Label>
          <Form.Control type='text' placeholder='Enter username' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' />
        </Form.Group>
        <Button variant='primary' >Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterScreen;
