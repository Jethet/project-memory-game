import React from "react";

function CountdownTime(props) {
  return (
    <div className="score-field">
      <span>COUNTDOWN: <span className="seconds">{props.timeCount}</span></span>
    </div>
  );
}

export default CountdownTime;
