import React from "react";
import PracticesVideo from "./PracticesVideo";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects bg-white rounded-2xl p-10 bg-opacity-80">
      <div className="title font-bold text-3xl">
        <h1>Projects</h1>
      </div>

      <div className="heading font-semibold">
        <h2>My Practices:</h2>
      </div>

      <div className="projects-box">
        <div className="projects-box-row">
          {/* <div className="project-item box-shadow">
            <div className="project-img">
              <video autoPlay loop muted width={"300px"}>
                <source
                  src={require("../../media/videos/amazon-clone.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
              Amazon-clone
            </h3>
          </div> */}

          <PracticesVideo
            websiteLink="https://amazon-clone-yanshiuh.netlify.app"
            videoLink={require("../../media/videos/amazon-clone.mp4")}
            websiteName="Amazon clone"
          />

          <PracticesVideo
            websiteLink="https://card-memory-game-ys.netlify.app"
            videoLink={require("../../media/videos/memory-game.mp4")}
            websiteName="Card Memory Game"
          />

          <PracticesVideo
            websiteLink="https://task-tracker-ys.netlify.app"
            videoLink={require("../../media/videos/task-tracker.mp4")}
            websiteName="Task Tracker"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
