import {
  Link,
  Outlet,
  createRootRoute,
  createRootRouteWithContext,
  useMatches,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect } from "react";

interface RootContext {
  getTitle?: () => string | Promise<string>;
}

export const Route = createRootRouteWithContext<RootContext>()({
  beforeLoad: () => ({ getTitle: () => "Portfolio" }),
  component: RootComponent,
});

function RootComponent() {
  const matches = useMatches();

  useEffect(() => {
    // Set document title based on lowest matching route with a title
    const breadcrumbPromises = [...matches]
      .reverse()
      .map((match) => {
        if (!("getTitle" in match.context)) {
          return undefined;
        }
        const { context } = match;
        return context.getTitle();
      })
      .filter(Boolean);
    void Promise.all(breadcrumbPromises).then((titles) => {
      document.title = titles.join(" · ");
      return titles;
    });
  }, [matches]);

  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/about"
          activeProps={{
            className: "font-bold",
          }}
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
