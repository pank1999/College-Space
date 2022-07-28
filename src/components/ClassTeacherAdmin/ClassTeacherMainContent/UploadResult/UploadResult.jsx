import React, { useState } from "react";



function UploadResult(){

    const [Result,setResult]=useState();

    function handleSubmit(e){
        
    }
    return(
        
        <div >
        <h2 style={{textAlign:"center",marginTop:"3%"}}>
             Upload MID SEM Result
        </h2>
        <form onSubmit={handleSubmit} >
            <input  type="file" onChange={(e)=>{setResult(e.target.value)}} value={Result}  style={{marginLeft:"25%",fontSize:"20px",paddingTop:"5px",border:"1px solid black",height:"40px"}} />
            <button style={{marginLeft:"5%",cursor:"pointer",marginTop:"20px",border:"none",height:"43px",width:"100px",backgroundColor:"skyblue",marginBottom:"10%"}} >Upload</button>
        </form>
     </div>
    );
}

export default UploadResult;