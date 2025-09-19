import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "signup - jarrett's web labs" }];
}

export default function SignupForm() {
  return <div>test</div>;
}
