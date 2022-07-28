import React, { useState }  from "react";
import "../../css/Login.css";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


import axios from "axios";


function Login({setUserLogin}){

  const [user,setUser]=useState({
    email:"",
    password:""          
  });

  //const history=useHistory();

  const navigate=useNavigate();
  

  function handleSubmit(e){
    e.preventDefault();
      const {name,value}=e.target;
      setUser({
        ...user,
        [name]:value
      });
      
      try{
        console.log("dsdg")     
        axios.post("/Login",{email:"pankaj@gmail.com",password:'123456'}).then((res)=>{
          console.log("data") 
          console.log(res);
          setUserLogin(res.data);
          navigate("/Dashboard");
        });
      }catch(err){
         console.log(err);
      }
  }
       
      // axios.post("/Login",user).then(
      // res=>{
      //    console.log(res.data.user);
      //    setUserLogin(res.data.user);
      //    
      // }
    //);
 
  

  
    return(
        <div id="mainLogin">
        <div id="left">
          <div id="bcircle">
            <div id="scircle"></div>
          </div>
          <h1 className="welcome">welcome to VITS</h1>
          <div class="line"></div>
          <p class="para">VITS is known for its excellent faculty strength, <br />
            which synergizes brilliantly with the students. <br /> 
            We are perfectly aware of what to deliver & believe <br />
              in dynamic teaching utilizing the latest pedagogic <br />
              principles. The education at VITS does not end with <br />
            the course curriculum;</p>
            <button id="know">know More</button>
        </div>
        <div id="right">
          <div class="logo">
              <img  alt="logo" src="image/925717481s.jpg" height="65" width="60" />
          </div>
        
          <p class="account"> Dont Have a Account ?</p>
          <div class="line2"></div>
         <Link to="/Signup" > <button class="login">sign up</button> </Link>
          <h2 className="LoginSignup">Login</h2>
          <div class="line3"></div>
          <div class="center">
          <form onSubmit={handleSubmit}>
            <div class="txt_field">
              <input type="text" onChange={setUser} name="email" value={user.email} required />
              <span></span>
              <label for="">username</label>
            </div>
            <div class="txt_field">
              <input type="password" onChange={setUser} name="password" value={user.password} required />
              <span></span>
              <label for="">password</label>
            </div>
            
            <div class="pass">forget password</div>
            <input type="submit"  value="login" />
            <div class="signup_link">
              Not a member? <Link to="/Signup">signup</Link>
            </div>
          </form>
        </div>
        </div>
      </div>
    );
}


export default Login ;