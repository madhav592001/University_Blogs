import React, { useEffect } from 'react';
import { Container, Alert, Spinner } from 'react-bootstrap';
import { BsPenFill } from 'react-icons/bs';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { updateBlogById } from '../redux/actions/blogsActions';

const UpdatePostScreen = () => {
  const { id } = useParams();
  const [loading,setLoading] = React.useState(false) ; 
  const [blog,setBlog] = React.useState({
      title:"",
      desc:"" 
  })

  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.updateBlog) ; 
  const {updating,updated,error} = updateState ; 

  function getBlogsById(){
    setLoading(true) ; 

    axios.get(`http://localhost:5000/blog/${id}`).then((res) => {
        console.log(res.data.title) ; 
        setBlog({...blog,title:res.data.title}) ; 
        setBlog({...blog,desc:res.data.desc})
        setLoading(false) ; 
    }).catch((err) => {
        console.log(err)
    })
  }

  useEffect(() => {
    getBlogsById() ; 
  }, [dispatch, id]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateBlogById(id,blog)) ; 
  }



  return (
    <Container>
      {loading === true ? (
        <div className='d-flex justify-content-center mt-5'>
          <Spinner animation='border' role='status'>
            <span>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
        {updating && (
            <div className='d-flex justify-content-center my-5'>
              <Spinner animation='border' role='status'>
                <span>updating...</span>
              </Spinner>
            </div>
          )}
          {error ? (
            <Alert
              className='w-100 d-flex justify-content-center my-5'
              variant='danger'
            >
              {error}
            </Alert>
          ) : (
            ''
          )}
          {updated ? (
            <Alert
              className='w-100 d-flex justify-content-center my-5'
              variant='success'
            >
              Updated Successfully
            </Alert>
          ) : (
            ''
          )}
          <h3 className='text-center my-3 text-decoration-underline '>
            Write Your Post <BsPenFill />
          </h3>
          <img
            alt='post'
            src='/assets/post.jpg'
            style={{
              width: '100%',
              height: '250px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
          <Form className='mt-3'>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Title Of the Post'
              className='rounded'
              autoFocus={true}
              value={blog.title}
              onChange={(e) => {setBlog({...blog,title:e.target.value})}}
            />
            <Form.Group
              className='mb-2 mt-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Control
                className='rounded'
                as='textarea'
                rows={12}
                placeholder='Tell Your Story.......'
                value={blog.desc}
                onChange={(e) => {setBlog({...blog,desc:e.target.value})}}
              />
            </Form.Group>
            <Button className='mb-5' variant='primary' onClick={handleSubmit}>
              UPDATE
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default UpdatePostScreen;
