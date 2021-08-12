import React from "react";

function Cell(props) {

  const handleClick = () => {
    // this checks if a cell id is in the random array
    if (props.correctChoices.includes(props.id)) {
      // if the cell is in the random array, it has to change color to green when clicked
      props.colorCells([props.id], "rgb(90, 63, 112)");
      props.setCount(props.count + 1);
    } else {
      props.colorCells([props.id], "rgb(169, 49, 44)");
    }
    setTimeout(stopTime, 5000);
  };

  const stopTime = () => {
    props.setDisableCells(true);
  };

  
  return (
    <button
      className="grid-cell"
      style={{ backgroundColor: props.color }}
      disabled={props.disableCells}
      onClick={handleClick}
    ></button>
  );
}

export default Cell;
