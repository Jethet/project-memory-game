import React, { useState } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const [cells, setCells] = useState(initialState());
  const [correctChoices, setCorrectChoices] = useState([]);
  const [disable, setDisable] = useState({ disabled: true });

  // create an array of 25 cells with key, color and disabled properties;
  // this is the initial state of the grid
  function initialState() {
    let cellsArray = [];
    for (let i = 0; i < 25; i++) {
      cellsArray.push({ key: i, color: "lightgrey" });
    }
    return cellsArray;
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
    return randomIndexes;
  }

  // modify state so that cells in cellsArray change color
  const colorCells = (cellsArray, color) => {
    let newCellsState = cells.slice();
    cellsArray.map((item) => {
      newCellsState[item].color = color;
      return newCellsState;
    });
    // console.log(newCellsState);
    setCells(newCellsState);
  };

  // a cells array is passed in and cells change colour
  const startGame = (cellsArray) => {
    // this sets the color for the 7 random cells when PLAY is clicked
    colorCells(cellsArray, "rgb(24, 73, 73)");
    // after five seconds, the 7 cells turn grey again
    setTimeout(resetGrid, 5000);
    // cells in the grid are made clickable
    setDisable(false);
  };

  // reset entire grid to original state
  const resetGrid = () => {
    setCells(initialState())
  };


  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          {cells.map((cell) => {
            return (
              <Cell
                key={cell.key}
                color={cell.color}
                id={cell.key}
                disable={disable}
                setDisable={setDisable}
                correctChoices={correctChoices}
                colorCells={colorCells}
              />
            );
          })}
        </div>
      </div>
      <ButtonContainer
        selectRandom={selectRandom}
        resetGrid={resetGrid}
        startGame={startGame}
        setCorrectChoices={setCorrectChoices}
      />
    </div>
  );
}

export default Grid;
