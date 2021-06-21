import React, { useState } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const [cells, setCells] = useState(initialState());
  // this prints an array of 25 cells color white
  console.log(cells);
  // THIS ALSO RUNS A SECOND TIME AFTER CLICKING "PLAY" BUTTON
  
  function initialState() {
    let cellsArray = []
    for (let i = 0; i < 25; i++) {
      cellsArray.push({ key: i, color: "white" });
    }
    return cellsArray
  }

  function selectRandom(number) {
    let randomIndexes = [];
    while (randomIndexes.length < number) {
      let randomIndex = Math.floor(Math.random() * cells.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes
  }

  const colorCells = () => {
    // this prints an array of 25 cells with third cell blue EVEN THOUGH COLOR HAS NOT BEEN CHANGED YET
    console.log(cells);

    let newCellsState = cells.slice()
    newCellsState[2].color = "blue"

    setCells(newCellsState)
     // this prints an array of 25 cells with third cell blue 
    console.log(cells)
  };

  const resetGrid = () => {
    setCells({ color: "white" });
  };

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          {cells.map((cell) => {
            return <Cell key={cell.key} color={cell.color} />;
          })}
        </div>
      </div>
      <ButtonContainer
        selectRandom={selectRandom}
        resetGrid={resetGrid}
        colorCells={colorCells}
      />
    </div>
  );
}

export default Grid;
