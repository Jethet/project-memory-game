import React from "react";

function Cell(props) {
  
  const handleClick = () => {
    console.log("Clicked", props.id);
    let startColor = props.color
    let correctColor = "green"
    let incorrectColor = "red"
    if (props.correctChoices.includes(props.id)) {
      console.log(props.correctChoices);
      
      // startColor = correctColor
      
      // console.log(startColor);
      // console.log(correctColor);
      
    } else {
      startColor = incorrectColor
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
