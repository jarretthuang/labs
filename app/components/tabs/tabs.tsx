import { useMemo } from "react";
import "./tabs.css";

export default function Tabs({
  items,
  selectedId,
  onSelected,
}: {
  items: TabItem[];
  selectedId: string;
  onSelected: (id: string) => void;
}) {
  const selectedItemIndex = useMemo(
    () =>
      Math.max(
        0,
        items.findIndex((item) => item.id === selectedId),
      ),
    [items, selectedId],
  );

  return (
    <ul className="tabs">
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`tab ${selectedItemIndex === index ? "tab__selected" : ""}`}
          onClick={() => onSelected(item.id)}
        >
          {item.displayName}
        </li>
      ))}
    </ul>
  );
}

export type TabItem = {
  id: string;
  displayName: string;
};
