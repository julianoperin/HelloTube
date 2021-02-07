import React from "react";
import "./UploadPage.css";

const UploadPage: React.FC = () => {
  return (
    <div className="UploadPage">
      <div className="SelectFileContainer">
        <div className="top-upload">
          <div className="leftSide"></div>
          <div className="rightSide"></div>
        </div>
        <div className="body-upload"></div>
      </div>
    </div>
  );
};

export default UploadPage;
