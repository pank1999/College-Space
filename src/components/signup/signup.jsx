import React,{useState,useEffect}  from "react";
import "../../css/Login.css";
import {Link} from "react-router-dom";
import Axios from "axios";




function Signup(){
    //const history= useHistory();
    const [name,setName]=useState('');
    const [rollNumber,setRollNumber]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    function handleSubmit(e){
      // e.preventDefault();
      console.log("send");
      console.log(name);
      const signupData={name,rollNumber,email,password,confirmPassword};
      Axios.post("/signup",{
           name:name,
           rollNumber:rollNumber,
           email:email,
           password:password,
           confirmPassword:confirmPassword
      }).then( (res)=>{
          console.log(res.data.success);
           {alert(res.data.success)};
            //history.push("/Dashboard");
          
         });

     } 

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
          <div class="logo" >
              <img  alt="logo" src="image/925717481s.jpg" height="65" width="60"/>
              
          </div>
        
          <p class="account"> Alredy Have a Account ?</p>
          <div class="line2"></div>
         <Link to="/Login"> <button class="login">Login</button></Link>
          <h2 style={{marginTop:"-20px"}} className="LoginSignup">Signup</h2>
          <div class="line3"></div>
          <div class="center">
          <form  onSubmit={handleSubmit}>
            <div class="txt_field">
              <input type="text" onChange={(e)=>{ setName(e.target.value); }} value={name} required />
              <span></span>
              <label for="">Name</label>
            </div>
            <div class="txt_field">
              <input type="number" onChange={(e)=>{ setRollNumber(e.target.value); }} value={rollNumber}  required />
              <span></span>
              <label for="">Roll Number</label>
            </div>
            <div class="txt_field">
              <input type="email" onChange={(e)=>{ setEmail(e.target.value); }} value={email}  required />
              <span></span>
              <label for="">Email</label>
            </div>
            <div class="txt_field">
              <input type="password" onChange={(e)=>{ setPassword(e.target.value); }}  value={password} required />
              <span></span>
              <label for="">password</label>
            </div>
            <div class="txt_field">
              <input type="password" onChange={(e)=>{ setConfirmPassword(e.target.value); }}  value={confirmPassword} required />
              <span></span>
              <label for=""> confirm password</label>
            </div>

            { /*
           <button type="submit">submit</button>
           */ 
            <input type="submit"   style={{marginBottom:"10px"}} value="Signup" />
           }
          </form>
        </div>
        </div>
      </div>
    );
}


export default Signup ;