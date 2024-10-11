import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  beforeLoad: () => ({ getTitle: () => "Home" }),
});

function HomeComponent() {
  return (
    <div className="p-2 font-black">
      <h3>Welcome Home!</h3>
      <Button asChild>
        <Link to="/about" >About</Link>
      </Button>
    </div>
  );
}
