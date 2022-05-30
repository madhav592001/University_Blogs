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

export const allBlogsReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case GET_BLOGS_REQUEST:
      return { loading: true };

    case GET_BLOGS_SUCCESS:
      return { loading: false, blogs: action.payload };

    case GET_BLOGS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const blogReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case GET_BLOG_REQUEST:
      return { loading: true };

    case GET_BLOG_SUCCESS:
      return { loading: false, blog: action.payload };

    case GET_BLOG_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const postBlogReducer = (state = { posted: false }, action) => {
  switch (action.type) {
    case POST_BLOG_REQUEST:
      return { loading: true };

    case POST_BLOG_SUCCESS:
      return { loading: false, posted: true };

    case POST_BLOG_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteBlogReducer = (state = { deleted: false }, action) => {
  switch (action.type) {
    case DELETE_BLOG_REQUEST:
      return { deleting: true };

    case DELETE_BLOG_SUCCESS:
      return { deleted: true, deleting: false };

    case DELETE_BLOG_FAIL:
      return { deleting: false, error: action.payload };

    default:
      return state;
  }
};

export const updateBlogReducer = (state = { updated: false }, action) => {
  switch (action.type) {
    case UPDATE_BLOG_REQUEST:
      return { updating: true };
    case UPDATE_BLOG_SUCCESS:
      return { updated: true, updating: false };
    case UPDATE_BLOG_FAIL:
      return { updating: false, error: action.payload };
    default:
      return state;
  }
};
