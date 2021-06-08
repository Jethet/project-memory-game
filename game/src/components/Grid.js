import React, { useState } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const cellsArray = [
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

  function changeColor(color) {
    if (color === "white") {
      setColor("blue");
    }
  }

  function colorRandomCells(number) {
    let randomArray = []
    while (randomArray.length < number) {
      let randomCell = cellsArray[Math.floor(Math.random() * cellsArray.length)];
  
      console.log(randomCell);
  
      if (number > cellsArray.length) {
        console.log("Array length exceeded");
        return;
      }
      if (!randomArray.includes(randomCell)) {
        randomArray.push(randomCell);
      }
    }
    changeColor(randomArray);
  }

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          {cellsArray.map((item, cellIndex) => {
            return <Cell key={index} color={item} id={cellIndex} />;
          })}
        </div>
      </div>
      <div>
        <ButtonContainer colorRandomCells={colorRandomCells} number={7}/>
      </div>
    </div>
  );
}

export default Grid;
