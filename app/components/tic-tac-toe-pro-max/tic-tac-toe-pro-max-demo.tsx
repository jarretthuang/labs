import { TIC_TAC_TOE_PRO_MAX } from "~/models/components";
import { TicTacToe } from "~/components/tic-tac-toe/tic-tac-toe";
import { useState } from "react";

export const meta = () => TIC_TAC_TOE_PRO_MAX.meta;
export const handle = TIC_TAC_TOE_PRO_MAX.routeHandle;

const MAX_SIZE = 10;
export default function TicTacToeProMaxDemo() {
  const [m, setM] = useState(5);
  const [n, setN] = useState(4);
  const [k, setK] = useState(4);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col w-fit h-fit gap-2 border border-gray-200 rounded-xl p-4">
        <span className="text-gray-400 font-semibold text-sm">
          Game configs
        </span>
        <div className="flex items-center gap-2">
          <label htmlFor="m" className="w-6">
            m=
          </label>
          <input
            id="m"
            type="number"
            className="w-16"
            value={m}
            min={1}
            max={MAX_SIZE}
            onChange={(e) => setM(Math.min(Number(e.target.value), MAX_SIZE))}
          />
          <span className="text-gray-500 flex-1 text-end">(# of cols)</span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="n" className="w-6">
            n=
          </label>
          <input
            id="n"
            type="number"
            className="w-16"
            value={n}
            min={1}
            max={MAX_SIZE}
            onChange={(e) => setN(Math.min(Number(e.target.value), MAX_SIZE))}
          />
          <span className="text-gray-500 flex-1 text-end">(# of rows)</span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="k" className="w-6">
            k=
          </label>
          <input
            id="k"
            type="number"
            className="w-16"
            value={k}
            min={1}
            max={Math.max(m, n)}
            onChange={(e) =>
              setK(Math.min(Number(e.target.value), Math.max(m, n)))
            }
          />
          <span className="text-gray-500 flex-1 text-end">(win condition)</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 border border-gray-200 rounded-xl p-4 h-fit">
        <span className="text-gray-400 font-semibold text-sm">Let's play!</span>
        <TicTacToe key={`${m}-${n}-${k}`} m={m} n={n} k={k} />
      </div>
    </div>
  );
}
