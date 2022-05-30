import React from 'react';
import { Container, Form, Button,Spinner, Alert } from 'react-bootstrap';
import axios from 'axios' ; 
import { logout } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const ProfileSettings = () => {
  const [profile, setProfile] = React.useState({
    email: '',
    username: '',
  });
  let dispatch = useDispatch() ; 
  const [loading, setLoading] = React.useState(false);
  const [updating,setUpdating] = React.useState(false) ; 
  const [deleting,setDeleting] = React.useState(false) ; 
  const [deleted,setDeleted] = React.useState(false) ; 
  const [updated,setUpdated] = React.useState(false) ; 
  const [error,setError] = React.useState("") ; 
  const [success,setSuccess] = React.useState("") ; 

  function getDetails() {
    setLoading(true);
    const data = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('user')).accessToken,
      },
    };

    axios
      .get('http://localhost:5000/user/', data)
      .then((res) => {
        console.log(res.data);
        setProfile({...profile,email:res.data.email,username:res.data.username})
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  React.useEffect(() => {
    getDetails() ; 
  }, [deleted,updated])

  function updateDetails(e){
    e.preventDefault() ; 
    setUpdating(true) ; 
    const data = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('user')).accessToken,
      },
    };
    
    axios.put("http://localhost:5000/user/",profile,data).then((res) => {
      console.log(res) ; 
      setUpdated(true) ; 
      setSuccess("User Updated Successfully")
      setUpdating(false) ; 
    }).catch((err) => {
      setError(err.response.data.message)
      setUpdating(false); 
    })
    
  }
  
  function deleteAccount(e){
    e.preventDefault() ; 
    setDeleting(true) ; 
    const data = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('user')).accessToken,
      },
    };

    axios.delete("http://localhost:5000/user/",data).then((res) => {
      console.log(res) ; 
      setDeleted(true) ; 
      setSuccess("User Deleted Successfully")
      dispatch(logout()) ; 
      setLoading(false) ; 
    }).catch((err) => {
      setError(err.response.data.message)
      setLoading(false) ; 
    })
    
  }

  return (
    <Container className='p-5'>
      {loading === true ? (
        <div className='d-flex justify-content-center mt-5'>
          <Spinner animation='border' role='status'>
            <span>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
        {
         ( updated || deleted ) && (
          <Alert
          className='w-100 d-flex justify-content-center my-5'
          variant='success'
        >
          {success}
        </Alert>
         )
        }
        {
         ( updating || deleting ) && (
          <div className='d-flex justify-content-center my-5'>
          <Spinner animation='border' role='status'>
            <span>{updating ? "updating" : "deleting"}</span>
          </Spinner>
        </div>
         )
        }
        {
          error && (
            <Alert
            className='w-100 d-flex justify-content-center my-5'
            variant='danger'
          >
            {error}
          </Alert>
          )
        }
          <div className='d-flex align-items-center justify-content-between'>
            <h3 className='text-success'>Update Your Account</h3>
            <small onClick={deleteAccount} style={{ color: 'red', cursor: 'pointer' }}>
              Delete Your Account
            </small>
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
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control value={profile.email} onChange={(e) => {setProfile({...profile,email:e.target.value})}} type='email' placeholder='name@example.com' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>User Name</Form.Label>
              <Form.Control value={profile.username} onChange={(e) => {setProfile({...profile,username:e.target.value})}} type='text' placeholder='user name' />
            </Form.Group>
            <Button variant='primary' onClick={updateDetails}>
              Update
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default ProfileSettings;
