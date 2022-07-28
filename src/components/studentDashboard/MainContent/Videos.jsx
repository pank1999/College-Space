import React from "react";
import Video from "./Video";

function Videos(){
    return(
      <div className="videos-container" style={{display:"flex",overflowX:"scroll",overflowY:"hidden"}}>
          <Video title="Topic 1" desc="Introduction"/>
          <Video title="Topic 2" desc="Introduction" />
          <Video title="Topic 3" desc="Introduction" />
          <Video title="Topic 4" desc="Introduction" />
          <Video title="Topic 1" desc="Introduction"/>
          <Video title="Topic 2" desc="Introduction" />
          <Video title="Topic 3" desc="Introduction" />
          <Video title="Topic 4" desc="Introduction" />
      </div>
    );
}

export default Videos;