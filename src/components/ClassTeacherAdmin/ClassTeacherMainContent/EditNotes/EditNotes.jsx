import React, { useState } from "react";
import "../../../../css/ClassAdmin/EditNotes.css";

function EditNotes(){

    const [subject,setSubject]=useState();
    const [notesTitle,setNotesTitle]=useState("");
    const [Notes,setNotes]=useState();

    function handleSubmit(e){
        
    }
    return(
        <div className="container">
            <h1 style={{textAlign:"center",paddingTop:"20px"}}>Upload Notes</h1>
            <hr />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-element">
                       <label></label> <br />
                      <select name="subject"   onChange={(e)=>{setSubject(e.target.value)}} placeholder="Select">
                        <option value="subject-1">SELECT SUBJECT</option>
                        <option value="subject-2">subject-1</option>
                        <option value="subject-2">subject-2</option>
                        <option value="subject-3">subject-3</option>
                        <option value="subject-4">subject-4</option>
                        <option value="subject-5">subject-5</option>

                       </select>
                    </div>
                    <div className="form-element">
                          <label></label> <br />
                         <input name="Title"    onChange={(e)=>{setNotesTitle(e.target.value)}} value={notesTitle}  placeholder="Title of Notes"/>
                    </div>
                    <div className="form-element">
                         <label></label> <br />
                        <input type="file"    onChange={(e)=>{setNotes(e.target.value)}} value={Notes} />
                    </div>
                    <div className="form-element">
                     
                        <button  type="submit">Submit</button>
                    </div>
                   
                </form>
            </div>

        </div>
    );
}

export default EditNotes;