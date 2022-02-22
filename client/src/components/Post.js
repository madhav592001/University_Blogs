import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <Card>
      <Card.Img variant='top' src='/assets/post.jpg' />
      <Card.Body>
        <Card.Title>
          <h4>Card title</h4>
        </Card.Title>
        <Card.Text>
          <small>Category</small>
        </Card.Text>
        <hr />
        <Card.Text className='text-truncate text-justify'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          odsnfiojasdinfsdmuv8 fads f8j asdinvidsjviadshivasdijv iasdji0fj
          adsinf iadsjv sadup fiadsh guejuo fhgiasng up9hvinfu gh
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
