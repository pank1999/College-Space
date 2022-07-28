import React, { useState } from "react";


function UploadSyllabus(){

    const [Syllabus,setSyllabus]=useState();

    function handleSubmit(e){

        fetch("/UploadSyllabus?sem=1",{
             method:"POST",
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify({Syllabus}) 
               
        }).then( ()=>{
               console.log("data sent");
        });
    }
    return(
       
        <div >

           <h2 style={{textAlign:"center",marginTop:"3%"}}>
                Upload Syllabus
           </h2>
            <form onSubmit={handleSubmit} >
                <input  type="file"  onChange={(e)=>{setSyllabus(e.target.value)}} value={Syllabus}   style={{marginLeft:"25%",fontSize:"20px",paddingTop:"5px",border:"1px solid black",height:"40px"}} />
                <button style={{marginLeft:"5%",cursor:"pointer",marginTop:"20px",border:"none",height:"43px",width:"100px",backgroundColor:"skyblue",marginBottom:"10%"}} >Upload</button>
            </form>
        </div>
    );
}

export default UploadSyllabus;