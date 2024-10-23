import ContentHeader from "@/components/content-header";
import { Card } from "@/components/ui/card";
import { slulToTitle } from "@/lib/utils";
import { getProjectBySlug, getProjectMarkdown } from "@/repo/projectRepo";
import {
  createFileRoute,
  ErrorComponent,
  notFound,
} from "@tanstack/react-router";
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
  // const markdown = `# Hello theze **nuts**`;

  let markdown = "";

  const data = Route.useLoaderData();
  getProjectMarkdown(data).then((it) => {
    markdown = it as string;
  });
  return (
    <div className="flex w-svw h-svh justify-center items-center ">
      <Card className="mx-8 w-full h-[95%] flex flex-col grow overflow-scroll">
        <ContentHeader slug={data.slug} />
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </Card>
    </div>
  );
}
