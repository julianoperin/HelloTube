import React from "react";

const UploadVideoForm: React.FC = () => {
  return (
    <div className="UploadVideoContainer">
      <label htmlFor="">Title</label>
      <input type="text" placeholder="title..." />
    </div>
  );
};

export default UploadVideoForm;
