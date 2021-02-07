import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AccountPage.css";

const AccountPage: React.FC = () => {
  const [profileInfo, setProfileInfo] = useState<any>({
    channelName: "",
    profilePicture: "",
    email: "",
    name: "",
  });

  useEffect(() => {
    const id = sessionStorage.getItem("googleId");
    axios.get(`http://localhost:3001/user/${id}`).then((response) => {
      console.log(response.data[0]);
      setProfileInfo({
        channelName: response.data[0].channelName,
        profilePicture: response.data[0].profilePictureUrl,
        email: response.data[0].email,
        name: response.data[0].name,
        createdAt: response.data[0].createdAt,
      });
    });
  }, []);

  return (
    <div className="AccountPage">
      <div className="Container">
        <div className="TitleContainer">
          <h1>Account information</h1>
          <div className="BodyContainer">
            <h2>{profileInfo.channelName}</h2>
            <img src={profileInfo.profilePicture} alt="avatar" />
            <h2>{profileInfo.name}</h2>
            <h3>{profileInfo.email}</h3>
            <h3>{profileInfo.createdAt}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
