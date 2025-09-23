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
    <div className="w-56 relative" ref={containerRef}>
      <div
        className="w-full flex justify-between py-2 px-4 gap-2 items-center bg-gray-50 rounded-xl border-1 border-gray-300 hover:border-gray-400 active:border-gray-400 duration-200 cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="select-none text-gray-800 font-medium">
          {selectedItem?.displayName ?? placeholderText}
        </span>
        <span className="select-none font-medium text-gray-600">
          {open ? "▲" : "▼"}
        </span>
      </div>
      {open && (
        <ul className="absolute z-10 bg-gray-50 rounded-xl border-1 border-gray-300 w-full mt-2 flex flex-col gap-1 shadow-sm max-h-46 overflow-hidden">
          <div className="w-full h-full overflow-auto">
            {items.map((item) => (
              <li
                key={item.id}
                className="py-2 px-4 hover:bg-gray-100 active:bg-gray-100 select-none cursor-pointer text-gray-900 font-medium"
                onClick={() => {
                  setOpen(false);
                  onSelected(item);
                }}
              >
                {item.displayName}
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}
