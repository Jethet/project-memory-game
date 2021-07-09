import React from "react";
import GameExplanation from "./GameExplanation"
import Counter from "./Counter";

function Header() {
  return (
    <div>
      <div className="app-header">
        <div className="welcome-text">
          <h1>Welcome to the Memory Game!</h1>
        </div>
        <GameExplanation />
        <Counter />
      </div>
    </div>
  );
}

export default Header;
