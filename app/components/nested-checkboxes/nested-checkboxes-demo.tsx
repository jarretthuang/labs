import { checkboxes } from "./models";
import NestedCheckbox from "./nested-checkbox";
import { NESTED_CHECKBOXES } from "~/models/components";

export const meta = () => NESTED_CHECKBOXES.meta;
export const handle = NESTED_CHECKBOXES.routeHandle;

export default function NestedCheckboxesDemo() {
  return (
    <div className="flex flex-col gap-4">
      {checkboxes.map((checkbox) => (
        <NestedCheckbox key={checkbox.id} item={checkbox}></NestedCheckbox>
      ))}
    </div>
  );
}
