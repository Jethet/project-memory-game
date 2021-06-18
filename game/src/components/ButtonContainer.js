import React from "react";

function ButtonContainer(props) {
  const handleClick = () => {
    let randomCells = props.selectRandom(7);
    props.colorCells(randomCells);
  };

  return (
    <div className="button-container">
      <button className="button-play" onClick={handleClick}>
        PLAY!
      </button>
      <button className="button-clear" onClick={props.resetGrid}>
        CLEAR
      </button>
    </div>
  );
}

export default ButtonContainer;
