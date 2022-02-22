import React from 'react';
import { Container } from 'react-bootstrap';
import { BsPenFill } from 'react-icons/bs';
import { Form, Button } from 'react-bootstrap';

const CreatePostScreen = () => {
  return (
    <Container>
      <h3 className='text-center my-3 text-decoration-underline '>
        Write Your Post <BsPenFill />
      </h3>
      <img src='/assets/post.jpg' style={{width:"100%",height:"250px",borderRadius:"10px",objectFit:"cover"}} />
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
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          PUBLISH
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePostScreen;
