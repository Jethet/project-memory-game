import React, { useState } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const [cells, setCells] = useState(initialState());
  // const [correctChoices, setCorrectChoices] = useState([]);
  let correctChoices = []

  // create an array of 25 cells with key and color properties;
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

  // a cells array is passed in and cells become blue
  const colorBlue = (cellsArray, color) => {
    let newCellsState = cells.slice();
    color = "rgb(24, 73, 73)";
    cellsArray.map((item) => (newCellsState[item].color = color));
    setCells(newCellsState);
    // after five seconds, the cells turn white again
    setTimeout(resetGrid, 5000);
  };

  // put values of choices into global variable correctChoices
  // e.g. from handleClick in ButtonContainer.js: (randomCells)
  const setCorrectChoices = (choices) => {
    correctChoices = choices
  }

  // reset entire grid to original state
  const resetGrid = () => {
    console.log(correctChoices);
    setCells(initialState());
  };

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          {cells.map((cell) => {
            return <Cell key={cell.key} color={cell.color} id={cell.key} correctChoices={correctChoices}/>;
          })}
        </div>
      </div>
      <ButtonContainer
        selectRandom={selectRandom}
        resetGrid={resetGrid}
        colorBlue={colorBlue}
        setCorrectChoices={setCorrectChoices}
      />
    </div>
  );
}

export default Grid;
