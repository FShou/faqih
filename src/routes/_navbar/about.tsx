import Experiences from "@/components/experiences";
import MyStory from "@/components/my-story";
import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_navbar/about")({
  component: AboutComponent,
  beforeLoad: () => ({ getTitle: () => "About" }),
});

function AboutComponent() {
  return (
    <div className="flex w-svw md:h-[calc(100svh-3rem)] justify-center items-center overflow-scroll">
      <div className="mx-4 w-full md:h-[97%] flex flex-col md:flex-row">
        <Card className="basis-2/3 p-8 m-2 md:m-4">
          <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            My story
          </h2>
          <MyStory />
          <h3 className="mt-3 scroll-m-20 text-2xl font-semibold tracking-tight">
            Preffered Tech Stack
          </h3>
        </Card>
        <Card className="m-2 md:m-4 p-8 basis-1/3">
          <h2 className="border-b pb-2 mb-3 text-2xl font-semibold tracking-tight first:mt-0">
            My Experiences
          </h2>
          <Experiences />
        </Card>
      </div>
    </div>
  );
}
