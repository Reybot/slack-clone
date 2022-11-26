import React from "react";
import "./SideBar.scss";
import { Hash } from "react-feather";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-channels">
        <li>
          <Hash />
          general
        </li>
        <li>
          <Hash />
          prog-hjälp
        </li>
        <li>
          <Hash />
          random
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
