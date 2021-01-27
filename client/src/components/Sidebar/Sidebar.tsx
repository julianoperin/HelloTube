import React from "react";

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div style={{ width: "200px" }}>
      <ul>
        {SidebarData.map((item, index) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
