import type { Route } from "./+types/home";
import type { RouteHandle } from "~/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "jarrett's web labs" },
    { name: "description", content: "Jarrett Huang's Web Experiments" },
  ];
}

export default function Home() {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <a href="/signup">Signup Form</a>
      </li>
      <li>
        <a href="/checkboxes">Nested Checkboxes</a>
      </li>
    </ul>
  );
}
