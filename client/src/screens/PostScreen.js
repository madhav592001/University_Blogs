import React, { useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { deleteBlogById, getBlogsById } from '../redux/actions/blogsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const PostScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogById = useSelector((state) => state.blog);
  const { loading, blog } = blogById;
  const deleteBlog = useSelector((state) => state.deleteBlog);
  const { deleting, error, deleted } = deleteBlog;

  useEffect(() => {
    dispatch(getBlogsById(id));
  }, [dispatch, id]);

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteBlogById(id));
  }

  function handleUpdate(e) {
    e.preventDefault();
    navigate(`/update/${id}`);
  }
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
          {deleting && (
            <div className='d-flex justify-content-center my-5'>
              <Spinner animation='border' role='status'>
                <span>deleting...</span>
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
          {deleted ? (
            <Alert
              className='w-100 d-flex justify-content-center my-5'
              variant='success'
            >
              Deleted Succesful
            </Alert>
          ) : (
            ''
          )}
          <img
            src='/assets/post.jpg'
            alt='post'
            className='w-100 mb-3 rounded'
            style={{ height: '400px', borderRadius: '5px', objectFit: 'cover' }}
          />
          <h3 className='text-center  '>
            {blog.title}
            <div className='float-end'>
              <button
                onClick={handleUpdate}
                className='bg-light border border-light'
              >
                <FaEdit fontSize={30} style={{ color: 'teal' }} />
              </button>
              <button
                onClick={handleDelete}
                className='bg-light border border-light'
              >
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
          <span>{blog.desc}</span>
        </>
      )}
    </Container>
  );
};

export default PostScreen;
