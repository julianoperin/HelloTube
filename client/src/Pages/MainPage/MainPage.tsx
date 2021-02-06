import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainPage.css";

import { ToggleSidebarContext } from "../../Helpers/Context";

const MainPage = () => {
  const { showSidebar } = useContext(ToggleSidebarContext);

  return (
    <div className="MainPage">
      <div className="center">
        {showSidebar && <Sidebar />}

        <div className="videoView"></div>
      </div>
    </div>
  );
};

export default MainPage;
