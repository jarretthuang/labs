import type { RouteHandle } from "~/root";
import type { Route } from "../../+types/root";
import Checkbox from "./checkbox";
import { checkboxes } from "./models";

export function meta({}: Route.MetaArgs) {
  return [{ title: "nested checkboxes - jarrett's web labs" }];
}

export const handle: RouteHandle = {
  title: "Nested checkboxes",
  path: "checkboxes",
};

export default function NestedCheckboxes() {
  return (
    <div>
      {checkboxes.map((checkbox) => (
        <Checkbox key={checkbox.id} item={checkbox} level={0}></Checkbox>
      ))}
    </div>
  );
}
