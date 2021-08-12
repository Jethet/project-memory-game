import React from "react";

function Counter(props) {
  return (
    <div className="score-field">
      <span>YOUR SCORE: {props.count}</span>
    </div>
  );
}

export default Counter;
