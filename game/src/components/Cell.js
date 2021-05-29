import React from "react";
// import { useState, useEffect } from "react";

function Cell(props) {

  return <div className="grid-cell" style={{background: props.color}}></div>;
}

export default Cell;
