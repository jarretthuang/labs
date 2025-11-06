import { useState } from "react";
import { TIC_TAC_TOE } from "~/models/components";
import { TicTacToe } from "~/components/tic-tac-toe/tic-tac-toe";

export const meta = () => TIC_TAC_TOE.meta;
export const handle = TIC_TAC_TOE.routeHandle;

export default function TicTacToeDemo() {
  return <TicTacToe m={3} n={3} k={3} />;
}
