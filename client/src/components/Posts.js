import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Post from './Post';
import { getBlogs } from '../redux/actions/blogsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const Posts = () => {
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.allBlogs);
  const { loading, blogs } = allBlogs;

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  //   console.log(blogs);

  return (
    <Container className='my-3'>
      {loading === true ? (
        <div className='d-flex justify-content-center mt-5'>
          <Spinner animation='border' role='status'>
            <span>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
        {
            blogs.map((blog)=>(
              <Col className='my-3' sm={12} md={4}>
                <Post blog={blog} />
              </Col>
            ))
        }
        </Row>
      )}
    </Container>
  );
};

export default Posts;
