import { useState } from "react";

export type DropdownItem = {
  id: string;
  displayName: string;
  description?: string;
};

type Props = {
  items: DropdownItem[];
  selectedItem?: DropdownItem;
  onSelected: (item: DropdownItem) => void;
};

export default function Dropdown({ items, selectedItem, onSelected }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-50 bg-gray-50 rounded-xl border-1 border-gray-300 relative hover:border-gray-400 duration-200 cursor-pointer">
      <div
        className="w-full flex justify-between p-2 items-center"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="px-2">{selectedItem?.displayName ?? ""}</span>
        <span className="select-none font-medium text-gray-600 px-2">
          {open ? "▲" : "▼"}
        </span>
      </div>
      {open && (
        <ul className="absolute z-10 bg-gray-50 rounded-xl border-1 border-gray-300 w-full mt-2 flex flex-col gap-1 shadow-sm max-h-46 overflow-hidden">
          <div className="w-full h-full overflow-auto">
            {items.map((item) => (
              <li
                className="py-2 px-4 hover:bg-gray-100 select-none"
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
