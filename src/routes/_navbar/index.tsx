import Underconstruction from "@/components/underconstruction";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_navbar/")({
  component: HomeComponent,
  beforeLoad: () => ({ getTitle: () => "Faqih Suyudi" }),
});

function HomeComponent() {
  return <Underconstruction />;
}
