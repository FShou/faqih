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
              {/* TODO: Move img src to public */}
              <img src="https://private-user-images.githubusercontent.com/110684084/376100166-a6c63c61-fff2-4bb5-9a52-83665327714b.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjg4NzYzMTgsIm5iZiI6MTcyODg3NjAxOCwicGF0aCI6Ii8xMTA2ODQwODQvMzc2MTAwMTY2LWE2YzYzYzYxLWZmZjItNGJiNS05YTUyLTgzNjY1MzI3NzE0Yi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAxNFQwMzIwMThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hOGYwMzQzNWYzMTA1NDRkZTA5ZTc2OWZjNjYzNzkyNTllZjFhYTQwNjE1NmVhYmQ4NTljOTAxMjk5YmRiMDQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.yPBOTW33uAwtZ3_vArsjPF9QE-gNjlndOdiqG-688is" />
            </Card>
          </Card>
        </div>
      </Card>
    </div>
  );
}
