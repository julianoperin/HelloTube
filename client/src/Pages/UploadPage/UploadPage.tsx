import React, { useState } from "react";
import "./UploadPage.css";
import UploadVideoForm from "./UploadVideoForm";

import { AiOutlineClose } from "react-icons/ai";
// import { MdFileUpload } from "react-icons/md";

const UploadPage: React.FC = () => {
  const [fileSelected, setFileSelected] = useState("");

  return (
    <div className="UploadPage">
      <div className="SelectFileContainer">
        <div className="top-upload">
          <div className="leftSide">
            <h2>Upload Videos</h2>
          </div>
          <div className="rightSide">
            <AiOutlineClose className="btn-upload-close" />
          </div>
        </div>
        <div className="body-upload">
          {fileSelected === "" ? (
            <>
              <input
                type="file"
                id="icon-upload"
                accept="video/mp4"
                style={{ display: "none" }}
              />
              <h3>Upload videos from your computer</h3>
              <p>Your videos will be private until you publish them.</p>
              <input
                type="file"
                id="uploadInput"
                accept="video/mp4"
                style={{ display: "none" }}
                onChange={(e) => setFileSelected(e.target.value)}
              />
              <div className="uploadButton">
                <label htmlFor="uploadInput">SELECT FILE</label>
              </div>
            </>
          ) : (
            <UploadVideoForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
