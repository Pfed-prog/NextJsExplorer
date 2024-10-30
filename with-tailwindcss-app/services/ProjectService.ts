import ALL_PROJECT_DATA from "@/data/projects";

export function getProjects(): Project[] {
  return ALL_PROJECT_DATA;
}

export type ContractData = {
  address: string;
  network: string;
};

export type LocalContract = {
  name: string;
  addresses: ContractData[];
};

export type Project = {
  name: string;
  logoPath: string;
  description: string;
  contracts: LocalContract[];
  height?: number;
  width?: number;
};

export function getProject(name: string): Project | undefined {
  const projects: Project[] = getProjects();
  const project: Project | undefined = projects.find(
    (i: Project) => i.name.toLowerCase() === name.toLowerCase()
  );
  return project;
}
