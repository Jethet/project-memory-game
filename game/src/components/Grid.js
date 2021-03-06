import React from "react";
import Cell from "./Cell";

function Grid() {
  return (
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
      </div>
      <div className="explanation-text">
        <h2 className="explanation-header">How to play:</h2>
        <p>Click the PLAY button and memorise the coloured cells.</p>
        <p>After the cells go white, click on the cells you want to colour. If you are correct, the cell with turn green. If you are wrong, the cell will return red.</p>
      </div>
    </div>
  );
}

export default Grid;
