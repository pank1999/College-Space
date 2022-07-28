import React  from "react";
import {Link} from "react-router-dom";
import "../../../css/Dashboard/SideNavBar/NavBarItem.css";
//import * as bi from "bootstrap-icons";
function NavBarItem(propes){
    return(
        <div className="NavItem">
            <div>
            <i className={propes.iconName} style={{fontSize:"20px"}}></i>
            </div>
            <div>
                {
                    propes.Admin?
                    <Link to={propes.ClassAdminHref}  className="linkItem">{propes.title}</Link>    
                     :
                    <Link to={""+propes.href}  className="linkItem">{propes.title}</Link>    
                }
            </div>
        </div>
    );
}

export default NavBarItem;