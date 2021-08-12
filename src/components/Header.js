import React from "react";
import GameExplanation from "./GameExplanation"

function Header() {
  return (
      <div className="app-header">
        <div className="welcome-text">
          <h1>MEMORY CRUNCH</h1>
        </div>
        <GameExplanation />
      </div>
  );
}

export default Header;
