import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="center">
        <Sidebar />
        <div className="videoView"></div>
      </div>
    </div>
  );
};

export default MainPage;
