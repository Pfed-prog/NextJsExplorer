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
  abi?: string;
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

export function getProject(name: string): Project {
  const projects: Project[] = getProjects();
  const project = projects.find(
    (i: Project) => i.name.toLowerCase() === name.toLowerCase()
  );
  if (project) return project;
  throw new Error("no project found");
}
