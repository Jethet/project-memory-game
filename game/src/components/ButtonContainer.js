import React, { useState } from "react";

function ButtonContainer(props) {
  const [disable, setDisable] = useState(false)

  // when the PLAY button is clicked, 7 random cells are selected and colorBlue is run
  const handleClick = () => {
    let randomCells = props.selectRandom(7);
    props.setCorrectChoices(randomCells)    
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
