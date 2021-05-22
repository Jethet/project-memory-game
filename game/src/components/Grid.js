import React from "react";
import Cell from "./Cell";

function Grid() {
  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
      <div className="button-container">
        <button className="button-play">PLAY</button>
        <button className="button-clear">CLEAR</button>
      </div>
     
    </div>
  );
}

export default Grid;
