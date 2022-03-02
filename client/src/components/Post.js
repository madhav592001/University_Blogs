import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = ({blog}) => {
  return (
    <Card>
      <Card.Img variant='top' src='/assets/post.jpg' />
      <Card.Body>
        <Card.Title>
          <h4>{blog.title}</h4>
        </Card.Title>
        <Card.Text>
          <small>{blog.categories[0]}</small>
        </Card.Text>
        <hr />
        <Card.Text className='text-truncate text-justify'>
        {blog.desc}
        </Card.Text>
      </Card.Body>
      
      <div className='w-100 d-flex justify-content-center ' >
        <Link to={`/post/fj`} className='btn btn-info w-100'  >
          VIEW FULL
        </Link>
      </div>
      <Card.Footer>
        <small className='text-muted'>Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default Post;
