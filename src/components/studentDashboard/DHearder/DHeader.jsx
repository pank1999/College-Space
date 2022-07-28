import { NotificationsNone,Settings,PowerSettingsNew} from "@material-ui/icons";
import React, { useState }  from "react";
import { Link } from "react-router-dom";
import "../../../css/Dashboard/Header.css";




function DHeader(propes){
   
    return(
      <div className="header">
           <div className="Dlogo">
                 <div style={{display:"flex"}}>
                     
                     <h2><Link to="/"> College Space </Link> </h2>
                 </div>
               
           </div>

           {/* <div className="Heading">
                 <h2 style={{marginLeft:"-170px"}}>{propes.title} {propes.sem}</h2>   
           </div> */}
           <div className="Logout">
                  <div className="icons">
                        <div className="Notificaton">
                            <span className="NotificationSpan">2</span><NotificationsNone style={{marginRight:"10px",cursor:"pointer"}}/>
                        </div>
                        
                        <Settings style={{marginRight:"10px",cursor:"pointer"}}/>
                        <PowerSettingsNew style={{marginRight:"10px",cursor:"pointer"}} /> 
                  </div>
               
           </div>
      </div>
    );
}

export  default DHeader;