import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { VISIBLE_COMPONENTS } from "./models/components";

export default [
  route("", "routes/layout.tsx", [
    index("routes/home.tsx"), // this is the default child at "/"
    ...VISIBLE_COMPONENTS.map((component) =>
      route(
        component.id,
        `./components/${component.id}/${component.id}-demo.tsx`,
      ),
    ),
  ]),
] satisfies RouteConfig;
