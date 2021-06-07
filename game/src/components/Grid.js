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
  ];
  const [color, setColor] = useState("white");

  function changeColor() {
    if (color === "white") {
      setColor("blue");
    }
  }

  function randomCellsArray(number) {
    let randomArray = []
    while (randomArray.length < number) {
      let randomCell = whiteArray[Math.floor(Math.random() * whiteArray.length)];
  
      console.log(randomCell);
  
      if (number > whiteArray.length) {
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
          {whiteArray.map((item, index) => {
            return <Cell key={index} color={item} id={index} />;
          })}
        </div>
      </div>
      <div>
        <ButtonContainer randomCellsArray={randomCellsArray} number={7}/>
      </div>
    </div>
  );
}

export default Grid;
