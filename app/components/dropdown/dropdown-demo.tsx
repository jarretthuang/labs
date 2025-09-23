import { DROPDOWN } from "~/models/components";
import Dropdown, { type DropdownItem } from "./dropdown";
import { useState } from "react";

export const meta = () => DROPDOWN.meta;
export const handle = DROPDOWN.routeHandle;

export default function DropdownDemo() {
  const [drink, setDrink] = useState<DropdownItem | undefined>(undefined);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <span>Choose your coffee:</span>
        <Dropdown
          items={items}
          selectedItem={drink}
          onSelected={(item) => setDrink(item)}
        ></Dropdown>
      </div>
    </div>
  );
}

const items: DropdownItem[] = [
  {
    id: "americano",
    displayName: "Americano",
  },
  {
    id: "macchiato",
    displayName: "Caffè macchiato",
  },
  {
    id: "mocha",
    displayName: "Mocha",
  },
  {
    id: "cappuccino",
    displayName: "Cappuccino",
  },
  {
    id: "latte",
    displayName: "Latte",
  },
];
