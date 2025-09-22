import { useState } from "react";
import { TIC_TAC_TOE } from "~/models/components";

export const meta = () => TIC_TAC_TOE.meta;
export const handle = TIC_TAC_TOE.routeHandle;

export default function TicTacToe() {
  const [gameState, setGameState] = useState<number[]>(
    new Array(9).fill(undefined),
  );
  const [action, setAction] = useState(0);
  const [winner, setWinner] = useState<1 | 2 | undefined>(undefined);

  const playerNumber = action % 2 === 0 ? 1 : 2;

  const takeAction = (slotIndex: number) => {
    setGameState((prev) => {
      const newState: number[] = [...prev];
      newState[slotIndex] = playerNumber;
      const currentPlayerIndices = new Set(
        newState
          .map((player, index) => (player === playerNumber ? index : undefined))
          .filter((s) => s !== undefined),
      );
      if (
        WINNING_STATES.some((s) => s.every((i) => currentPlayerIndices.has(i)))
      ) {
        setWinner(playerNumber);
      }
      return newState;
    });

    setAction((a) => a + 1);
  };

  return (
    <div className="flex flex-col gap-2">
      {winner !== undefined && <span>Player {winner} has won! 🎉</span>}
      {winner === undefined && action < 9 && (
        <span>Player {playerNumber} is moving... ♟️</span>
      )}
      {winner === undefined && action === 9 && <span>It was a tie! 🤝</span>}
      <div className="grid grid-cols-3 grid-rows-3 bg-gray-50 w-fit h-fit">
        {gameState.map((slotState, slotIndex) => (
          <div
            key={slotIndex}
            className={`w-20 h-20 flex border-1 border-gray-300 cursor-pointer hover:bg-gray-200 active:bg-gray-200 duration-200 select-none ${slotState !== undefined || winner !== undefined ? "pointer-events-none" : ""}`}
            onClick={() => takeAction(slotIndex)}
          >
            <span className="m-auto text-4xl">
              {slotState === 1 ? "⭕" : slotState === 2 ? "❌" : ""}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setGameState(new Array(9).fill(undefined));
            setAction(0);
            setWinner(undefined);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const WINNING_STATES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
