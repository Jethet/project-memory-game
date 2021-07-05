import React from "react";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        style={{ backgroundColor: "rgb(42, 43, 39)", border: "none", color: "lightgray", fontsize: "1.2em", fontweight: "900"}}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
