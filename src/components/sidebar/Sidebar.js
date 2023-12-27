import React, { useState } from "react";
import "../sidebar/Sidebar.css";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { BsFillPersonFill, BsListUl } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import Section from "./Section";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [activeHome, setActiveHome] = useState(true);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeHistory, setActiveHistory] = useState(false);
  const [activeProjects, setActiveProjects] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const location = useLocation();
  const routes = [
    {
      to: "/",
      link: "Home",
      activeType: activeHome,
      icon: AiFillHome,
      action: () => setActive("home"),
    },
    {
      to: "/about",
      link: "About",
      activeType: activeAbout,
      icon: BsFillPersonFill,
      action: () => setActive("about"),
    },
    {
      to: "/history",
      link: "History",
      activeType: activeHistory,
      icon: BsListUl,
      action: () => setActive("history"),
    },
    {
      to: "/projects",
      link: "Projects",
      activeType: activeProjects,
      icon: AiFillAppstore,
      action: () => setActive("projects"),
    },
    {
      to: "/contact",
      link: "Contact",
      activeType: activeContact,
      icon: IoChatbubblesSharp,
      action: () => setActive("contact"),
    },
  ];

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
    <div className={`sidebar ${toggleSidebar ? " open" : ""} bg-white`}>
      <div className="logo">
        <a href="/">
          <h3>
            <span>Ys&apos; </span>resume
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
          {routes.map((route) => (
            <Section
              to={route.to}
              link={route.link}
              activeType={route.activeType}
              iconDisplay={route.icon}
              click={route.action}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
