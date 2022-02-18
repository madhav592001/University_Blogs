import React from 'react';
import { Card, CardGroup, Button, ListGroup } from 'react-bootstrap';

const Post = () => {
  return (
    <Card className='rounded' >
      <Card.Img variant='top' src='/assets/post.jpg' />
      <Card.Body>
        <Card.Title>
          <h4>Card title</h4>
        </Card.Title>
        <Card.Text><small>Category</small></Card.Text>
        <hr />
        <Card.Text className='text-truncate text-justify'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer. odsnfiojasdinfsdmuv8 fads f8j asdinvidsjviadshivasdijv iasdji0fj adsinf iadsjv sadup fiadsh guejuo fhgiasng up9hvinfu gh
        </Card.Text>
        <Button variant='info' className='rounded' >VIEW</Button>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default Post;
