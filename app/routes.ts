import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "routes/layout.tsx", [
    index("routes/home.tsx"), // this is the default child at "/"
    route("signup", "./components/signup/signupForm.tsx"),
    route("checkboxes", "./components/checkboxes/nestedCheckboxes.tsx"),
  ]),
] satisfies RouteConfig;
