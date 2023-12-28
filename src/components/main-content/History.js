import React from "react";
import "./History.css";
import TimelineItem from "./TimelineItem";

function History() {
  const eduItems = [
    {
      date: "2020 - now",
      title: "University of Malaya",
      contents: [
        "Bachelor of Computer Science (Software Engineering)",
        "Software Maintenance Job for MeMoSA web app (Front-end part - React)",
        "Teaching Assistant / Lab Demonstrator for Fundamental of Programming Course (Java)",
        "Committee Member of Software Modeling Competition",
        "CGPA 3.95",
        "Achievement: 2nd runner-up in Prosovle 2022 (Programming Competition from UiTM)",
      ],
    },
    {
      date: "2019 - 2020",
      title: "Kolej Matrikulasi Melaka",
      contents: ["PSPM CGPA 4.0"],
    },
    {
      date: "2014 - 2018",
      title: "Sekolah Menengah Kebangsaan Gurun",
      contents: ["SPM 2018 - 7A+, 3A"],
    },
  ];
  const practiceItems = [
    {
      date: "Course Project (Concurrent Programming)",
      title: "Amogus",
      contents: [
        "An engaging multiplayer game utilizing concurrent programming principles",
        "FE - React.js & BE - Spring Boot",
        <a
          className="font-normal text-base text-gray-500 underline"
          href="https://amogus-five.vercel.app"
          target={"_blank"}
        >
          Link (Amogus)
        </a>,
      ],
    },
    {
      date: "Part Time Project",
      title: "OLa",
      contents: [
        "A web & mobile app to monitor heart disease patient",
        "Developed using React.js and Firebase",
        <a
          className="font-normal text-base text-gray-500 underline"
          href="https://ola-um.vercel.app"
          target={"_blank"}
        >
          Link (OLa)
        </a>,
      ],
    },
    {
      date: "",
      title: "Card Memory Game",
      contents: [
        "React, Hooks API are used in the website",
        <a
          className="font-normal text-base text-gray-500 underline"
          href="https://card-memory-game-ys.netlify.app"
          target={"_blank"}
        >
          Link (Card Memory Game)
        </a>,
      ],
    },
    {
      date: "",
      title: "Task Tracker",
      contents: [
        "Hooks API, JSON document database are used in the website",
        <a
          className="font-normal text-base text-gray-500 underline"
          href="https://task-tracker-ys.netlify.app"
          target={"_blank"}
        >
          Link (Task Tracker)
        </a>,
      ],
    },
  ];

  return (
    <div className="history">
      <div className="educations h-[600px]">
        <div className="title font-bold text-2xl">
          <h1>Educations</h1>
        </div>
        <div className="educations-timeline-box box-shadow overflow-y-scroll">
          {eduItems.map((item, i) => (
            <TimelineItem
              key={i}
              date={item.date}
              title={item.title}
              text={
                <ul className="list-disc ml-7">
                  {item.contents.map((content, key) => (
                    <li className="mb-2">{content}</li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </div>

      <div className="educations h-[600px]">
        <div className="title font-bold text-2xl">
          <h1>Projects / Practices</h1>
        </div>
        <div className="educations-timeline-box box-shadow overflow-y-scroll">
          {practiceItems.map((item, i) => (
            <TimelineItem
              key={i}
              date={item.date}
              title={item.title}
              text={
                <ul className="list-disc ml-7">
                  {item.contents.map((content, key) => (
                    <li className="mb-2">{content}</li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
