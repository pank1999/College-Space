import React, { useState }  from "react";
import NavBarItem from "../SideNavbar/NavBarItem";
import "../../../css/Dashboard/SideNavBar/SideNavbar.css";


function SideNavbar(props){
    const [hideShow,setHideShow]=useState(false);

    function hadleClick(){
            console.log("i am click");
            setHideShow(!hideShow);
      }
    
    return(
       <div className="sideNavbar"  style={ hideShow? {width:"300px"}:{width:"100px"}}>
           
           <div className="DashboardTop">
                <span className="DashboardTitle"> {hideShow?"Dashboard": ""}</span>
                <button  onClick={hadleClick}><i class={hideShow?"bi bi-x":"bi bi-chevron-double-right"}  style={{fontSize:"25px",color:"white",cursor:"pointer"}}></i></button> 
            </div>
            
           <div className="UserProfile">
              
               <div>
                   <img src="../../../image/pankajphoto.png" alt="img"/>
               </div>

               
                {hideShow?
                 <div className="details">
                   <p>pankaj pandey</p>
                   <p>0302CS181023</p>
                </div>:
                <div className="details" style={{display:"none"}}>
                   <p>Name</p>
                   <p>Roll Number</p>
                </div>
                }
               
           </div>
            {hideShow? 
           <div className="navbar">
              <NavBarItem  title="Time Table" iconName="bi bi-calendar-event" href="MainContent/TimeTable" Admin={props.ClassAdmin} ClassAdminHref="ClassTeacherMainContent/EditTimeTable"/>
              <NavBarItem  title="Video Lectures" iconName="bi bi-camera-video" href="MainContent/VideoLectures" Admin={props.ClassAdmin} ClassAdminHref="ClassTeacherMainContent/UploadVideos"/>
              <NavBarItem  title="Syllabus"  iconName="bi bi-book" href="MainContent/Syllabus" Admin={props.ClassAdmin} ClassAdminHref="ClassTeacherMainContent/UploadSyllabus"/>
              <NavBarItem title="Notes" iconName="bi bi-stack" href="MainContent/Notes" Admin={props.ClassAdmin} ClassAdminHref="ClassTeacherMainContent/EditNotes"/>
              <NavBarItem  title="Result" iconName="bi bi-graph-up-arrow" href="MainContent/Result" Admin={props.ClassAdmin} ClassAdminHref="ClassTeacherMainContent/UploadResult"/>
           </div> :
           <div className="navbar">
              <NavBarItem  iconName="bi bi-calendar-event" href="TimeTable" />
              <NavBarItem  iconName="bi bi-camera-video" href="VideoLectures"/>
              <NavBarItem  iconName="bi bi-book" href="Syllabus"/>
              <NavBarItem  iconName="bi bi-stack" href="Notes" />
              <NavBarItem  iconName="bi bi-graph-up-arrow" href="Result"/>
           </div>
            }


       </div>
    );
}

export  default  SideNavbar;