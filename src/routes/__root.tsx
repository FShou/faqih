import {
  Outlet,
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
        const { context } = match;
        return context.getTitle();
      })
      .filter(Boolean);
    void Promise.all(breadcrumbPromises).then((titles) => {
      document.title = titles.join(" · ");
      return titles;
    });
  }, [matches]);

  if (import.meta.env.DEV) {
    return (
      <>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </>
    );
  }

  return <Outlet />;
}
