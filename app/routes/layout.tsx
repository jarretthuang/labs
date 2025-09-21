import { Outlet } from "react-router";
import { Component } from "~/models/components";
import type { RouteHandle } from "~/root";

export const handle: RouteHandle = {
  component: new Component("", "Home", ""),
};
export default function Layout() {
  return <Outlet />;
}
