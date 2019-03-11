import React, { Component } from "react";
import Swatch from "./Swatch";

const ListView = ({ swatches, currentColor, clearCurrentColor }) => {
  return <div className="list-view-wrapper">{swatches}</div>;
};

export default ListView;
