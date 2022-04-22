import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { getBlogsById } from '../redux/actions/blogsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const PostScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogById = useSelector((state) => state.blog);
  const { loading, blog } = blogById;

  useEffect(() => {
    dispatch(getBlogsById(id));
  }, [dispatch]);

  // console.log(blog)

  return (
    <Container className='py-4'>
      {loading === true ? (
        <div className='d-flex justify-content-center mt-5'>
          <Spinner animation='border' role='status'>
            <span>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <img
            src='/assets/post.jpg'
            alt='post'
            className='w-100 mb-3 rounded'
            style={{ height: '400px', borderRadius: '5px', objectFit: 'cover' }}
          />
          <h3 className='text-center  '>
            {blog.title}
            <div className='float-end'>
              <button className='bg-light border border-light'>
                <FaEdit fontSize={30} style={{ color: 'teal' }} />
              </button>
              <button className='bg-light border border-light'>
                <MdDelete style={{ color: 'red' }} fontSize={30} />
              </button>
            </div>
          </h3>
          <br />
          <div className='d-flex flex-row justify-content-between'>
            <h5>
              <strong>By {blog.username}</strong>
            </h5>
            <small>
              <span style={{ color: '#D29D2B' }}> 1 hours ago</span>
            </small>
          </div>
          <hr />
          <span>
          {blog.desc}
          </span>
        </>
      )}
    </Container>
  );
};

export default PostScreen;
