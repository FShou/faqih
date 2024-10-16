import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_navbar")({
  beforeLoad: () => ({ getTitle: () => undefined }),
  component: Navbar,
});

function Navbar() {
  const navItems = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Projects", route: "/projects" },
    { title: "Blog", route: "/blogs" },
  ];
  return (
    <div className="flex flex-col-reverse md:flex-col  w-svw h-svh">
      <div className="w-full h-12 pt-2 flex justify-center items-center">
        <Tabs defaultValue="Home">
          <TabsList>
            {navItems.map((it) => (
              <TabsTrigger value={it.title}>{it.title}</TabsTrigger>
            ))}
          </TabsList>
          {navItems.map((it) => (
            <TabsContent value={it.title}>
              <Navigate to={it.route} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Outlet />
    </div>
  );
}

function Navigate({ to }: { to: string }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: to });
  }, []);
  return <></>;
}
