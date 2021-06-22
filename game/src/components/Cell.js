import React, { useState, useEffect } from "react";

function Cell(props) {
  const [cellColor, setCellColor] = useState(props.color)
  console.log("First log:", cellColor);

  const handleClick = () => {
    // console.log("Clicked", props.color);
    console.log("Second log:", cellColor);
    
  }

  return (
    <div className="grid-cell" style={{ background: props.color }} onClick={handleClick}>
    </div>
  );
}

export default Cell;
