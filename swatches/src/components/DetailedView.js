import React, { Component } from "react";
import MiniSwatch from "./MiniSwatch";
import getShadedColors from "./../utils/colorShader";

class DetailedView extends Component {
  state = {
    largeDisplaySwatch: this.props.selectedSwatch
  };

  selectMiniSwatch = swatch => {
    this.setState({ largeDisplaySwatch: swatch });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedSwatch !== this.props.selectedSwatch) {
      this.setState({ largeDisplaySwatch: this.props.selectedSwatch });
    }
  }

  render() {
    const { selectedSwatch, clearSelectedSwatch } = this.props;
    const { largeDisplaySwatch } = this.state;
    const adjacentColors = getShadedColors(selectedSwatch);
    const miniSwatches = adjacentColors.map(color => {
      return (
        <MiniSwatch
          key={color}
          backgroundColor={color}
          selectMiniSwatch={() => this.selectMiniSwatch(color)}
        />
      );
    });
    return (
      <div className="detailed-view-wrapper">
        <div className="large-display">
          <div
            className="large-swatch-color-box"
            style={{ backgroundColor: `${largeDisplaySwatch}` }}
          />
          <div className="large-swatch-text-box">
            <p className="large-swatch-text">{largeDisplaySwatch}</p>
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
  }
}

export default DetailedView;
