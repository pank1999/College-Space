import React from "react";

function SubjectHeading({title}){
    return(
       <div style={{borderBottom:"3px solid lightgreen",marginTop:"30px",backgroundColor:"lightgray"}}>
           <h1 style={{fontFamily:"serif",padding:"10px"}}>{title}</h1>
       </div>
    );
}

export default SubjectHeading;