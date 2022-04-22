import axios from 'axios';
import {
  GET_BLOGS_FAIL,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS
} from '../constants/blogsConstants';

export const getBlogs = () => async (dispatch) => {
  dispatch({ type: GET_BLOGS_REQUEST });

  const res = await axios.get('http://localhost:5000/blog/');

  // console.log(res.data) ;

  if (res.status === 200) {
    dispatch({ type: GET_BLOGS_SUCCESS, payload: res.data });
  }

  if (res.status === 500) {
    dispatch({ type: GET_BLOGS_FAIL, payload: 'Something Error Occured!' });
  }
};

export const getBlogsById = (id) => async(dispatch) =>{
  dispatch({ type: GET_BLOG_REQUEST });
  const res = await axios.get(`http://localhost:5000/blog/${id}`);

  if (res.status === 200) {
    dispatch({ type: GET_BLOG_SUCCESS, payload: res.data });
  }

  if (res.status === 500) {
    dispatch({ type: GET_BLOG_FAIL, payload: 'Something Error Occured!' });
  }

}