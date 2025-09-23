import { DROPDOWN } from "~/models/components";
import Dropdown, { type DropdownItem } from "./dropdown";
import { useState } from "react";

export const meta = () => DROPDOWN.meta;
export const handle = DROPDOWN.routeHandle;

export default function DropdownDemo() {
  const [drink, setDrink] = useState<DropdownItem | undefined>(undefined);
  return (
    <div>
      <Dropdown
        items={items}
        placeholderText="Choose your coffee"
        selectedItem={drink}
        onSelected={(item) => setDrink(item)}
      ></Dropdown>
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
