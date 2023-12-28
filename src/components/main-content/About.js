import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import { Button } from "react-daisyui";

function About() {
  const navigate = useNavigate();
  const details = [
    {
      field: "Birthday",
      data: "23 Feb 2001",
    },
    {
      field: "Age",
      data: "23",
    },
    {
      field: "Website",
      data: "https://resume-yanshiuh.netlify.app/",
    },
    {
      field: "Email",
      data: "yanshiuh12372@gmail.com",
    },
    {
      field: "Degree",
      data: "Software Engineering",
    },
    {
      field: "Phone",
      data: "+6017-5809218",
    },
    {
      field: "State",
      data: "Kedah",
    },
    {
      field: "City",
      data: "Gurun",
    },
  ];
  const ratings = [
    {
      name: "HTML, CSS & JavaScript",
      rate: "60",
      styling: "w-[60%]",
    },
    {
      name: "Java",
      rate: "50",
      styling: "w-[50%]",
    },
    {
      name: "React.js",
      rate: "50",
      styling: "w-[50%]",
    },
    {
      name: "Next.js",
      rate: "45",
      styling: "w-[45%]",
    },
    {
      name: "Spring Boot",
      rate: "45",
      styling: "w-[45%]",
    },
  ];

  return (
    <div className="about bg-white rounded-2xl p-10 bg-opacity-80 overflow-y-scroll">
      <div className="title text-3xl font-bold flex items-center justify-between">
        <h1>About</h1>

        <Button className="bg-red-400" onClick={() => navigate("/contact")}>
          Contact Me
        </Button>
      </div>

      <div className="about-content">
        <div className="about-text">
          {/* <h2>
            I'm Yan Shiuh and <span>UM student</span>{" "}
          </h2> */}
          <p className="w-[800px]">
            Below are my personal details and some ratings about my skill on
            several programming languages or frameworks
          </p>
        </div>

        <div className="about-details">
          <div className="about-personal">
            {details.map((detail, i) => (
              <div className="personal-item" key={i}>
                <p>
                  {detail.field}:{" "}
                  <div className="font-normal">{detail.data}</div>
                </p>
              </div>
            ))}
          </div>

          <div className="about-skills">
            {ratings.map((skill, i) => (
              <div className="skill-item" key={i}>
                <div className="flex items-center justify-between">
                  <h5>{skill.name}</h5>
                  <p>{skill.rate}%</p>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-3xl">
                  <div
                    className={`${skill.styling} h-2 rounded-3xl bg-red-400`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
