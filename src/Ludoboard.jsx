import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  const updateMoves = (color) => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      [color]: prevMoves[color] + 1,
    }));
  };

  return (
    <div>
      <p>Game Starting</p>
      <div className="board"></div>

      <p>Blue Moves: {moves.blue}</p>
      <button onClick={ () => updateMoves("blue")}>+1</button>

      <p>Yellow Moves: {moves.yellow}</p>
      <button backGround onClick={() => updateMoves("yellow")}>+1</button>

      <p>Green Moves: {moves.green}</p>
      <button onClick={() => updateMoves("green")}>+1</button>

      <p>Red Moves: {moves.red}</p>
      <button onClick={() => updateMoves("red")}>+1</button>
    </div>
  );
}
