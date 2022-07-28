import React from "react";

function Video(){
    return(
        <div  style={{height:"150px",width:"200px",margin:"50px 20px"}}>
         
           <video width="200" height="150" controls style={{borderRadius:"10px",marginTop:"0px",boxShadow:"0px 0px 3px 3px gray"}}>
               <source src="../../../videos/youtube-intro-copy.mp4" type="video/mp4" />
               <source src="../../../videos/youtube-intro-copy.org" type="video/ogg" />
                       Your browser does not support the video tag.
          </video>
          <h3>title</h3>
          <p>Description</p>
            {/*
            <iframe  style={{borderRadius:"10px"}} width="150" height="100" src="https://www.youtube.com/embed/5_5oE5lgrhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             */}
        </div>
    );
}

export default Video;