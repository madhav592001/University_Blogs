import axios from 'axios';
import {
  DELETE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  GET_BLOGS_FAIL,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  POST_BLOG_FAIL,
  POST_BLOG_REQUEST,
  POST_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
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

export const getBlogsById = (id) => async (dispatch) => {
  dispatch({ type: GET_BLOG_REQUEST });
  const res = await axios.get(`http://localhost:5000/blog/${id}`);

  if (res.status === 200) {
    dispatch({ type: GET_BLOG_SUCCESS, payload: res.data });
  }

  if (res.status === 500) {
    dispatch({ type: GET_BLOG_FAIL, payload: 'Something Error Occured!' });
  }
};

export const postBlog = (config) => async (dispatch) => {
  dispatch({ type: POST_BLOG_REQUEST });

  const data = {
    headers: {
      authorization: JSON.parse(localStorage.getItem('user')).accessToken,
    },
  };

  const res = await axios.post('http://localhost:5000/blog', config, data);

  console.log(res);

  if (res.status === 210) {
    dispatch({ type: POST_BLOG_FAIL, payload: res.data.message });
  }

  if (res.status === 200) {
    dispatch({ type: POST_BLOG_SUCCESS });
  }
};

export const deleteBlogById = (id) => async (dispatch) => {
  dispatch({ type: DELETE_BLOG_REQUEST });

  const data = {
    headers: {
      authorization: JSON.parse(localStorage.getItem('user')).accessToken,
    },
  };

  axios
    .delete(`http://localhost:5000/blog/${id}`, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_BLOG_SUCCESS });
    })
    .catch((err) => {
      if (err.response.status === 401) {
        dispatch({
          type: DELETE_BLOG_FAIL,
          payload: err.response.data.message,
        });
      } else {
        dispatch({ type: DELETE_BLOG_FAIL, payload: 'Internal Server Error!' });
      }
    });
};

export const updateBlogById = (id,config) => async(dispatch) => {

  dispatch({ type: UPDATE_BLOG_REQUEST });

  const data = {
    headers: {
      authorization: JSON.parse(localStorage.getItem('user')).accessToken,
    },
  };

  axios
    .put(`http://localhost:5000/blog/${id}`,config ,data)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_BLOG_SUCCESS });
    })
    .catch((err) => {
      if (err.response.status === 401) {
        dispatch({
          type: UPDATE_BLOG_FAIL,
          payload: err.response.data.message,
        });
      } else {
        dispatch({ type: UPDATE_BLOG_FAIL, payload: 'Internal Server Error!' });
      }
    });

}