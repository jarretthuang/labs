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
      <body>
        <main className="w-screen h-screen flex flex-col">
          <section className="m-auto w-full h-full max-w-5xl flex flex-col p-12">
            <header className="flex gap-4 items-center">
              <a href="/">
                <img
                  src="logo.png"
                  className="w-36 pointer-events-none select-none object-contain"
                ></img>
              </a>
              {breadcrumbs}
            </header>
            <div className="flex-1 flex p-8">{children}</div>
          </section>
          <span className="text-xs opacity-30 absolute bottom-0 right-0 p-12">
            @ {new Date().getFullYear()} jarrett huang. all rights reserved.
          </span>
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
