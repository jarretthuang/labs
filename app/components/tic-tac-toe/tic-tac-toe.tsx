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

/**
 * Using the slope (in degrees) of the line to represent the 4 possible crossing positions
 */
type CrossingDirection = 0 | -90 | -45 | -135;

export function TicTacToe({ m, n, k }: TicTacToeProps) {
  const [gameState, setGameState] = useState<number[][]>(getInitialState(m, n));

  const [actionCount, setActionCount] = useState(0);
  const currentPlayer = (actionCount % 2) + 1;
  const MAX_ACTION_INDEX = m * n;

  const [winner, setWinner] = useState<number | undefined>(undefined);
  const [winningPositions, setWinningPositions] = useState<[number, number][]>(
    [],
  );
  const [winningDirection, setWinningDirection] = useState<
    CrossingDirection | undefined
  >(undefined);

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
    const directions: [
      [number, number],
      [number, number],
      CrossingDirection,
    ][] = [
      [[0, -1], [0, 1], 0], // ← →
      [[1, 0], [-1, 0], -90], // ↑ ↓
      [[-1, -1], [1, 1], -135], // ↖ ↘
      [[1, -1], [-1, 1], -45], // ↙ ↗
    ];

    const validPosition = (r: number, c: number) => {
      return r >= 0 && r < n && c >= 0 && c < m;
    };

    const findPositions = ([dr, dc]: [number, number]) => {
      let positions: [number, number][] = [];
      let r = rowIndex + dr;
      let c = colIndex + dc;
      while (validPosition(r, c) && gameState[r][c] === player) {
        positions.push([r, c]);
        r += dr;
        c += dc;
      }
      return positions;
    };

    for (const [d1, d2, direction] of directions) {
      const positions: [number, number][] = [
        ...findPositions(d1),
        [rowIndex, colIndex],
        ...findPositions(d2),
      ];
      if (positions.length >= k) {
        setWinningPositions(positions);
        setWinningDirection(direction);
        console.log(direction);
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
        className="grid bg-gray-50 w-fit h-fit overflow-hidden"
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
                className="w-20 h-20 flex relative border-1 border-gray-300 cursor-pointer hover:bg-gray-200 active:bg-gray-200 duration-200 select-none"
                style={{ borderRadius: 0 }} // to override the default button style
                disabled={cellState !== undefined || winner !== undefined}
                onClick={() => takeAction(rowIndex, colIndex, currentPlayer)}
              >
                <span className="m-auto text-4xl">
                  {cellState === 1 ? "⭕" : cellState === 2 ? "❌" : ""}
                </span>
                {winningPositions.some(
                  ([r, c]) => r === rowIndex && c === colIndex,
                ) && (
                  <div className="w-full h-full absolute top-0 left-0 flex overflow-visible">
                    <span
                      className="flex h-2 bg-green-500/30 m-auto z-10"
                      style={{
                        width: "100%",
                        transform:
                          winningDirection === 0 || winningDirection === -90
                            ? `rotate(${winningDirection}deg) scaleX(1.02)`
                            : `rotate(${winningDirection}deg) scaleX(1.45)`,
                        transformOrigin: "center center",
                      }}
                    ></span>
                  </div>
                )}
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
            setWinningPositions([]);
            setWinningDirection(undefined);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
