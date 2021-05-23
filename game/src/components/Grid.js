import React, { useState } from "react";
import Cell from "./Cell";
import ButtonContainer from "./ButtonContainer";

function Grid() {
  const [color, setColor] = useState({style: "white"});

  function changeColor() {
    setColor({style: "green"})    
  }

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid">
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
          <Cell color={color} />
          {/* <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell /> */}
        </div>
      </div>
      <ButtonContainer changeColor={changeColor}/>
    </div>
  );
}

export default Grid;
