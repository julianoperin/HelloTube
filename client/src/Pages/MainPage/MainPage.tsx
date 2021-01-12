import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="MainPage">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default MainPage;
