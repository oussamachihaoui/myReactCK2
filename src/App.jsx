import React from "react";
import Player from "./Components/Player";
import PlayerCards from "./Components/PlayerCards";

const App = () => {
  return (
    <div className="grid grid-cols-3">
      <PlayerCards />
    </div>
  );
};

export default App;
