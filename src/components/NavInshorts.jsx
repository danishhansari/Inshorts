import React from "react";
import "./Navinshorts.css";
import Hd from "./HamburgerDrawer";
const NavInshorts = () => {
  return (
    <div className="nav">
      <div className="icon">
        <Hd />
      </div>
      <img
        style={{ cursor: "pointer", height: "80%" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="100%"
        alt="Logo"
      />
    </div>
  );
};

export default NavInshorts;
