import React from "react";
import "./Navbar.css";

import { FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  return (
    <div className="navbarContainer">
      <div className="left">
        <button className="btn-burger">
          <GiHamburgerMenu id="burgerIcon" />
        </button>
        <FaYoutube id="youtubeIcon" />
        <h1>Hellotube</h1>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
  );
};

export default Navbar;
