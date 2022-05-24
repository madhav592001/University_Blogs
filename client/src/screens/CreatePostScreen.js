import React from 'react';
import { Container,Alert ,Spinner } from 'react-bootstrap';
import { BsPenFill } from 'react-icons/bs';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { postBlog } from '../redux/actions/blogsActions';

const CreatePostScreen = () => {
  let dispatch = useDispatch();

  const postBlogStatus = useSelector((state) => state.postBlog);

  const { posted, error, loading } = postBlogStatus;

  const [blog, setBlog] = React.useState({
    image: '',
    title: '',
    desc: '',
  });

  const config = {
    ...blog,
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postBlog(config));
    // console.log(config)
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
        ''
      )}
      {error ? (
        <Alert className='w-100 d-flex justify-content-center my-5' variant='danger'>
          {error}
        </Alert>
      ) : (
        ''
      )}
      {posted ? (
        <Alert className='w-100 d-flex justify-content-center my-5' variant='success'>
          Blog Published Suceessfully
        </Alert>
      ) : (
        ''
      )
        
    }
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
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Enter Image</Form.Label>
          <Form.Control type='file' />
        </Form.Group>
        <Form.Control
          size='lg'
          type='text'
          placeholder='Title Of the Post'
          className='rounded'
          autoFocus={true}
          value={blog.title}
          onChange={(e) => {
            setBlog({ ...blog, title: e.target.value });
          }}
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
            onChange={(e) => {
              setBlog({ ...blog, desc: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant='primary' onClick={handleSubmit}>
          PUBLISH
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePostScreen;
