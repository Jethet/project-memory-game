import React, { useState } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const whiteArray = [
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ];
  const [color, setColor] = useState("white");

  function changeColor(e) {
    e.preventDefault();
    if (color === "white") {
      setColor("blue");
    }
  }

  function randomCellsColoring(e) {
    randomBlueArray = whiteArray[Math.floor(Math.random() * arr.length)]
    console.log(randomBlueArray);
    
  }

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          {whiteArray.map((item, index) => {
            return <Cell key={index} color={item} />;
          })}
        </div>
      </div>
      <div>
        <ButtonContainer changeColor={changeColor} />
      </div>
    </div>
  );
}

export default Grid;
