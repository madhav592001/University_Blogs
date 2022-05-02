
import { REGISTER_FAIL, REGISTER_REQUEST,REGISTER_SUCCESS } from "../constants/authConstants";
import axios from 'axios'

export const register = (config) => async(dispatch) =>{

    dispatch({type:REGISTER_REQUEST}) ; 

    if(config.pass !== config.cPass){
        dispatch({type:REGISTER_FAIL,payload:"Password and confirm Password should match"}) ; 
    }

    if(!config.email || !config.username || !config.pass || !config.cPass){
        dispatch({type:REGISTER_FAIL,payload:"Invalid Credentials"}) ;
    }

    const res = await axios.post('http://localhost:5000/auth/register',config);

    if(res.status === 200){
        dispatch({type:REGISTER_SUCCESS}) ; 
    }
    if(res.status === 201)
    {
        dispatch({type:REGISTER_FAIL,payload:"Email Alerady in use"}) ;
    }
}