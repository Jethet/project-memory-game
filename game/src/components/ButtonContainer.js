import React from "react";

function GameExplanation(props) {

  const handleClick = () => {
    props.selectRandom(7)
  }

  return (
    <div className="button-container">
        <button className="button-play" onClick={handleClick}>PLAY!</button>
        <button className="button-clear">CLEAR</button>
      </div>
  )
}

  export default GameExplanation