import React from "react";
import DHeader from "../studentDashboard/DHearder/DHeader";
import SideNavbar from "../studentDashboard/SideNavbar/SideNavbar";
import ClassTeacherMainContent from "./ClassTeacherMainContent/ClassTeacherMainContent";

function ClassTeacherAdmin(){
    return(
        <div>
          <DHeader title="Admin Dashboard" sem="1"/>
          <div style={{display:"flex"}}>
                <SideNavbar  ClassAdmin={true} />
                <div className="container" style={{marginTop:"5%",marginLeft:"23%",marginRight:"5%",width:"100%"}}>
                   <ClassTeacherMainContent />
                </div>
                

          </div>
        </div>
    );
}

export default ClassTeacherAdmin;