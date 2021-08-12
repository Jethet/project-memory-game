import React from "react";

function CountdownTime(props) {
  return (
    <div className="score-field">
      <span>COUNTDOWN: {props.timeCount}</span>
    </div>
  );
}

export default CountdownTime;
