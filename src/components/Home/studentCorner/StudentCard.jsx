import React from "react";
import "../../../css/StudentCorner/StudentCard.css";
function StudentCard(propes){
    return(
      <div className="studentCard_container">
          <div className="img-container">
                <img src={"image/"+propes.imgurl} alt="img" />
          </div>
          <br />
          <div className="button-container">
              <button>{propes.btntext}</button>
          </div>
      </div>
    );
}

export default StudentCard;