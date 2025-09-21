import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Analytics } from "@vercel/analytics/react";
import { useMemo } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export type RouteHandle = {
  title: string;
  path: string;
};

export function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const handles = (matches ?? [])
    .map((match) => match.handle as RouteHandle)
    .filter(Boolean);

  const breadcrumbs = useMemo(() => {
    const result = [];
    const currentPaths = [];
    for (const handle of handles) {
      if (handle.path) {
        currentPaths.push(handle.path);
      }
      const fullPath = `/${currentPaths.join("/")}`;
      if (result.length > 0) {
        result.push(<span key={`${fullPath}/`}>/</span>);
      }
      result.push(
        <a
          key={fullPath}
          href={fullPath}
          className="lowercase text-xl text-gray-800"
        >
          {handle.title}
        </a>,
      );
    }
    return <>{result}</>;
  }, [handles]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex justify-center">
        <main className="flex flex-col w-full max-w-4xl min-h-screen p-8 gap-2">
          <header className="flex flex-col">
            <div className="flex flex-col md:flex-row md:items-end">
              <img
                src="logo.png"
                className="w-32 min-w-24 pointer-events-none select-none object-contain"
              ></img>
              <span className="p-4 italic text-gray-800">
                <a href="https://jhuang.ca">jarrett huang</a>'s web experiments
              </span>
            </div>
            <nav className="p-4 flex gap-2 items-center">{breadcrumbs}</nav>
          </header>
          <div className="flex-1 flex p-5 border-t-1 border-t-gray-200">
            {children}
          </div>
          <footer className="w-full flex justify-center">
            <span className="text-xs opacity-30 p-12">
              @ {new Date().getFullYear()} jarrett huang. all rights reserved.
            </span>
          </footer>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
      <Analytics />
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
