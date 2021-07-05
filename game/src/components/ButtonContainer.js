import React, { useState } from "react";

function ButtonContainer(props) {
  const [disable, setDisable] = useState(false)

  // when the PLAY button is clicked, 7 random cells are selected and colorGame is run
  const handleClick = () => {
    let randomCells = props.selectRandom(7);
    props.setCorrectChoices(randomCells)    
    props.startGameTime(randomCells);
    // the PLAY button cannot be clicked again during the game
    setDisable(true)
  };

  return (
    <div className="button-container">
      <button className="button-play" disabled={disable} onClick={handleClick}>
        PLAY!
      </button>
      <button className="button-restart" onClick={props.restartGame}>
        RESTART
      </button>
    </div>
  );
}

export default ButtonContainer;
