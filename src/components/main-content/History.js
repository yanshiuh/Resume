import React from "react";
import "./History.css";
import TimelineItem from "./TimelineItem";

function History() {
  return (
    <div className="history">
      <div className="educations h-[600px]">
        <div className="title font-bold text-2xl">
          <h1>Educations</h1>
        </div>
        <div className="educations-timeline-box box-shadow overflow-y-scroll">
          <TimelineItem
            date={"2020 - now"}
            title={"University of Malaya"}
            text={
              <ul style={{ marginLeft: "20px" }}>
                <li>Bachelor of Computer Science (Software Engineering)</li>
                <br />
                <li>
                  Software Maintenance Job for MeMoSA web app (Front-end part -
                  React)
                </li>
                <br />
                <li>
                  Teaching Assistant / Lab Demonstrator for Fundamental of
                  Programming Course (Java)
                </li>
                <br />
                <li>Committee Member of Software Modeling Competition</li>
                <br />
                <li>CGPA 3.95</li>
                <br />
                <li>
                  <strong>Achievement:</strong> 2nd runner-up in Prosovle 2022
                  (Programming Competition from UiTM)
                </li>
              </ul>
            }
          />

          <TimelineItem
            date={"2019 - 2020"}
            title={"Kolej Matrikulasi Melaka"}
            text={
              <ul style={{ marginLeft: "20px" }}>
                <li>PSPM CGPA 4.0</li>
              </ul>
            }
          />

          <TimelineItem
            date={"2014 - 2018"}
            title={"Sekolah Menengah Kebangsaan Gurun"}
            text={
              <ul style={{ marginLeft: "20px" }}>
                <li>SPM 2018 - 7A+, 3A</li>
                <br />
                <li>President of Basketball Club</li>
                <br />
                <li>President of Mathematic Club</li>
                <br />
                <li>Active member of Taekwondo Club</li>
              </ul>
            }
          />
        </div>
      </div>

      <div className="educations h-[600px]">
        <div className="title font-bold text-2xl">
          <h1>Practices</h1>
        </div>
        <div className="educations-timeline-box box-shadow overflow-y-scroll">
          <TimelineItem
            date={""}
            title={"Amazon clone"}
            text={
              <ul style={{ marginLeft: "20px", fontSize: "17px" }}>
                <li>
                  React Router, Hooks API, Firebase Authentication, Firestore
                  Database are used in the website
                </li>
                <br />
                <li>
                  <a
                    style={{
                      fontSize: "15px",
                      fontWeight: "normal",
                      textDecoration: "underline",
                    }}
                    href="https://amazon-clone-yanshiuh.netlify.app"
                    target={"_blank"}
                  >
                    Link (Amazon Clone)
                  </a>
                </li>
              </ul>
            }
          />

          <TimelineItem
            date={""}
            title={"Card Memory Game"}
            text={
              <ul style={{ marginLeft: "20px" }}>
                <li>React, Hooks API are used in the website</li>
                <br />
                <li>
                  <a
                    style={{
                      fontSize: "15px",
                      fontWeight: "normal",
                      textDecoration: "underline",
                    }}
                    href="https://card-memory-game-ys.netlify.app"
                    target={"_blank"}
                  >
                    Link (Card Memory Game)
                  </a>
                </li>
              </ul>
            }
          />

          <TimelineItem
            date={""}
            title={"Task Tracker"}
            text={
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Hooks API, JSON document database are used in the website
                </li>
                <br />
                <li>
                  <a
                    style={{
                      fontSize: "15px",
                      fontWeight: "normal",
                      textDecoration: "underline",
                    }}
                    href="https://task-tracker-ys.netlify.app"
                    target={"_blank"}
                  >
                    Link (Task Tracker)
                  </a>
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default History;
