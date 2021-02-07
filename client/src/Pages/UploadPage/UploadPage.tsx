import React from "react";
import "./UploadPage.css";

import { AiOutlineClose } from "react-icons/ai";
// import { FaBeer } from 'react-icons/fa';

const UploadPage: React.FC = () => {
  return (
    <div className="UploadPage">
      <div className="SelectFileContainer">
        <div className="top-upload">
          <div className="leftSide">
            <h2>Upload Videos</h2>
          </div>
          <div className="rightSide">
            <AiOutlineClose className="btn-upload" />
          </div>
        </div>
        <div className="body-upload"></div>
      </div>
    </div>
  );
};

export default UploadPage;
