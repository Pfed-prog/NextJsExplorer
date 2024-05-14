import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { PageSEO } from "@/components/SEO";
import { getProjects, Project } from "@/services/ProjectService";

const Explorer: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = getProjects();
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  const projectListItems = projects?.map((project: Project) => (
    <div className="project-card shadow-sm bg-white rounded" key={project.name}>
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
      <PageSEO />

      <h2 className="text-4xl mt-10">Popular EVM Sets of Contracts</h2>
      <div className="card-columns mt-10">{projectListItems}</div>
    </div>
  );
};

export default Explorer;
