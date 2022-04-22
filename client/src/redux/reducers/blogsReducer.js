import {
  GET_BLOGS_FAIL,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS
} from '../constants/blogsConstants';

export const allBlogsReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case GET_BLOGS_REQUEST:
      return { loading: true };

    case GET_BLOGS_SUCCESS:
      return { loading: false, blogs: action.payload };

    case GET_BLOGS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return { blogs: [] };
  }
};

export const blogReducer = (state = {blog:{}},action) => {
  switch (action.type) {
    case GET_BLOG_REQUEST:
      return { loading: true };

    case GET_BLOG_SUCCESS:
      return { loading: false, blog: action.payload };

    case GET_BLOG_FAIL:
      return { loading: false, error: action.payload };

    default:
      return { blog:{}};
  }
}