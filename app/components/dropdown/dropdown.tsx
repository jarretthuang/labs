import { useEffect, useRef, useState } from "react";

export type DropdownItem = {
  id: string;
  displayName: string;
  description?: string;
};

type Props = {
  items: DropdownItem[];
  selectedItem?: DropdownItem;
  onSelected: (item: DropdownItem) => void;
  placeholderText: string;
};

export default function Dropdown({
  items,
  selectedItem,
  onSelected,
  placeholderText,
}: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseDown = (e: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div
      className="w-56 relative"
      ref={containerRef}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      <button
        className="w-full flex justify-between items-center border-1 border-gray-300"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="select-none text-gray-800 font-medium">
          {selectedItem?.displayName ?? placeholderText}
        </span>
        <span className="select-none font-medium text-gray-600">
          {open ? "▲" : "▼"}
        </span>
      </button>
      {open && (
        <div className="absolute z-10 bg-gray-100 rounded-xl border-1 border-gray-300 w-full flex mt-2 shadow-sm max-h-46 overflow-hidden">
          <ul className="w-full overflow-auto flex flex-col p-1 gap-1">
            {items.map((item) => (
              <li
                key={item.id}
                className=""
                onClick={() => {
                  setOpen(false);
                  onSelected(item);
                }}
              >
                <button className="w-full text-left text-gray-700">
                  {item.displayName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
