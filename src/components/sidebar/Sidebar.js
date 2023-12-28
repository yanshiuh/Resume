import React, { useEffect, useState } from "react";
import "../sidebar/Sidebar.css";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { BsFillPersonFill, BsListUl } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import Section from "./Section";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState("");

  const location = useLocation();
  const routes = [
    {
      to: "/",
      link: "Home",
      icon: AiFillHome,
    },
    {
      to: "/about",
      link: "About",
      icon: BsFillPersonFill,
    },
    {
      to: "/history",
      link: "History",
      icon: BsListUl,
    },
    {
      to: "/projects",
      link: "Projects",
      icon: AiFillAppstore,
    },
    {
      to: "/contact",
      link: "Contact",
      icon: IoChatbubblesSharp,
    },
  ];

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className={`sidebar bg-white`}>
      <div className="logo">
        <a href="/">
          <h3>
            <span>Ys</span> resume
          </h3>
        </a>
      </div>

      <div className="nav">
        <div className="navItem">
          {routes.map((route) => (
            <Section
              to={route.to}
              link={route.link}
              iconDisplay={route.icon}
              active={active}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
