import ContentHeader from "@/components/content-header";
import { Card } from "@/components/ui/card";
import { slulToTitle } from "@/lib/utils";
import { getProjectBySlug, getProjectMarkdown } from "@/repo/projectRepo";
import {
  createFileRoute,
  ErrorComponent,
  notFound,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPageComponent,
  beforeLoad: ({ params }) => {
    const projectName = slulToTitle(params.slug);
    return { getTitle: () => projectName };
  },
  loader: async ({ params }) => {
    const project = await getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  errorComponent: ErrorComponent,
});

function ProjectPageComponent() {
  const [markdown, setMarkdwon] = useState("");

  const data = Route.useLoaderData();
  useEffect(() => {
    const fetctMarkdown = async () => {

      const res = await getProjectMarkdown(data);
      if (!res) return;

      setMarkdwon((_) => res as string);
    };

    fetctMarkdown();
  }, [markdown]);
  return (
    <div className="flex w-svw h-svh justify-center items-center ">
      <Card className="mx-8 w-full h-[95%] flex flex-col grow overflow-scroll">
        <ContentHeader slug={data.slug} />
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </Card>
    </div>
  );
}
