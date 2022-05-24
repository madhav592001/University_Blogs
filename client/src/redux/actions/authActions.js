import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../constants/authConstants';
import axios from 'axios';

export const register = (config) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  if (config.pass !== config.cPass) {
    dispatch({
      type: REGISTER_FAIL,
      payload: 'Password and confirm Password should match',
    });
  }

  if (!config.email || !config.username || !config.pass || !config.cPass) {
    dispatch({ type: REGISTER_FAIL, payload: 'Invalid Credentials' });
  }

  const res = await axios.post('http://localhost:5000/auth/register', config);

  if (res.status === 200) {
    dispatch({ type: REGISTER_SUCCESS });
  }
  if (res.status === 201) {
    dispatch({ type: REGISTER_FAIL, payload: 'Email Alerady in use' });
  }
};
export const login = (config) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  if (!config.email || !config.pass) {
    dispatch({ type: LOGIN_FAIL, payload: 'Invalid Credentials' });
  }

  const res = await axios.post('http://localhost:5000/auth/login', config);

  if (res.status === 200) {
     localStorage.setItem('user',JSON.stringify(res.data));
      dispatch({ type: LOGIN_SUCCESS });
  }
  if (res.status === 201 || res.status === 202) {
    dispatch({ type: LOGIN_FAIL, payload: 'Invalid Credentials' });
  }
};

export const logout = () => async(dispatch) => {

    localStorage.removeItem("user") ; 

    dispatch({type:LOGOUT}) ; 

}