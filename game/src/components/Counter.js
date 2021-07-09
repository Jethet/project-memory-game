import React from "react";

function Counter(props) {
  return (
    <div>
      <h1 className="score-field">YOUR SCORE: {props.count}</h1>
    </div>
  );
}

export default Counter;
