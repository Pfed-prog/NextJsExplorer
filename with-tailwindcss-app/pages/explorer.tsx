import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { getProjects } from "services/ProjectService";

const Explorer: NextPage = () => {
  const [projects, setProjects] = useState<any[]>();

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };

    fetchProjects();
  }, []);

  const projectListItems = projects?.map((project: any) => (
    <div
      className="card project-card shadow-sm bg-white rounded"
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
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-900 p-2">
      <h2 className="text-4xl mt-10">DeFi</h2>
      <div className="card-columns mt-10">{projectListItems}</div>
    </div>
  );
};

export default Explorer;
