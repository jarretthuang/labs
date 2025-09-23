import { useState } from "react";
import type { AccordionItem } from "./models";

export default function Accordion({ item }: { item: AccordionItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col w-full bg-gray-50 rounded-lg">
      <button
        className="flex justify-between items-center font-medium"
        onClick={() => setExpanded((e) => !e)}
      >
        <span>{item.name}</span>
        <span
          className="transition-all duration-200"
          style={{ transform: expanded ? "rotate(0)" : "rotate(180deg)" }}
        >
          Λ
        </span>
      </button>
      {expanded && <p className="p-4">{item.content}</p>}
    </div>
  );
}
