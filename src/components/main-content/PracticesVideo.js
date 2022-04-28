import React from "react";
import "./PracticesVideo.css";

function PracticesVideo({ websiteLink, videoLink, websiteName }) {
  return (
    <div className="project-item-wrapper">
      <div className="project-item box-shadow">
        <div className="project-img">
          <a href={websiteLink} target="_blank">
            <video autoPlay loop muted width={"300px"}>
              <source src={videoLink} type="video/mp4" />
            </video>
          </a>
        </div>
      </div>
      <h3 style={{ textAlign: "center", cursor: "pointer" }}>{websiteName}</h3>
    </div>
  );
}

export default PracticesVideo;
