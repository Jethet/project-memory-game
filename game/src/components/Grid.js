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
    "blue",
    "white",
    "blue",
    "blue",
    "blue",
    "white",
    "blue",
    "white",
    "white",
    "white",
    "white",
    "white",
    "blue",
    "white",
  ];
  const [color, setColor] = useState("white");

  const changeColor = () => {
    if (color === "white") {
      setColor("blue");
    }
    if (color === "blue") {
      setColor("white");
    }
  }

  // Where do I add that number of cells must be 7 ??
  function colorRandomCells(number) {
    let randomArray = []
    while (randomArray.length < number) {
      let randomCell = cellsArray[Math.floor(Math.random() * cellsArray.length)];
      // if (randomArray.length === number) {
      //   return randomArray
      // }
      if (!randomArray.includes(randomCell)) {
        randomArray.push(randomCell);
      }
      console.log(randomCell);
  
      if (number > cellsArray.length) {
        console.log("Array length exceeded");
        return;
      }
    }
    console.log(randomArray);
    changeColor(randomArray);
  }

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          {cellsArray.map((item, index) => {
            return <Cell key={index} color={item} id={index} />;
          })}
        </div>
      </div>
      <div>
        <ButtonContainer colorRandomCells={colorRandomCells}/>
      </div>
    </div>
  );
}

export default Grid;
