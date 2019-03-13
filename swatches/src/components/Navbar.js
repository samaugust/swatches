import React from "react";
import logo from "./../logo.png";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="left-nav-wrapper">
        <div className="menu-icon-wrapper">
          <div />
          <div />
          <div />
        </div>
        <div className="img-wrapper">
          <img src={logo} alt="New Engen Logo" />
        </div>
      </div>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Navbar;
