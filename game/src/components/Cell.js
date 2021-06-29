import React from "react";

function Cell(props) {

  const handleClick = () => {
    let newColor = props.color
    // this checks if a cell(id) is in the random array
    if (props.correctChoices.includes(props.id)) {
      console.log("is in correctChoices",props.id, props.color);
      // if it is in that array, the cell has to change color to green when clicked
      newColor = "green"
      console.log("this is after setColor", newColor);
    }
    // } else {
    //   setColor("red")
    // }

    // props.correctChoices.includes(props.id) ? setColor("green") : setColor("red")
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
