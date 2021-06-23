import React from "react";

function Cell(props) {
  const handleClick = () => {
    console.log("Clicked", props.id);
    let correctColor = "green"
    let incorrectColor = "red"
    if (props.id in props.correctChoices) {
      props.background = correctColor
    } else {
      props.background = incorrectColor
    }
  };

  return (
    <div
      className="grid-cell"
      style={{ background: props.color }}
      onClick={handleClick}
    ></div>
  );
}

export default Cell;
