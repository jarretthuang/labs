import { useMemo, useState } from "react";
import { computeDiff, type Line, toLine } from "~/components/diff-tool/models";

export default function DiffTool({
  left,
  right,
}: {
  left: string[];
  right: string[];
}) {
  const [hoveredLine, setHoveredLine] = useState(-1);

  const { leftLines, rightLines, diffLines } = useMemo(() => {
    const d = computeDiff(left, right);
    const l: Line[] = d.map((diffLine) => {
      return diffLine.originLeft !== undefined
        ? {
            content: left[diffLine.originLeft],
            type: "raw",
          }
        : {
            content: diffLine.content,
            type: "void",
          };
    });
    const r: Line[] = d.map((diffLine) => {
      return diffLine.originRight !== undefined
        ? {
            content: right[diffLine.originRight],
            type: "raw",
          }
        : {
            content: diffLine.content,
            type: "void",
          };
    });
    return {
      leftLines: l,
      rightLines: r,
      diffLines: d,
    };
  }, [left, right]);

  const renderLines = (lines: Line[], group: string) => {
    function getBackgroundColour(line: Line): string {
      switch (line.type) {
        case "void":
          return "bg-cyan-100";
        case "raw":
          return "bg-cyan-100";
        case "common":
          return "bg-yellow-400";
        case "add":
          return "bg-green-600";
        case "remove":
          return "bg-red-600";
      }
    }
    return (
      <div className="flex flex-col overflow-x-auto">
        <div className="flex flex-col gap-2 w-fit">
          {lines.map((line, index) => (
            <div
              key={`${group}-${line.type}-${index}`}
              className={`flex px-2 py-1 items-center min-h-8 transition-all duration-200 w-full ${getBackgroundColour(line)}`}
              onMouseOver={() => setHoveredLine(index)}
              style={{
                color:
                  line.type === "add" ||
                  line.type === "remove" ||
                  line.type === "common"
                    ? "white"
                    : "black",
                filter: hoveredLine === index ? "brightness(0.95)" : "unset",
              }}
            >
              <div className="w-6">
                {line.type === "add" && <span>+</span>}
                {line.type === "remove" && <span>-</span>}
              </div>
              <span
                className="flex-1"
                style={{
                  color: line.type === "void" ? "transparent" : "unset",
                  userSelect: line.type === "void" ? "none" : "auto",
                }}
              >
                {line.content}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTitle = (title: string) => {
    return (
      <div className="flex">
        <span className="m-auto uppercase text-gray-500">{title}</span>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      {renderTitle("left")}
      {renderTitle("diff")}
      {renderTitle("right")}
      {renderLines(leftLines, "left")}
      {renderLines(diffLines, "diff")}
      {renderLines(rightLines, "right")}
    </div>
  );
}
