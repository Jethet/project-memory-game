import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const [color, setColor] = useState("white");
  
  const cellsArray = [];

  for (let i = 0; i < 25; i++) {
    cellsArray.push(i);
  }  

  function selectRandom(number) {
    let randomIndexes = [];
    while (randomIndexes.length < number) {
      let randomIndex = Math.floor(Math.random() * cellsArray.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    console.log(randomIndexes);
    }

  // useEffect(() => {
  // }, [color])


  const colorCells = () => {
    setColor("blue");
  };

  console.log("Test", color);

  const resetGrid = () => {
      setColor("white");
  };

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          {cellsArray.map((item, index) => {
            return <Cell key={index} color={color} id={item} />;
          })}
        </div>
      </div>
        <ButtonContainer selectRandom={selectRandom} resetGrid={resetGrid} colorCells={colorCells} />
      </div>
  );
}

export default Grid;
