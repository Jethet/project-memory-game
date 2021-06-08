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

  const colorCells = () => {
    if (color === "white") {
      setColor("blue")
    }
  }

  const resetGrid = () => {
    if (color === "blue") {
      setColor("white");
    }
  }

  function selectRandom(number) {
    let randomIndexes = []

    while (randomIndexes.length < number) {
      let randomIndex = Math.floor(Math.random() * cellsArray.length)
  
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex)
      }
    }
    console.log(randomIndexes);
  
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
        <ButtonContainer selectRandom={selectRandom}/>
      </div>
    </div>
  );
}

export default Grid;
