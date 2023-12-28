import React from "react";
import { FcCalendar } from "react-icons/fc";

function TimelineItem({ date, title, text }) {
  return (
    <div className="timeline-item">
      <div className="circle-dot"></div>
      <h3 className="timeline-date">
        <FcCalendar />
        <span className="font-bold ">{date}</span>
      </h3>
      <h3 className="timeline-title font-semibold">{title}</h3>
      <p className="timeline-text">{text}</p>
    </div>
  );
}

export default TimelineItem;
