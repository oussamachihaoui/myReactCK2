import React from "react";
import players from "../players";
import Player from "./Player";

const PlayerCards = () => {
  return (
    <>
      {players.map((pl) => (
        <Player data={pl} />
      ))}
    </>
  );
};

export default PlayerCards;
