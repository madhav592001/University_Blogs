import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../constants/authConstants';

export const registerReducer = (state = { isRegistered: false }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };

    case REGISTER_SUCCESS:
      return { loading: false, isRegistered: true };

    case REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return {};
  }
};


export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };

    case LOGIN_SUCCESS:
      return { loading: false, isLogin: true };

    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    
    case LOGOUT:
      return {isLogin:false}

    default:
      if(localStorage.getItem("user")){
        return {isLogin:true} ; 
      }
      else{
        return {} ; 
      }
  }
};
