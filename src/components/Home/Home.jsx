import React, { useState } from 'react';
import "../../js/Home";
import "../../css/Home.css";
import "../../js/Home.js";
import StudentCorner from './studentCorner/StudentCorner';
import {Link} from "react-router-dom";
import VideoDemo from './VideoDemo/VideoDemo';
import Footer from "../Footer/footer";
import {Settings} from "@material-ui/icons";

function Home(){
  const [search,setSearch]=useState(true);
  const handleClickSearch=()=>{
      console.log("click ");
      setSearch(!search);
  }
    return(
       <div id="main">
        <div className="nav">
          <div className="right">
              <h2>College Space</h2>
          </div>
          <div className="left">
            <div className="links">
         
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Courses">Course</Link>
          <Link to="/Teachers">Teacher</Link>
          <Link to="/Contact">Contact</Link>
          </div>
          <Link to="/signup"> <button className="signup-btn-header"> signup </button> </Link>
            <div className="searchInput">
               <input type="text" style={search?{display:"none"}:{}} placeholder='Search'/>
               <i className="ri-search-line" onClick={handleClickSearch} ></i>
            </div>
            
          </div>
          
        </div>
          <div id="bodyh">
             <div className="lmenu2"></div>
             <div className="image"></div>
              <h1>Get Anything Related To College.</h1>
               <h4 className="never">Never Stop Learning</h4>
               <button className="get"> <Link to="/Login">Get Started</Link></button>
                <h5 className="already">already a member?<Link to="/Login">Login Now</Link></h5> 
             </div>
             <Settings style={{top:"90vh",float:'right',marginTop:"85vh",fontSize:"50px",color:"red",position:"sticky"}} />
             <StudentCorner />
             <VideoDemo />
             <Footer />

      </div>
       
       
    );


}


export default Home ;