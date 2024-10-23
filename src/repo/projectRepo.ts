import { promises as fs } from "fs";

export interface Project {
  slug: string;
  path: string;
}
const projects: Project[] = [];
const PROJCET_DIR = "./src/content/projects/";


async function fetchProject() {
  const files = await fs.readdir(PROJCET_DIR);

  for (const fileName of files) {
    const slug = fileName.replace(".md", "");
    const path = PROJCET_DIR.concat(fileName);

    const project = { slug, path } as Project;
    projects.push(project);
  }
}

export async function getAllProjects() {
  if (projects.length === 0) await fetchProject();
  return projects;
}

export async function getProjectMarkdown(project: Project) {
  try {
    const markdown = await fs.readFile(project.path);
    return markdown;
  } catch (error) {
    return error;
  }
}

export async function getProjectBySlug(slug: string){
  if(projects.length === 0) await fetchProject()
  const project = projects.filter(it => it.slug === slug).at(0)
  return project 
}


