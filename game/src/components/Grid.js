import React, { useState } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const [cells, setCells] = useState(initialState());
  
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

  const colorBlue = (randomIndexes, color) => {
    let newCellsState = cells.slice()
    color = "blue"
    randomIndexes.map(item => newCellsState[item].color = color)
    setCells(newCellsState)
    setTimeout(blueToWhite, 2000)
  };
  
  const blueToWhite = (randomIndexes) => {
    randomIndexes.color = "white"
  }

  const resetGrid = () => {
    let newCellsState = cells.slice()
    newCellsState.map(item => item.color = "white")
    setCells(newCellsState)
  };

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          {cells.map((cell) => {
            return <Cell key={cell.key} color={cell.color} id={cell.key}/>;
          })}
        </div>
      </div>
      <ButtonContainer
        selectRandom={selectRandom}
        resetGrid={resetGrid}
        colorBlue={colorBlue}
      />
    </div>
  );
}

export default Grid;
