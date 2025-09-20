import type { RouteHandle } from "~/root";
import type { Route } from "../../+types/root";
import { checkboxes } from "./models";
import NestedCheckbox from "./nestedCheckbox";

export function meta({}: Route.MetaArgs) {
  return [{ title: "nested checkboxes - jarrett's web labs" }];
}

export const handle: RouteHandle = {
  title: "Nested checkboxes",
  path: "checkboxes",
};

export default function NestedCheckboxes() {
  return (
    <div className="flex flex-col gap-4">
      {checkboxes.map((checkbox) => (
        <NestedCheckbox key={checkbox.id} item={checkbox}></NestedCheckbox>
      ))}
    </div>
  );
}
