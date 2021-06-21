import React, { useState } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const [cells, setCells] = useState(initialState());
  
  // create an array of 25 cells with key and color properties; 
  // this is the initial state of the grid
  function initialState() {
    let cellsArray = []
    for (let i = 0; i < 25; i++) {
      cellsArray.push({ key: i, color: "white" });
    }
    return cellsArray
  }

  // create an array of random cells (this is used by the PLAY button) 
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

  // the random cells become blue when the PLAY button is clicked
  const colorBlue = (randomIndexes, color) => {
    let newCellsState = cells.slice()
    color = "blue"
    randomIndexes.map(item => newCellsState[item].color = color)
    setCells(newCellsState)
    // after five seconds, the cells turn white again
    setTimeout(resetGrid, 5000)
  };

  // the random cells that were blue turn green when user clicks correctly
  const colorGreen = () => {
    
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
