import {Outlet} from "react-router-dom";
import "../../../css/Dashboard/mainContent/MainContent.css";

function MainContent(){
    return (
        <div >
             <Outlet />
        </div>
        
     );
}

export default MainContent;