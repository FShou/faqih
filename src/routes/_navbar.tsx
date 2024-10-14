import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_navbar")({
  beforeLoad: () => ({ getTitle: () => undefined }),
  component: Navbar,
});

function Navbar() {
  return (
    <div className="flex flex-col-reverse md:flex-col  w-svw h-svh">
      <div className="w-full h-12 pt-2 flex justify-center items-center">
        <Tabs defaultValue="Home">
          <TabsList>
            <TabsTrigger value="Home">Home</TabsTrigger>
            <TabsTrigger value="About">About Me</TabsTrigger>
            <TabsTrigger value="Projects">Projects</TabsTrigger>
            <TabsTrigger value="Blog">Blog</TabsTrigger>
          </TabsList>
          <TabsContent value="Home"><Navigate to="/" /></TabsContent>
          <TabsContent value="About"> <Navigate to="/about" /></TabsContent>
          <TabsContent value="Projects"> <Navigate to="/projects" /></TabsContent>
          <TabsContent value="Blog"> <Navigate to="/blogs" /></TabsContent>
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
