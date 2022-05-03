import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { register } from '../redux/actions/authActions';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.register);
  const { loading, isRegistered, error } = registerState;
  let navigate = useNavigate() ; 

  const [user, setUser] = useState({
    username: '',
    email: '',
    pass: '',
    cPass: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(register(user));
  };

  if(isRegistered){
    setTimeout(() => {
      navigate("/login")
    }, 5000);
  }

  return (
    <Container className='p-5 d-flex flex-column justify-content-center align-items-center'>
      {loading === true ? (
        <div className='d-flex justify-content-center mt-5'>
          <Spinner animation='border' role='status'>
            <span>Signing Up..</span>
          </Spinner>
        </div>
      ) : (
        ''
      )}
      {error ? (
        <Alert className='w-50' variant="danger">
        {error}
        </Alert>
      ) : (
        ''
      )}
      {
        isRegistered ? (
          <Alert className='w-50' variant="success">
            Registeration Successfull
          </Alert>
        ) : ""
      }
      <Form className='w-75'>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>UserName</Form.Label>
          <Form.Control
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type='text'
            placeholder='Enter username'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={user.pass}
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={user.cPass}
            onChange={(e) => setUser({ ...user, cPass: e.target.value })}
            type='password'
            placeholder='Confirm Password'
          />
        </Form.Group>
        <Button variant='primary' onClick={onSubmit}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterScreen;
