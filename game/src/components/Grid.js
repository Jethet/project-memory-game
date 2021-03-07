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
      <div className="explanation-text">
        <h3 className="explanation-header">How to play:</h3>
        <p>Click the PLAY button and memorise the coloured cells.</p>
        <p>
          After the cells go white, click on the cells you want to colour. If you are
          correct, the cell with turn green. If you are wrong, the cell will return red.
        </p>
      </div>
    </div>
  );
}

export default Grid;
