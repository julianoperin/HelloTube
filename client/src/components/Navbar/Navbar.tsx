import React, { useState } from "react";
import "./Navbar.css";

import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAddToQueue } from "react-icons/md";

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="navbarContainer">
      <div className="left">
        <button className="btn-burger">
          <GiHamburgerMenu id="burgerIcon" />
        </button>
        <FaYoutube id="youtubeIcon" />
        <h1>Hellotube</h1>
      </div>
      <div className="center">
        <input type="text" className="searchBar" placeholder="Search" />
        <button className="btn-search">
          <FaSearch />
        </button>
      </div>
      <div className="right">
        <button className="create-video">
          <MdAddToQueue />
        </button>
        {loggedIn ? (
          <button className="profile-pic"></button>
        ) : (
          <button className="signIn-btn">Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
