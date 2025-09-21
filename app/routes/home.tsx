import type { Route } from "./+types/home";
import { VISIBLE_COMPONENTS } from "../models/components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "jarrett's web labs" },
    { name: "description", content: "Jarrett Huang's Web Experiments" },
  ];
}

export default function Home() {
  return (
    <ul className="flex flex-col gap-4">
      {VISIBLE_COMPONENTS.map((component) => (
        <li key={component.id}>
          <a href={component.url}>{component.name}</a>
        </li>
      ))}
    </ul>
  );
}
