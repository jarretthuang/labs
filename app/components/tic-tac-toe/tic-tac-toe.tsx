import { useMemo, useState } from "react";

/**
 * Represents a game of tic-tac-toe on an m x n board involving 2 players.
 * Whichever player claims k number of consecutive positions wins.
 */
export type TicTacToeProps = {
  /**
   * Number of cols
   */
  m: number;

  /**
   * Number of rows
   */
  n: number;

  /**
   * Number of consecutive positions required to win
   */
  k: number;
};

function getInitialState(m: number, n: number): number[][] {
  const rows = new Array(n);
  for (let i = 0; i < n; i++) {
    rows[i] = new Array(m).fill(undefined);
  }
  return rows;
}

export function TicTacToe({ m, n, k }: TicTacToeProps) {
  const [gameState, setGameState] = useState<number[][]>(getInitialState(m, n));

  const [actionCount, setActionCount] = useState(0);
  const currentPlayer = (actionCount % 2) + 1;
  const MAX_ACTION_INDEX = m * n;

  const [winner, setWinner] = useState<number | undefined>(undefined);

  const takeAction = (rowIndex: number, colIndex: number, player: number) => {
    setGameState((prev) => {
      const copy = [...prev];
      copy[rowIndex][colIndex] = player;
      return copy;
    });
    if (playerHasWon(rowIndex, colIndex, player)) {
      setWinner(player);
    }
    setActionCount((i) => i + 1);
  };

  const playerHasWon = (rowIndex: number, colIndex: number, player: number) => {
    const directions: [[number, number], [number, number]][] = [
      [
        [0, -1],
        [0, 1],
      ], // ← →
      [
        [1, 0],
        [-1, 0],
      ], // ↑ ↓
      [
        [-1, -1],
        [1, 1],
      ], // ↖ ↘
      [
        [1, -1],
        [-1, 1],
      ], // ↙ ↗
    ];

    const validPosition = (r: number, c: number) => {
      return r >= 0 && r < n && c >= 0 && c < m;
    };

    const countPositions = ([dr, dc]: [number, number]) => {
      let count = 0;
      let r = rowIndex + dr;
      let c = colIndex + dc;
      while (validPosition(r, c) && gameState[r][c] === player) {
        count++;
        r += dr;
        c += dc;
      }
      return count;
    };

    for (const [d1, d2] of directions) {
      if (1 + countPositions(d1) + countPositions(d2) >= k) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-gray-100 px-4 py-2 rounded-xl font-medium text-gray-700 text-lg">
        {winner !== undefined && <span>Player {winner} has won! 🎉</span>}
        {winner === undefined && actionCount < MAX_ACTION_INDEX && (
          <span>Player {currentPlayer} is moving... ♟️</span>
        )}
        {winner === undefined && actionCount === MAX_ACTION_INDEX && (
          <span>It was a tie! 🤝</span>
        )}
      </div>
      <div
        className="grid bg-gray-50 w-fit h-fit"
        style={{
          gridTemplateColumns: `repeat(${m}, 1fr)`,
          gridTemplateRows: `repeat(${n}, 1fr)`,
        }}
      >
        {gameState.flatMap((row, rowIndex) =>
          row.map((cellState, colIndex) => {
            return (
              <button
                key={`${rowIndex}-${colIndex}`}
                className="w-20 h-20 flex border-1 border-gray-300 cursor-pointer hover:bg-gray-200 active:bg-gray-200 duration-200 select-none"
                style={{ borderRadius: 0 }} // to override the default button style
                disabled={cellState !== undefined || winner !== undefined}
                onClick={() => takeAction(rowIndex, colIndex, currentPlayer)}
              >
                <span className="m-auto text-4xl">
                  {cellState === 1 ? "⭕" : cellState === 2 ? "❌" : ""}
                </span>
              </button>
            );
          }),
        )}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setGameState(getInitialState(m, n));
            setActionCount(0);
            setWinner(undefined);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
