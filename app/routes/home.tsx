import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "jarrett's web labs" },
    { name: "description", content: "Jarrett Huang's Web Experiments" },
  ];
}

export const handle = {
  title: "Home",
};

export default function Home() {
  return (
    <ul>
      <li>
        <a href="/signup">Signup Form</a>
      </li>
    </ul>
  );
}
