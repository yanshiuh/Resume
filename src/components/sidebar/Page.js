import React from "react";
import "./Page.css";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { BsFillPersonFill, BsListUl } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Page({ to, link, activeType, iconDisplay, click }) {
  function renderIcon(iconDisplay) {
    switch (iconDisplay) {
      case AiFillHome:
        return <AiFillHome />;
      case AiFillAppstore:
        return <AiFillAppstore />;
      case BsFillPersonFill:
        return <BsFillPersonFill />;
      case BsListUl:
        return <BsListUl />;
      case IoChatbubblesSharp:
        return <IoChatbubblesSharp />;
      default:
        break;
    }
  }
  return (
    <Link to={to}>
      <div className={`link ${activeType ? " active" : ""}`} onClick={click}>
        {renderIcon(iconDisplay)}
        <h4>{link}</h4>
      </div>
    </Link>
  );
}

export default Page;
