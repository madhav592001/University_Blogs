import {
  GET_BLOGS_FAIL,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
} from '../constants/blogsConstants';

export const blogsReducer = (state = { blogs: [] }, action) => {
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
