import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";

export const login =async (dispatch,user)=>{
    dispatch(loginStart());
    try{
       const res= await axios.post("/api/Login",user);
       dispatch(loginSuccess(res.data));
    }catch(err){
       dispatch(loginFailure());
    }
 }