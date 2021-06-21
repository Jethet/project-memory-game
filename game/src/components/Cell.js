import React from "react";

function Cell(props) {

  const handleClick = () => {
    console.log("Clicked", props.color);
  }

  return (
    <div className="grid-cell" style={{ background: props.color }} onClick={handleClick}>
    </div>
  );
}

export default Cell;
