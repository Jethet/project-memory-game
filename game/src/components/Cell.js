import React, { useState } from "react";

function Cell(props) {
  const [border, setBorder] = useState("1px solid grey");

  const handleClick = () => {
      // this checks if a cell id is in the random array
    if (props.correctChoices.includes(props.id)) {
      // if the cell is in the random array, it has to change color to green when clicked
      props.colorCells([props.id], "rgb(39, 108, 76)");
      props.setCount(props.count + 1)
    } else {
      props.colorCells([props.id], "rgb(169, 49, 44)");
    }
    setTimeout(stopTime, 5000);
  };

  const stopTime = () => {
    props.setDisableCells(true);
    showSolution();
  };

  const showSolution = () => {
    props.correctChoices.forEach(cell => setBorder([cell],"3px solid yellow"))

    // props.correctChoices.forEach((id) => {
    //   // props.setBorder([id.border], "3px solid yellow");
    //   console.log(props.color, props.id);
    // })

    // setTimeout(resetBorder(), 3000)
  };

  const resetBorder = () => {
    props.setBorder({ border: "1px solid lightgrey" });
  };

  return (
    <button
      className="grid-cell"
      style={{ backgroundColor: props.color, border: border }}
      disabled={props.disableCells}
      onClick={handleClick}
    ></button>
  );
}

export default Cell;
