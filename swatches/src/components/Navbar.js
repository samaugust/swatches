import React, { Component } from "react";
import logo from "./../logo.png";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="img-wrapper">
        <img src={logo} alt="New Engen Logo" />
      </div>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Navbar;
