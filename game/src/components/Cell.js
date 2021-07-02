import React from "react";

function Cell(props) {
  // const [disable, setDisable] = useState(false)

  const handleClick = () => { 
    // this checks if a cell id is in the random array
    if (props.correctChoices.includes(props.id)) {
      // if the cell is in the random array, it has to change color to green when clicked
      props.colorCells([props.id], "green")
    } else {
      props.colorCells([props.id], "red")
    }
    setTimeout(stopTime, 5000)
  };

  const stopTime = () => {
    props.setDisable(true)
  }

  return (
    <button
      className="grid-cell"
      style={{ backgroundColor: props.color }}
      disabled={props.disable}
      onClick={handleClick}
    ></button>
  );
}

export default Cell;
