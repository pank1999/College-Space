import React from 'react';
import StudentCard from './StudentCard';
import "../../../css/StudentCorner/StudentCorner.css";

function StudentCorner(){
    return(
     <div className="studentCorner_container">
         <h1 style={{textAlign:"center"}}>Student's Corner</h1>
         <div className="Card_container" >
             <div style={{display:"flex"}}>
                 <StudentCard  btntext="video lecture" imgurl="videolectureimg.jpg"/>
                 <StudentCard btntext="syllabus" imgurl="syllabusimg.png"/>
                 <StudentCard btntext="certification" imgurl="notesimg.jpg"/>
             </div>
             <div style={{display:"flex"}}>
                 <StudentCard btntext="Notes" imgurl="notesimg.jpg"/>
                 <StudentCard btntext="Quizes" imgurl="quizesimg.png"/>
                 <StudentCard  btntext="TimeTable" imgurl="timetable.jpg"/>
             </div>
             
             


         </div>
     </div>
    );
}

export default StudentCorner;