import React from "react";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        disabled={props.disableButton}
        style={{ backgroundColor: "rgb(42, 43, 39)", border: "none", color: "lightgray"}}
      >
      <h2>{props.name}</h2>
      </button>
    </div>
  );
}

export default Button;
