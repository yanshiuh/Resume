import React from "react";
import PracticesVideo from "./PracticesVideo";
import "./Projects.css";

function Projects() {
  const items = [
    {
      name: "Amogus",
      link: "https://amogus-five.vercel.app",
      video: require("../../media/videos/Amogus.mp4"),
    },
    {
      name: "OLa",
      link: "https://ola-um.vercel.app",
      video: require("../../media/videos/OLa.mp4"),
    },
    {
      name: "Card Memory Game",
      link: "https://card-memory-game-ys.netlify.app",
      video: require("../../media/videos/memory-game.mp4"),
    },
    {
      name: "Task Tracker",
      link: "https://task-tracker-ys.netlify.app",
      video: require("../../media/videos/task-tracker.mp4"),
    },
  ];

  return (
    <div className="projects bg-white rounded-2xl p-10 bg-opacity-80 overflow-y-scroll">
      <div className="title font-bold text-3xl">
        <h1>Projects</h1>
      </div>

      <div className="font-semibold text-center text-xl">
        <h2>My Project / Practices:</h2>
      </div>

      <div className="projects-box">
        <div className="projects-box-row">
          {items.map((item, i) => (
            <PracticesVideo
              websiteName={item.name}
              websiteLink={item.link}
              videoLink={item.video}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
