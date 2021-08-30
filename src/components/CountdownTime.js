import React from "react";

function CountdownTime(props) {
  return (
    <div className="score-field">
      <span className={props.timeCount > 0 ? "seconds" : ""}>
        COUNTDOWN:{" "}
        <span className={props.timeCount > 0 ? "seconds" : ""}>{props.timeCount}</span>
      </span>
    </div>
  );
}

export default CountdownTime;
