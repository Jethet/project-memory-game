import React from "react";

function GameExplanation(props) {

  return (
    <div className="button-container">
        <button className="button-play" onClick={props.changeColor}>PLAY!</button>
        <button className="button-clear" onClick={props.changeColor}>CLEAR</button>
      </div>
  )
}

  export default GameExplanation