import React from "react";
// import { useState, useEffect } from "react";

function Cell(props) {
  return (
    <div className="grid-cell" id={props.id} style={{ background: props.color }}>
      {props.id}
    </div>
  );
}

export default Cell;
