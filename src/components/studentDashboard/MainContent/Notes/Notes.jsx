import React from "react";
import NotesCard from "./NotesCard";



function Notes(){
  return(
     <div style={{marginLeft:"0%"}}>
          <h2 style={{padding:'10px',backgroundColor:"lightblue"}}>Notes</h2> 
         <div  style={{display:"flex"}}>
             <NotesCard  title="DSA" />
             <NotesCard  title="CD" />
             <NotesCard  title="COA"/>
         </div>
         <div  style={{display:"flex"}}>
             <NotesCard   title="DBMS"/>
             <NotesCard   title="CC"/> 
             <NotesCard  title="IOT" />
         </div>
        
     </div>
  );
}
export default Notes;