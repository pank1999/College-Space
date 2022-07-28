import React, { useState } from "react";
import "../../../../css/ClassAdmin/EditNotes.css";

function UploadVideos(){

    const [titleVideo,setTitleVideo]=useState("");
    const [videoSubject,setVideoSubject]=useState("");
    const [video,setVideo]=useState();


    function handleSubmit(e){
        // e.preventDefault();
        // console.log("send");
        // console.log(name);
         //onst signupData={name,rollNumber,email,password,confirmPassword};
        // fetch("/signup",{
          // method:"POST",
           //headers:{"Content-Type":"application/json"},
           //body:JSON.stringify(signupData) 
         //}).then( ()=>{
           //console.log("data sent");
     };


    return(
        <div className="container">
            <h1 style={{textAlign:"center",paddingTop:"20px"}}>Upload Videos</h1>
            <hr />
            <div className="form-container">
                <form  onSubmit={handleSubmit}>
                    <div className="form-element">
                       <label></label> <br />
                      <select name="subject"  onChange={(e)=>{setVideoSubject(e.target.value)}} placeholder="Select">
                        <option value="subject 1">SELECT SUBJECT</option>
                        <option value="subject-2">subject-1</option>
                        <option value="subject-2">subject-2</option>
                        <option value="subject-3">subject-3</option>
                        <option value="subject-4">subject-4</option>
                        <option value="subject-5">subject-5</option>

                       </select>
                    </div>
                    <div className="form-element">
                          <label></label> <br />
                         <input name="Title"  placeholder="Title of Video" onChange={(e)=>{setTitleVideo(e.target.value)}} value={titleVideo}/>
                    </div>
                    <div className="form-element">
                         <label></label> <br />
                        <input type="file"  onChange={(e)=>{setVideo(e.target.value)}} value={video} />
                    </div>
                    <div className="form-element">
                     
                        <button  type="submit">Submit</button>
                    </div>
                   
                </form>
            </div>
        </div>
    );
}

export default UploadVideos;