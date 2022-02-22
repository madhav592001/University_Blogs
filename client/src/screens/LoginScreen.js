import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <Container className='p-5 d-flex justify-content-center align-items-center'>
      <Form className='w-75'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Form.Group className='d-flex flex-column align-items-center justify-content-center' >
          <Button variant='primary' type='submit'>
            Login
          </Button>
          <h5 className='mt-5 text-danger'>Not Registered?</h5>
          <Link to='/register' className='btn btn-primary'>Register</Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LoginScreen;
