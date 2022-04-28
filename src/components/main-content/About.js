import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="title">
        <h1>About</h1>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>
            I'm Yan Shiuh and <span>UM student</span>{" "}
          </h2>
          <p>
            A University Malaya student, studying Computer Science majoring in
            Software Engineering. I'm interested in Web Development. and I
            learnt HTML, CSS and JavaScript. There are few frameworks I learnt
            which are React and Express.
          </p>
        </div>

        <div className="about-details">
          <div className="about-personal">
            <div className="personal-item">
              <p>
                Birthday: <span>23 Feb 2001</span>
              </p>
            </div>
            <div className="personal-item">
              <p>
                Age: <span>21</span>
              </p>
            </div>
            <div className="personal-item">
              <p>
                Website: <span>www.domain.com</span>
              </p>
            </div>
            <div className="personal-item">
              <p>
                Email: <span>yanshiuh12372@gmail.com</span>
              </p>
            </div>
            <div className="personal-item">
              <p>
                Degree: <span>Software Engineering</span>
              </p>
            </div>
            <div className="personal-item">
              <p>
                Phone: <span>+6017-5809218</span>
              </p>
            </div>
            <div className="personal-item">
              <p>
                State:<span>Kedah</span>
              </p>
            </div>
            <div className="personal-item">
              <p>
                City: <span>Gurun</span>
              </p>
            </div>

            <div className="button">
              <button className="btn" onClick={() => navigate("/contact")}>
                Contact Me
              </button>
            </div>
          </div>

          <div className="about-skills">
            <div className="skill-item">
              <h5>HTML</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: "70%" }}></div>
                <div className="skill-percent">70%</div>
              </div>
            </div>

            <div className="skill-item">
              <h5>CSS</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: "50%" }}></div>
                <div className="skill-percent">50%</div>
              </div>
            </div>

            <div className="skill-item">
              <h5>JavaScript</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: "40%" }}></div>
                <div className="skill-percent">40%</div>
              </div>
            </div>

            <div className="skill-item">
              <h5>React</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: "40%" }}></div>
                <div className="skill-percent">40%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
