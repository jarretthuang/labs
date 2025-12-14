import { useMemo } from "react";

export default function DiffTool({
  left,
  right,
}: {
  left: string[];
  right: string[];
}) {
  const { leftLines, rightLines, diffLines } = useMemo(() => {
    return {
      leftLines: left.map((l) => toLine(l, "raw")),
      rightLines: right.map((r) => toLine(r, "raw")),
      diffLines: computeDiff(left, right),
    };
  }, [left, right]);

  const renderLines = (lines: Line[], group: string) => {
    function getBackgroundColour(line: Line): string {
      switch (line.type) {
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
              className={`flex px-2 py-1 items-center min-h-8 w-full ${getBackgroundColour(line)}`}
              style={{
                color:
                  line.type === "add" ||
                  line.type === "remove" ||
                  line.type === "common"
                    ? "white"
                    : "black",
              }}
            >
              {line.type !== "raw" && (
                <div className="w-6">
                  {line.type === "add" && <span>+</span>}
                  {line.type === "remove" && <span>-</span>}
                </div>
              )}
              <span className="flex-1">{line.content}</span>
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

type LineType = "raw" | "common" | "add" | "remove";
type Line = {
  content: string;
  type: LineType;
};

function toLine(str: string, type: LineType): Line {
  return {
    content: str,
    type: type,
  };
}

function computeDiff(left: string[], right: string[]): Line[] {
  const { commonPrefix, midLeft, midRight, commonSuffix } = compareStrings(
    left,
    right,
  );

  function computeInnerDiff(l: string[], r: string[]): Line[] {
    const commonUniqueStrings = getUniqueStringIndexInBothSides(l, r);
    if (commonUniqueStrings === undefined) {
      return [
        ...l.map((s) => toLine(s, "remove")),
        ...r.map((s) => toLine(s, "add")),
      ];
    } else {
      const [leftAnchor, rightAnchor] = commonUniqueStrings;
      return [
        ...computeInnerDiff(l.slice(0, leftAnchor), r.slice(0, rightAnchor)),
        toLine(l[leftAnchor], "common"),
        ...computeInnerDiff(l.slice(leftAnchor + 1), r.slice(rightAnchor + 1)),
      ];
    }
  }

  return [
    ...commonPrefix.map((s) => toLine(s, "common")),
    ...computeInnerDiff(midLeft, midRight),
    ...commonSuffix.map((s) => toLine(s, "common")),
  ];
}

function compareStrings(
  left: string[],
  right: string[],
): {
  commonPrefix: string[];
  midLeft: string[];
  midRight: string[];
  commonSuffix: string[];
} {
  let prefixEnd = 0; // exclusive
  while (prefixEnd < left.length && prefixEnd < right.length) {
    const currentStr = left[prefixEnd];
    if (currentStr && currentStr === right[prefixEnd]) {
      prefixEnd++;
    } else {
      break;
    }
  }

  let suffixEnd = 0; // exclusive
  while (suffixEnd < left.length - prefixEnd && suffixEnd < right.length) {
    const currentStr = left.at(-suffixEnd);
    if (currentStr && currentStr === right.at(-suffixEnd)) {
      suffixEnd++;
    } else {
      break;
    }
  }

  return {
    commonPrefix: left.slice(0, prefixEnd),
    midLeft: left.slice(prefixEnd, left.length - suffixEnd + 1),
    midRight: right.slice(prefixEnd, right.length - suffixEnd + 1),
    commonSuffix: left.slice(left.length - suffixEnd),
  };
}

function getUniqueStringIndices(strs: string[]): Map<string, number> {
  const indicesMap = new Map<string, number[]>();
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    indicesMap.set(str, [...(indicesMap.get(str) ?? []), i]);
  }

  const result = new Map();
  indicesMap.forEach((value, key) => {
    if (value.length === 1) {
      result.set(key, value[0]);
    }
  });
  return result;
}

function getUniqueStringIndexInBothSides(
  left: string[],
  right: string[],
): [number, number] | undefined {
  const uniqueStringsInLeft = getUniqueStringIndices(left);
  const uniqueStringsInRight = getUniqueStringIndices(right);
  for (const [key, value] of uniqueStringsInLeft) {
    if (uniqueStringsInRight.has(key)) {
      return [value, uniqueStringsInRight.get(key)!];
    }
  }
  return undefined;
}
