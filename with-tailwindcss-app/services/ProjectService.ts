import ALL_PROJECT_DATA from "data/projects";

export async function getProjects() {
  return ALL_PROJECT_DATA;
}

interface Project {
  name: string;
}

export async function getProject(name: string) {
  const projects: Project[] = await getProjects();
  const project = projects.find(
    (i: Project) => i.name.toLowerCase() === name.toLowerCase()
  );

  return project;
}
