import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";

import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiVideoPlus } from "react-icons/bi";
import { url } from "inspector";
import { ToggleSidebarContext } from "../../Helpers/Context";

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [profilePicture, setProfilePicture] = useState<string>("");
  const { showSidebar, setShowSidebar } = useContext(ToggleSidebarContext);

  useEffect(() => {
    if (sessionStorage.getItem("loggedIn") === "true") {
      setLoggedIn(true);
      setProfilePicture(sessionStorage.getItem("imageUrl") as string);
    }
  }, [sessionStorage.getItem("loggedIn")]);

  return (
    <div className="navbarContainer">
      <div className="left">
        <button
          className="btn-burger"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <GiHamburgerMenu id="burgerIcon" />
        </button>

        <div
          className="icon-logo"
          onClick={() => (window.location.pathname = "/")}
        >
          <FaYoutube id="youtubeIcon" />
          <h1>HelloTube</h1>
        </div>
      </div>
      <div className="center">
        <input type="text" className="searchBar" placeholder="Search" />
        <button className="btn-search">
          <FaSearch />
        </button>
      </div>
      <div className="right">
        <button className="create-video">
          <BiVideoPlus />
        </button>
        {loggedIn ? (
          <img
            className="profile-pic"
            src={profilePicture}
            onClick={() => (window.location.pathname = "/account")}
          />
        ) : (
          <button
            className="signIn-btn"
            onClick={() => {
              window.location.pathname = "/signin";
            }}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
