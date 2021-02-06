import React from "react";
import "./Sidebar.css";

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div style={{ width: "250px" }}>
      <ul className="sidebarRows">
        {SidebarData.map((item, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => (window.location.pathname = item.path)}
            >
              <div
                id="iconContainer"
                className={
                  item.path === window.location.pathname ? "active" : ""
                }
              >
                {item.icon}
              </div>
              <div className="titleContainer">
                <h2>{item.title}</h2>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
