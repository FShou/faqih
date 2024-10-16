import { Card } from "@/components/ui/card";
import SocialMedia from "@/components/ui/social-media";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_navbar/")({
  component: HomeComponent,
  beforeLoad: () => ({ getTitle: () => "Faqih Suyudi" }),
});

function HomeComponent() {
  return (
    <div className="flex w-svw h-[calc(100svh-3rem)] justify-center items-center ">
      <Card className="mx-4 w-full h-[97%] flex flex-col-reverse md:flex-row">
        <div className="flex md:items-center  md:justify-center basis-1/2 p-3">
          <div className="flex flex-col justify-around gap-y-2 md:gap-y-4 items-center text-center">
            <h1 className="tracking-tighter font-black text-2xl md:font-black md:text-5xl text-muted-foreground">
              Hi, I'm <span className="text-primary">Achmad Faqih Suyudi</span>
            </h1>
            <p className="text-primary/80 md:text-lg w-full">
              I am an{" "}
              <span className="font-medium text-primary">
                Android Developer{" "}
              </span>
              based in Indonesia with a passion for creating innovative and
              user-friendly mobile applications.
            </p>
            <SocialMedia />
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center ">
          <Card className="p-3">
            <Card className="size-[250px] md:size-[600px] object-fit overflow-hidden">
              <img src="/my-pic.jpg" />
            </Card>
          </Card>
        </div>
      </Card>
    </div>
  );
}
