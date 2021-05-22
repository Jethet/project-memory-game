import React from "react";

function GameExplanation() {
  
  return (
      <div className="explanation-text">
        <h3 className="explanation-header">How to play:</h3>
        <p>Click the PLAY button and memorise the coloured cells.</p>
        <p>
          After the cells go white, click on the cells you want to fill with colour. If
          you are correct, the cell with turn green. If you are wrong, the cell will
          return red.
        </p>
      </div>
  );
}

export default GameExplanation;
