import React,{ useState} from 'react';
import Dashboard from './studentDashboard/Dashboard';
import Login from './Login/login';
import Signup from './signup/signup';
import {Route,Routes,useRoutes} from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Home from './Home/Home';

import ClassTeacherAdmin from './ClassTeacherAdmin/ClassTeacherAdmin';
import EditTimeTable from "../components/ClassTeacherAdmin/ClassTeacherMainContent/EditTimeTable/EditTimeTable";
import UploadVideos from "../components/ClassTeacherAdmin/ClassTeacherMainContent/UploadVideos/UploadVideos";
import UploadSyllabus from "../components/ClassTeacherAdmin/ClassTeacherMainContent/UploadSyllabus/UploadSyllabus";
import EditNotes from "../components/ClassTeacherAdmin/ClassTeacherMainContent/EditNotes/EditNotes";
import UploadResult from "../components/ClassTeacherAdmin/ClassTeacherMainContent/UploadResult/UploadResult";


import TimeTable from './studentDashboard/MainContent/TimeTable';
import VideoLectures from './studentDashboard/MainContent/VideoLectures';
import Result from './studentDashboard/MainContent/Result/Result';

import Syllabus from './studentDashboard/MainContent/Syllabus/Syllabus';
import Notes from './studentDashboard/MainContent/Notes/Notes';
import MainContent from './studentDashboard/MainContent/MainContent';
import ClassTeacherMainContent from './ClassTeacherAdmin/ClassTeacherMainContent/ClassTeacherMainContent';


function App(){

  //const [userLogin,setUserLogin]=useState({});
  const userLoggedIn=useSelector((state)=>state.user.currentUser);
  const navigate=useNavigate();

    return(

       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/Login' element={ userLoggedIn? <Dashboard /> :<Login   />}/>
           <Route  path='/Signup' element={ userLoggedIn && userLoggedIn._id ? <Dashboard  /> : <Signup />} />
           <Route exact path='/Dashboard'  element={<Dashboard />}>
           <Route exact path='/Dashboard/MainContent'  element={<MainContent/> }>
                    <Route  path='/Dashboard/MainContent/TimeTable'  element={<TimeTable />}  />
                        <Route exact path='/Dashboard/MainContent/VideoLectures' element={<VideoLectures />}  />
                        <Route exact path='/Dashboard/MainContent/Syllabus' element={<Syllabus />}  />
                        <Route exact path='/Dashboard/MainContent/Notes' element={<Notes />}  />
                        <Route exact path='/Dashboard/MainContent/Result' element={<Result />}  />
                   </Route> 
           </Route>
           <Route path='/ClassTeacherAdmin' element={<ClassTeacherAdmin />}> 
                <Route path='/ClassTeacherAdmin/ClassTeacherMainContent' element={<ClassTeacherMainContent /> }>
                     <Route path='/ClassTeacherAdmin/ClassTeacherMainContent/UploadVideos' element={<UploadVideos />} />
                     <Route path='/ClassTeacherAdmin/ClassTeacherMainContent/UploadSyllabus' element={<UploadSyllabus />} />
                     <Route path='/ClassTeacherAdmin/ClassTeacherMainContent/EditNotes' element={<EditNotes />} />
                     <Route path='/ClassTeacherAdmin/ClassTeacherMainContent/EditTimeTable' element={<EditTimeTable />} />
                     <Route path='/ClassTeacherAdmin/ClassTeacherMainContent/UploadResult' element={<UploadResult />} />
                </Route>
           </Route>
           
          
       </Routes>



      // useRoutes([

      //   { path: "/", element: <Home /> },
        
      //   { path: "/Login", element: <Login setUserLogin={setUserLogin} /> },
      //   { path: "/Signup", element:   userLogin && userLogin._id ? <Dashboard /> : <Signup /> },
        
      //   { path: "/ClassTeacherAdmin", element: <ClassTeacherAdmin /> },
      //   { path: "/ClassTeacherAdmin/UploadVideos", element: <UploadVideos/> },
      //   { path: "/ClassTeacherAdmin/UploadSyllabus", element: <UploadSyllabus /> },
      //   { path: "/ClassTeacherAdmin/EditNotes", element: <EditNotes /> },
      //   { path:"/ClassTeacherAdmin/EditTimeTable" ,element:<EditTimeTable />},

      //   { path: "/Dashboard/*", element: <Dashboard /> },
        

      // ])

    );
}



export default App;