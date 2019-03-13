import React from "react";
import MiniSwatch from "./MiniSwatch";

const DetailedView = ({ selectedSwatch, clearSelectedSwatch }) => {
  let miniSwatches = [];
  for (let i = 0; i < 5; i++) {
    miniSwatches.push(<MiniSwatch backgroundColor={selectedSwatch} />);
  }
  return (
    <div className="detailed-view-wrapper">
      <div className="large-display">
        <div
          className="large-swatch-color-box"
          style={{ backgroundColor: `${selectedSwatch}` }}
        />
        <div className="large-swatch-text-box">
          <p className="large-swatch-text">{selectedSwatch}</p>
        </div>
      </div>
      <div className="small-displays">{miniSwatches}</div>
      <div className="clear-btn-wrapper">
        <div className="clear-btn" onClick={clearSelectedSwatch}>
          Clear
        </div>
      </div>
    </div>
  );
};

export default DetailedView;
