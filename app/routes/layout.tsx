import { Outlet } from "react-router";
import type { RouteHandle } from "~/root";

export const handle: RouteHandle = {
  title: "Home",
  path: "",
};
export default function Layout() {
  return <Outlet />;
}
