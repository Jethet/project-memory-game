import React from "react";
import GameExplanation from "./GameExplanation"

function Header() {
  return (
    <div>
      <div className="app-header">
        <div className="welcome-text">
          <h1>How's your MEMORY?!</h1>
        </div>
        <GameExplanation />
      </div>
    </div>
  );
}

export default Header;
