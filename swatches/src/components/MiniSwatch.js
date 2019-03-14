import React from "react";

const MiniSwatch = ({ backgroundColor, selectMiniSwatch }) => {
  return (
    <div className="mini-swatch-wrapper" onClick={selectMiniSwatch}>
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
