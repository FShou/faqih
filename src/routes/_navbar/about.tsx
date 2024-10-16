import Experiences from "@/components/experiences";
import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_navbar/about")({
  component: AboutComponent,
  beforeLoad: () => ({ getTitle: () => "About" }),
});

function AboutComponent() {
  return (
    <div className="flex w-svw h-[calc(100svh-3rem)] justify-center items-center ">
      <Card className="mx-4 w-full h-[97%] flex flex-col md:flex-row">
        <Card className="basis-2/3 p-8 m-8">
          <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            My story
          </h2>
          <p className="text-primary/80 md:text-lg w-full mt-3">
            Hi there! I'm{" "}
            <span className="font-medium text-primary">Faqih</span>. Before
            diving into tech, I worked as a teacher in an Islamic Boarding
            School, which really helped me improve my communication and time
            management skills—both of which are super useful when working in a
            team.
          </p>
          <br />
          <p className="text-primary/80 md:text-lg w-full">
            Now, I’m studying{" "}
            <span className="font-medium text-primary">
              Informatics Engineering
            </span>
            , with a focus on Android development. One of the best parts of my
            journey has been joining{" "}
            <span className="font-medium text-primary">
              Bangkit Academy 2024
            </span>
            . This fantastic program, supported by companies like{" "}
            <i>Google, GoTo, Tokopedia, and Traveloka</i>, taught me valuable
            skills in Android technology and gave me great insights into the
            tech industry. It was an exciting opportunity that helped me grow
            both personally and professionally.
          </p>
          <br />
          <p className="text-primary/80 md:text-lg w-full">
            I’m really excited to apply what I’ve learned in new projects and
            collaborate with others who share my passion for technology. I
            believe that every challenge is an opportunity to learn something
            new, and I can’t wait to see where this journey takes me !
          </p>
        </Card>
        <Card className="my-8 mr-8 p-8 basis-1/3">
          <h2 className="border-b pb-2 mb-3 text-2xl font-semibold tracking-tight first:mt-0">
            My Experiences
          </h2>
          {/* TODO  */}
          <Experiences />
        </Card>
      </Card>
    </div>
  );
}
