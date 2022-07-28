import React from 'react';

function Header(){

   function nav_toggle(){

       if(document.querySelector(".inp-bar").value==="true"){
        document.querySelector("ul").style.display="block";
       }
       else{

        document.querySelector(".inp-bar").value="false";
        document.querySelector("ul").style.display="none";
       }
   }


return(
  /*
<nav class="navbar navbar-inverse bg-header">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div className="logo">
          <img src="image/925717481s.jpg" />
          <a class="navbar-brand" href="#">College Space</a>
      </div>
     
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class=""><a href="#">Home</a></li>
        
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Courses</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#"><span class=""></span> Sign Up</a></li>
        <li><a href="#"><span class=""></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav> */

        <div className="header">
            <div className="left-logo">
                <div className="logo">
                     <img src="../image/925717481s.jpg" alt="img"/>
                </div>
                <div className="Title">
                    <h1>VITS</h1>
                    <p>College Space</p>
                </div>
            </div>
            <div className="nav">
                 <ul>
                     <li>
                         <a href="">Home</a>
                     </li>
                     <li className="dropdown">
                         <a href="javascript:void(0)" className="dropbtn">Course</a>
                         <div className="dropdown-content">
                            <a href="#">CSE</a>
                            <a href="#">ME</a>
                            <a href="#">EE</a>
                         </div>
                    </li>
                     <li>
                         <a href="">About</a>
                     </li>
                     <li>
                         <a href="">Community</a>
                     </li>
                     <li>
                         <a href="">Contact</a>
                     </li>

                     

                 </ul>
                
                 
            </div>
            <div className="fa-bar">
               <input type="checkbox"  className="inp-bar" value="true" onClick={nav_toggle} /> <i className="bi bi-card-text"  ></i> 
            </div>
        </div>
    );
    
}



export default Header;