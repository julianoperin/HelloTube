import React, { useEffect } from "react";
import axios from "axios";
import "./AccountPage.css";

const AccountPage: React.FC = () => {
  useEffect(() => {
    const id = sessionStorage.getItem("googleId");
    axios.get(`http://localhost:3001/user/${id}`).then((response) => {
      console.log(response.data[0]);
    });
  }, []);
  return (
    <div className="AccountPage">
      <div className="Container">
        <div className="TitleContainer">
          <h1>Account information</h1>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
