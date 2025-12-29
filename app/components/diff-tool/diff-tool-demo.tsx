import { useState } from "react";
import DiffTool from "~/components/diff-tool/diff-tool";
import { DIFF_TOOL } from "~/models/components";
import { DIFF_LEFT, DIFF_RIGHT } from "~/components/diff-tool/testData";

export const meta = () => DIFF_TOOL.meta;
export const handle = DIFF_TOOL.routeHandle;

export default function DiffToolDemo() {
  const [left, setLeft] = useState(DIFF_LEFT.join("\n"));
  const [right, setRight] = useState(DIFF_RIGHT.join("\n"));

  return (
    <div className="flex flex-col gap-8 h-full w-full">
      <div className="grid grid-cols-2 gap-4 h-64 shrink-0">
        <textarea
          className="p-4 border rounded-lg border-gray-300 font-mono text-sm resize-none"
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder="Paste left text here..."
        />
        <textarea
          className="p-4 border rounded-lg border-gray-300 font-mono text-sm resize-none"
          value={right}
          onChange={(e) => setRight(e.target.value)}
          placeholder="Paste right text here..."
        />
      </div>
      <div className="overflow-y-auto flex-1 rounded-lg border border-gray-300 p-4">
        <DiffTool left={left.split("\n")} right={right.split("\n")} />
      </div>
    </div>
  );
}
