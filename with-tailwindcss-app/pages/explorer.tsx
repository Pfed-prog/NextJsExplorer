import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageSEO } from "@/components/SEO";
import { getProjects, Project } from "@/services/ProjectService";

const Explorer: NextPage = () => {
  const projects: Project[] = getProjects();

  const projectListItems = projects.map((project: Project) => (
    <div
      className="project-card fade-in-cards shadow-sm rounded"
      key={project.name}
    >
      <Link href={`/explore/${project.name}`}>
        <Image
          width={400}
          height={400}
          src={`/${project.logoPath}`}
          alt={project.name}
        />
      </Link>
    </div>
  ));

  return (
    <div>
      <PageSEO path="/explorer" />

      <h1 className="text-4xl font-semibold text-gray-300 mt-4 sm:mt-10 px-4 fade-in-text md:tracking-wide">
        Popular EVM Sets of Contracts
      </h1>

      <div className="card-columns mt-10 px-10 md:px-20 gap-x-6 gap-y-4">
        {projectListItems}
      </div>
    </div>
  );
};

export default Explorer;
