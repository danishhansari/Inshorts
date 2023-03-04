import React from "react";
import "./Navinshorts.css";
import HamburgerDrawer from "./HamburgerDrawer";
const NavInshorts = ({setCategories }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategories={setCategories} />
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
