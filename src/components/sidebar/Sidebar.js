import React, { useState } from "react";
import "../sidebar/Sidebar.css";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { BsFillPersonFill, BsListUl } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import Page from "./Page";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [activeHome, setActiveHome] = useState(true);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeHistory, setActiveHistory] = useState(false);
  const [activeProjects, setActiveProjects] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const location = useLocation();
  console.log(location.pathname);

  const setActive = (page) => {
    setActiveHome(false);
    setActiveAbout(false);
    setActiveHistory(false);
    setActiveProjects(false);
    setActiveContact(false);

    switch (page) {
      case "home":
        setActiveHome(true);
        break;
      case "about":
        setActiveAbout(true);
        break;
      case "history":
        setActiveHistory(true);
        break;
      case "projects":
        setActiveProjects(true);
        break;
      case "contact":
        setActiveContact(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`sidebar ${toggleSidebar ? " open" : ""}`}>
      <div className="logo">
        <a href="/">
          <h3>
            <span>Re</span>sume
          </h3>
        </a>
      </div>
      <div
        className="nav-toggler"
        onClick={() =>
          setToggleSidebar((prevToggleSidebar) => !prevToggleSidebar)
        }
      >
        <span></span>
      </div>

      <div className="nav">
        <div className="navbar">
          <Page
            to="/"
            link="Home"
            activeType={activeHome}
            iconDisplay={AiFillHome}
            click={() => setActive("home")}
          />
          <Page
            to="/about"
            link="About"
            activeType={activeAbout}
            iconDisplay={BsFillPersonFill}
            click={() => setActive("about")}
          />
          <Page
            to="/history"
            link="History"
            activeType={activeHistory}
            iconDisplay={BsListUl}
            click={() => setActive("history")}
          />
          <Page
            to="/projects"
            link="Projects"
            activeType={activeProjects}
            iconDisplay={AiFillAppstore}
            click={() => setActive("projects")}
          />
          <Page
            to="/contact"
            link="Contact"
            activeType={activeContact}
            iconDisplay={IoChatbubblesSharp}
            click={() => setActive("contact")}
          />

          {/* <div
            className={`link ${activeHome ? " active" : ""}`}
            onClick={() => setActive("home")}
          >
            <AiFillHome />
            <a href="#" onClick={(e) => e.preventDefault()}>
              Home
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
