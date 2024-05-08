import ALL_PROJECT_DATA from "@/data/projects";

export function getProjects(): Project[] {
  return ALL_PROJECT_DATA;
}

export type Project = {
  name: string;
  logoPath: string;
  description: string;
  contracts: {
    name: string;
    abi: Array<object>;
    addresses: {
      network: string;
      address: string;
    }[];
  }[];
};

export function getProject(name: string): Project {
  const projects: Project[] = getProjects();
  const project = projects.find(
    (i: Project) => i.name.toLowerCase() === name.toLowerCase()
  );
  if (project) return project;
  throw new Error("no project found");
}
