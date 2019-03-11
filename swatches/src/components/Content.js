import React, { Component } from "react";
import Swatch from "./Swatch";

const Content = ({ swatches, currentColor, clearCurrentColor }) => {
  return currentColor ? (
    <div className="selected-swatch-wrapper">
      <div className="large-display">
        <div
          className="large-swatch-color-box"
          style={{ backgroundColor: `${currentColor}` }}
        />
        <div className="large-swatch-text-box">
          <p className="large-swatch-text">{currentColor}</p>
        </div>
      </div>
      <div className="small-displays" />
      <div className="clear-btn" onClick={clearCurrentColor}>
        Clear
      </div>
    </div>
  ) : (
    <div className="content-wrapper">{swatches}</div>
  );
};

export default Content;
