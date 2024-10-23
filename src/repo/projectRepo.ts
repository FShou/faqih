export interface Project {
  slug: string;
  url: string;
}
const projects: Project[] = [];


async function fetchProject() {
  const res = await fetch(import.meta.env.VITE_PROJECT_DIR, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API}`
    }
  });
  const files = await res.json()
  console.log(files)
  
  

  for (const file of files) {
    const slug = file.name.replace(".md", "");
    const url = file.download_url

    const project = { slug, url } as Project;
    projects.push(project);
  }
}

export async function getAllProjects() {
  if (projects.length === 0) await fetchProject();
  return projects;
}

export async function getProjectMarkdown(project: Project) {
  try {
    const res = await fetch(project.url);
    const markdown = await res.text()
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


