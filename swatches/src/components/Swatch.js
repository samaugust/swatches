import React, { Component } from "react";

const Swatch = ({ backgroundColor, changeCurrentColor }) => {
  return (
    <div className="swatch-wrapper" onClick={changeCurrentColor}>
      <div
        className="swatch-color-box"
        style={{ backgroundColor: `${backgroundColor}` }}
      />
      <div className="swatch-title-box">
        <p className="swatch-title">{backgroundColor}</p>
      </div>
    </div>
  );
};

export default Swatch;
