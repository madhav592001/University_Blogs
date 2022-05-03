import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';
import { login } from '../redux/actions/authActions';
import { Navigate } from 'react-router-dom';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);

  const { error, isLogin, loading } = loginState;

  const [user, setUser] = useState({
    email: '',
    pass: '',
  });

  if (isLogin) {
    return <Navigate to='/' />;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  return (
    <Container className='p-5 d-flex flex-column justify-content-center align-items-center'>
      {error ? (
        <Alert className='w-50' variant='danger'>
          {error}
        </Alert>
      ) : (
        ''
      )}
      {loading === true ? (
        <div className='d-flex justify-content-center mt-5'>
          <Spinner animation='border' role='status'>
            <span>Logging In..</span>
          </Spinner>
        </div>
      ) : (
        ''
      )}
      {isLogin ? (
        <Alert className='w-50' variant='success'>
          Login Successfull
        </Alert>
      ) : (
        ''
      )}
      <Form className='w-75'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type='email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
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

        <Form.Group className='d-flex flex-column align-items-center justify-content-center'>
          <Button onClick={onSubmit} variant='primary'>
            Login
          </Button>
          <h5 className='mt-5 text-danger'>Not Registered?</h5>
          <Link to='/register' className='btn btn-primary'>
            Register
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LoginScreen;
