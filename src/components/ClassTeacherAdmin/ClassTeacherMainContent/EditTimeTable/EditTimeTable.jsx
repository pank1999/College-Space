import React, { useState } from "react";
import "../../../../css/ClassAdmin/EditTimeTable.css";



function EditTimeTable(){
    const [uploadTimeTable,setUploadTimeTable]=useState();

    const [MondaySub1,setMondaySub1]=useState("");
    const [MondaySub2,setMondaySub2]=useState("");
    const [MondaySub3,setMondaySub3]=useState("");
    const [MondaySub4,setMondaySub4]=useState("");
    const [MondaySub5,setMondaySub5]=useState("");
    const [MondaySub6,setMondaySub6]=useState("");


    const [TuesdaySub1,setTuesdaySub1]=useState("");
    const [TuesdaySub2,setTuesdaySub2]=useState("");
    const [TuesdaySub3,setTuesdaySub3]=useState("");
    const [TuesdaySub4,setTuesdaySub4]=useState("");
    const [TuesdaySub5,setTuesdaySub5]=useState("");
    const [TuesdaySub6,setTuesdaySub6]=useState("");

    const [WednesdaySub1,setWednesdaySub1]=useState("");
    const [WednesdaySub2,setWednesdaySub2]=useState("");
    const [WednesdaySub3,setWednesdaySub3]=useState("");
    const [WednesdaySub4,setWednesdaySub4]=useState("");
    const [WednesdaySub5,setWednesdaySub5]=useState("");
    const [WednesdaySub6,setWednesdaySub6]=useState("");

    const [ThursdaySub1,setThursdaySub1]=useState("");
    const [ThursdaySub2,setThursdaySub2]=useState("");
    const [ThursdaySub3,setThursdaySub3]=useState("");
    const [ThursdaySub4,setThursdaySub4]=useState("");
    const [ThursdaySub5,setThursdaySub5]=useState("");
    const [ThursdaySub6,setThursdaySub6]=useState("");
    
    const [FridaySub1,setFridaySub1]=useState("");
    const [FridaySub2,setFridaySub2]=useState("");
    const [FridaySub3,setFridaySub3]=useState("");
    const [FridaySub4,setFridaySub4]=useState("");
    const [FridaySub5,setFridaySub5]=useState("");
    const [FridaySub6,setFridaySub6]=useState("");

    
    const [SaturdaySub1,setSaturdaySub1]=useState("");
    const [SaturdaySub2,setSaturdaySub2]=useState("");
    const [SaturdaySub3,setSaturdaySub3]=useState("");
    const [SaturdaySub4,setSaturdaySub4]=useState("");
    const [SaturdaySub5,setSaturdaySub5]=useState("");
    const [SaturdaySub6,setSaturdaySub6]=useState("");


    function handleSubmitUpload(e){

    }

    function handleSubmit(e){

    }


    return(
        <div>
            <div>
                <h2 style={{textAlign:"center",marginTop:"3%"}}>
                    Upload Time Table
                </h2>
                <form onSubmit={handleSubmitUpload}>
                   <input  type="file"  onChange={(e)=>{setUploadTimeTable(e.target.value)}} value={uploadTimeTable} className="uploadInput" style={{marginLeft:"25%",paddingTop:"10px",height:"40px"}} />
                   <button style={{marginLeft:"5%",cursor:"pointer",marginTop:"20px",border:"none",height:"43px",width:"100px",backgroundColor:"skyblue"}}>Upload</button>
                </form>
            </div>
            <br />
            <p style={{textAlign:"center"}}>OR</p>
            <hr />
            <br />
            <h2  style={{textAlign:"center",textDecoration:"underline"}}>Edit Timetable</h2>
            <br />
            <form onSubmit={handleSubmit}>
            <table style={{marginLeft:"10%"}} cellSpacing="0" cellPadding="0" >  
                <tr>
                    <th>S.No</th>
                    <th>MONDAY</th>
                    <th>TUESDAY</th>
                    <th>WEDNESDAY</th>
                    <th>THURSDAY</th>
                    <th>FRIDAY</th>
                    <th>SATURDAY</th>

                </tr>
                <br />
                <tr>
                    <td>01</td>
                    <td> <input type="text" className="inputEditTable" onChange={(e)=>{setMondaySub1(e.target.value)}} value={MondaySub1} /> </td>
                    <td><input type="text" className="inputEditTable" onChange={(e)=>{setMondaySub2(e.target.value)}} value={MondaySub2} /></td>
                    <td><input type="text" className="inputEditTable" onChange={(e)=>{setMondaySub3(e.target.value)}} value={MondaySub3} /></td>
                    <td><input type="text" className="inputEditTable"  onChange={(e)=>{setMondaySub4(e.target.value)}} value={MondaySub4} /></td>
                    <td><input type="text" className="inputEditTable" onChange={(e)=>{setMondaySub5(e.target.value)}} value={MondaySub5} /></td>
                    <td><input type="text" className="inputEditTable" onChange={(e)=>{setMondaySub6(e.target.value)}} value={MondaySub6} /></td>
                </tr>
                <tr>
                    <td>02</td>
                    <td> <input type="text" value={TuesdaySub1} className="inputEditTable" onChange={(e)=>{setTuesdaySub1(e.target.value)}} /> </td>
                    <td><input type="text" value={TuesdaySub2} className="inputEditTable" onChange={(e)=>{setTuesdaySub2(e.target.value)}} /></td>
                    <td><input type="text" value={TuesdaySub3} className="inputEditTable" onChange={(e)=>{setTuesdaySub3(e.target.value)}}/></td>
                    <td><input type="text" value={TuesdaySub4} className="inputEditTable" onChange={(e)=>{setTuesdaySub4(e.target.value)}}/></td>
                    <td><input type="text" value={TuesdaySub5} className="inputEditTable" onChange={(e)=>{setTuesdaySub5(e.target.value)}}/></td>
                    <td><input type="text" value={TuesdaySub6} className="inputEditTable" onChange={(e)=>{setTuesdaySub6(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>03</td>
                    <td> <input type="text" value={WednesdaySub1} className="inputEditTable" onChange={(e)=>{setWednesdaySub1(e.target.value)}}/> </td>
                    <td><input type="text" value={WednesdaySub2} className="inputEditTable" onChange={(e)=>{setWednesdaySub2(e.target.value)}}/></td>
                    <td><input type="text" value={WednesdaySub3} className="inputEditTable" onChange={(e)=>{setWednesdaySub3(e.target.value)}}/></td>
                    <td><input type="text" value={WednesdaySub4} className="inputEditTable" onChange={(e)=>{setWednesdaySub4(e.target.value)}}/></td>
                    <td><input type="text" value={WednesdaySub5} className="inputEditTable" onChange={(e)=>{setWednesdaySub5(e.target.value)}}/></td>
                    <td><input type="text" value={WednesdaySub6} className="inputEditTable" onChange={(e)=>{setWednesdaySub6(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>04</td>
                    <td> <input type="text"  className="inputEditTable" onChange={(e)=>{setThursdaySub1(e.target.value)}} value={ThursdaySub1}/> </td>
                    <td><input type="text" className="inputEditTable" onChange={(e)=>{setThursdaySub2(e.target.value)}}  value={ThursdaySub2}/></td>
                    <td><input type="text"  className="inputEditTable" onChange={(e)=>{setThursdaySub3(e.target.value)}} value={ThursdaySub3}/></td>
                    <td><input type="text"  className="inputEditTable" onChange={(e)=>{setThursdaySub4(e.target.value)}} value={ThursdaySub4}/></td>
                    <td><input type="text"  className="inputEditTable" onChange={(e)=>{setThursdaySub5(e.target.value)}} value={ThursdaySub5}/></td>
                    <td><input type="text"  className="inputEditTable" onChange={(e)=>{setThursdaySub6(e.target.value)}} value={ThursdaySub6}/></td>
                </tr>
                <tr>
                    <td>05</td>
                    <td> <input type="text" onChange={(e)=>{setFridaySub1(e.target.value)}} value={FridaySub1} className="inputEditTable"/> </td>
                    <td><input type="text" onChange={(e)=>{setFridaySub2(e.target.value)}} value={FridaySub2} className="inputEditTable"/></td>
                    <td><input type="text" onChange={(e)=>{setFridaySub3(e.target.value)}} value={FridaySub3} className="inputEditTable"/></td>
                    <td><input type="text" onChange={(e)=>{setFridaySub4(e.target.value)}} value={FridaySub4} className="inputEditTable"/></td>
                    <td><input type="text" onChange={(e)=>{setFridaySub5(e.target.value)}} value={FridaySub5} className="inputEditTable"/></td>
                    <td><input type="text" onChange={(e)=>{setFridaySub6(e.target.value)}} value={FridaySub6} className="inputEditTable"/></td>
                </tr>
                <tr>
                    <td>06</td>
                    <td> <input type="text" onChange={(e)=>{setSaturdaySub1(e.target.value)}} value={SaturdaySub1} className="inputEditTable"/> </td>
                    <td><input type="text" onChange={(e)=>{setSaturdaySub2(e.target.value)}} value={SaturdaySub2} className="inputEditTable"/></td>
                    <td><input type="text" onChange={(e)=>{setSaturdaySub3(e.target.value)}} value={SaturdaySub3} className="inputEditTable"/></td>
                    <td><input type="text" onChange={(e)=>{setSaturdaySub4(e.target.value)}} value={SaturdaySub4} className="inputEditTable"/></td>
                    <td><input type="text" onChange={(e)=>{setSaturdaySub5(e.target.value)}} value={SaturdaySub5} className="inputEditTable"/></td>
                    <td><input type="text" onChange={(e)=>{setSaturdaySub6(e.target.value)}} value={SaturdaySub6} className="inputEditTable"/></td>
                </tr>

            </table>
          
            <div>
                <button style={{marginLeft:"85%",cursor:"pointer",marginTop:"20px",border:"none",height:"43px",width:"100px",backgroundColor:"skyblue"}}>Submit</button>
            </div>

            </form>
        </div>
    );
}

export default EditTimeTable;