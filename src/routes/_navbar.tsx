import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute, Outlet,  useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_navbar")({
  beforeLoad: () => ({ getTitle: () => undefined }),
  component: Navbar,
});

function Navbar() {

  // Slice last char so when user get into '/projects/' it's still valid 
  const pathname = useRouterState()
    .location
    .pathname
    .slice(0,-1)
    
  
  const navItems = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Projects", route: "/projects" },
    { title: "Blog", route: "/blogs" },
  ];

  const defaulVal = navItems
    .filter(it => it.route.includes(pathname))
    .at(0)
    ?.title 
    || ""


  return (
    <div className="flex flex-col-reverse md:flex-col  w-svw h-svh">
      <div className="w-full h-12 pt-2 flex justify-center items-center">
        <Tabs defaultValue={defaulVal}>
          <TabsList>
            {navItems.map((it,idx) => (
              <TabsTrigger key={it.title+idx} value={it.title}>{it.title}</TabsTrigger>
            ))}
          </TabsList>
          {navItems.map((it,idx) => (
            <TabsContent key={it.title+idx}value={it.title}>
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
