import { REGISTER_FAIL, REGISTER_REQUEST,REGISTER_SUCCESS } from "../constants/authConstants";

export const registerReducer = (state = { isRegistered:false }, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return { loading: true };
  
      case REGISTER_SUCCESS:
        return { loading: false, isRegistered:true };
  
      case REGISTER_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return {};
    }
  };