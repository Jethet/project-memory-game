import React, { useState } from "react";

function GameExplanation() {
  const [count, setCount] = useState(0)

  return (
    <div className="explanation-text">
      <p>5 seconds to memorise the coloured circles</p>
      <p>5 seconds to click the right ones</p>
    </div>
  );
}

export default GameExplanation;
