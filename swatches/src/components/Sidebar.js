import React, { Component } from "react";

const Sidebar = ({ getRandomColor }) => {
  return (
    <div className="sidebar-wrapper">
      <div className="random-color-btn" onClick={getRandomColor}>
        <p className="random-color-text">Random Color</p>
      </div>
      <div className="color-category-wrapper">
        <p>Red</p>
        <p>Orange</p>
        <p>Yellow</p>
        <p>Green</p>
        <p>Blue</p>
        <p>Purple</p>
        <p>Brown</p>
        <p>Gray</p>
      </div>
    </div>
  );
};

export default Sidebar;
