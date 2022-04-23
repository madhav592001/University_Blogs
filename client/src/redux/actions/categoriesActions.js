import {GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS} from '../constants/categoriesConstants.js'
import axios from 'axios';

export const getAllCategories = () => async (dispatch) => {
    dispatch({ type: GET_CATEGORIES_REQUEST });
  
    const res = await axios.get('http://localhost:5000/blog/');
  
    // console.log(res.data) ;
  
    if (res.status === 200) {
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: res.data });
    }
  
    if (res.status === 500) {
      dispatch({ type: GET_CATEGORIES_FAIL, payload: 'Something Error Occured!' });
    }
  };