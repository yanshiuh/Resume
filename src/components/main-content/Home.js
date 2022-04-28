import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home ">
      <div className="text">
        <h1>
          Hello, my name is <span>Kee Yan Shiuh</span>
        </h1>
        <h3>
          I'm a <span>2nd year student</span>
        </h3>
        <p>
          {" "}
          A University Malaya student, studying Computer Science majoring in
          Software Engineering. I'm interested in Web Development. and I learnt
          HTML, CSS and JavaScript. There are few frameworks I learnt which are
          React and Express.
        </p>

        <button className="btn">
          <a
            style={{ color: "white" }}
            href={require("../../media/Resume_YanShiuh.pdf")}
            download={"Resume"}
          >
            Download CV
          </a>
        </button>
      </div>

      <div className="img">
        <div className="myphoto"></div>
      </div>
    </div>
  );
}

export default Home;
