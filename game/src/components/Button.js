import React from "react";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        disabled={props.disableButton}
        style={{ backgroundColor: "rgb(42, 43, 39)", border: "none", color: "lightgray"}}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
