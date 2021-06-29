import React from "react";

function Cell(props) {

  const handleClick = () => {
    // this checks if a cell(id) is in the random array
    if (props.correctChoices.includes(props.id)) {
      console.log("is in correctChoices",props.id, props.color);
      // if the cell is in the random array, it has to change color to green when clicked
      props.colorCells([props.id], "green")

    } else {
      props.colorCells([props.id], "red")
    }

    // props.correctChoices.includes(props.id) ? setColor("green") : setColor("red")
  };

  return (
    <div
      className="grid-cell"
      style={{ backgroundColor: props.color }}
      onClick={handleClick}
    ></div>
  );
}

export default Cell;
