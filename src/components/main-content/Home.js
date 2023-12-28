import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home bg-white rounded-2xl px-10 pl-12 bg-opacity-80">
      <div className="text">
        <div className="w-fit">
          <h1 className="typed-out">
            Hello, my name is{" "}
            <span className="font-semibold">Kee Yan Shiuh</span>
          </h1>
        </div>

        <div className="w-fit">
          <h3 className="typed-out2">
            I'm a <span className="font-semibold">Software Engineering </span>
            student
          </h3>
        </div>

        <p className="text-black font-medium w-[650px] leading-8">
          {" "}
          A University Malaya final year student, studying Computer Science
          majoring in Software Engineering. I'm interested in Web Development.
          and I learnt
          <span className="font-semibold ml-2">
            HTML, CSS and JavaScript.
          </span>{" "}
          There are few frameworks I learnt which are
          <span className="font-semibold ml-2">
            React.js, Next.js and Spring Boot.
          </span>
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
