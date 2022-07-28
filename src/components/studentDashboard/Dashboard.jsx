import React  from "react";
import DHeader from "./DHearder/DHeader";
import MainContent from "./MainContent/MainContent";
import SideNavbar from "./SideNavbar/SideNavbar";
import {Routes} from "react-router-dom"


function Dashboard({userLogin}){
    return(
        <div>
           <DHeader title="Dashboard"/>
           <div style={{display:"flex"}}>
                <SideNavbar userLogin={userLogin} ClassAdmin={false}/>
                
                <div  style={{marginTop:"5%",marginLeft:"23%",marginRight:"5%",width:"100%",overflowX:"hidden"}}>
                   <MainContent/>
                </div>

               
                
                
              
            </div>
           
        </div>

    );
}


export default Dashboard;