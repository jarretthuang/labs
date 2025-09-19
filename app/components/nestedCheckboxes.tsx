import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "nested checkboxes - jarrett's web labs" }];
}

export const handle = {
  title: "Nested checkboxes",
};

export default function NestedCheckboxes() {
  return <div>TEST</div>;
}
