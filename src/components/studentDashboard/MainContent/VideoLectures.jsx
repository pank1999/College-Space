import React from "react";
import SubjectHeading from "./SubjectHeading";
import Videos from "./Videos";


function VideoLectures(){

  return(
      <div className="VedioLectures-container">
         <h2 style={{marginBottom:"50px",padding:"10px",backgroundColor:"lightgreen"}}>Vedio Lectures <i class="bi bi-camera-video"></i> </h2> 
         <div className="Inner-Container">
             <div>
                 <SubjectHeading title="Data Structure & Algorithm" />  
                 <Videos /> 
             </div>
             <div>
                 <SubjectHeading  title="DMBS" />  
                 <Videos /> 
             </div>
             <div>
                 <SubjectHeading title="cloud computing" />  
                 <Videos /> 
             </div>

                    
         </div>

      </div>
  );
}

export default VideoLectures;