import React from "react";

const MiniSwatch = ({ backgroundColor }) => {
  return (
    <div className="mini-swatch-wrapper">
      <div
        className="mini-swatch-color-box"
        style={{ backgroundColor: `${backgroundColor}` }}
      />
      <div className="mini-swatch-title-box">
        <p className="mini-swatch-title">{backgroundColor}</p>
      </div>
    </div>
  );
};

export default MiniSwatch;
