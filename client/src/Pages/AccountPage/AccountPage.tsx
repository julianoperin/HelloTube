import React, { useEffect } from "react";
import axios from "axios";

const AccountPage: React.FC = () => {
  useEffect(() => {
    const id = sessionStorage.getItem("googleId");
    axios.get(`http://localhost:3001/user/${id}`).then((response) => {
      console.log(response.data[0]);
    });
  }, []);
  return (
    <div>
      <h1>Account Page</h1>
    </div>
  );
};

export default AccountPage;
