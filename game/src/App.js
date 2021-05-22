import React from 'react';
import './App.css';

import Grid from "./components/Grid"
import Header from "./components/Header"
import GameExplanation from "./components/GameExplanation"


function App() {
  return (
    <div className="App">
      <Header />
      <Grid />
      <GameExplanation />
    </div>
  );
}

export default App;
