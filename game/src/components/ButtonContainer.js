import React, { useState } from "react";

function ButtonContainer(props) {
  const [disable, setDisable] = useState(false)

  const handleClick = () => {
    let randomCells = props.selectRandom(7);
    props.colorBlue(randomCells);
    setDisable(true)
  };

  return (
    <div className="button-container">
      <button className="button-play" disabled={disable} onClick={handleClick}>
        PLAY!
      </button>
      <button className="button-clear" onClick={props.resetGrid}>
        CLEAR
      </button>
    </div>
  );
}

export default ButtonContainer;
