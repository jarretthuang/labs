import type { RouteHandle } from "~/root";
import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "nested checkboxes - jarrett's web labs" }];
}

export const handle: RouteHandle = {
  title: "Nested checkboxes",
  path: "checkboxes",
};

interface CheckboxItem {
  id: number;
  name: string;
  checked: boolean | "indeterminate";
  children?: CheckboxItem[];
}

export default function NestedCheckboxes() {
  return <div>TEST</div>;
}
