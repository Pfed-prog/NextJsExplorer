import ALL_PROJECT_DATA from "data/projects";

export async function getProjects() {
  return ALL_PROJECT_DATA;
}

export async function getProject(name: string) {
  const projects = await getProjects();
  const project = projects.find(
    (i: any) => i.name.toLowerCase() === name.toLowerCase()
  );

  return project;
}
