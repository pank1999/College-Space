import React from "react";
import "../../../../css/Dashboard/mainContent/Notes/NotesCard.css";


function NotesCard({title}){
  return(
     <div className="NotesCard">
       
         <h2 className="NotesSubject">{title}</h2>
         <div className="DownloadAndView">
              <i class="bi bi-arrow-down-square"></i>
              <i class="bi bi-box-arrow-up-right"></i>
         </div>
     </div>
  );
}
export default NotesCard;