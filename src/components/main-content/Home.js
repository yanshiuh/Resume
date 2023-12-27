import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home bg-white rounded-2xl px-10 pl-12 bg-opacity-80">
      <div className="text">
        <h1>
          Hello, my name is <span className="font-semibold">Kee Yan Shiuh</span>
        </h1>
        <h3>
          I'm a <span className="font-semibold">Final year student</span>
        </h3>
        <p className="text-black font-semibold w-[650px] leading-8">
          {" "}
          A University Malaya student, studying Computer Science majoring in
          Software Engineering. I'm interested in Web Development. and I learnt
          HTML, CSS and JavaScript. There are few frameworks I learnt which are
          React and Express.
        </p>

        <button className="btn">
          <a
            style={{ color: "white" }}
            href={require("../../media/CV.pdf")}
            download={"Resume_KeeYanShiuh"}
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
