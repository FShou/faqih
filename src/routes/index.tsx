import HeroSection from "@/components/hero-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  beforeLoad: () => ({ getTitle: () => "Faqih Suyudi" }),
});

function HomeComponent() {
  return (
    <div className="p-2 ">
      <HeroSection />
    </div>
  );
}
