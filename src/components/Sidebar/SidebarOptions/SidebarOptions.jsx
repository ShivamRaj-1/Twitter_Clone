
import React from "react";
import "./SidebarOptions.css";
import { Link } from "react-router-dom";


export default function SidebarOptions({ text, Icon, path }) {
  return (
    <div className="sidebarOptions">
      <Link to={path}>
        <Icon />
        <h2>{text}</h2>
      </Link>
    </div>
  );
}
