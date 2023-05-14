import type { NextPage } from "next";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { getProjects } from "services/ProjectService";
import { Project } from "types";

const Explorer: NextPage = () => {
  const [projects, setProjects] = useState(new Array<Project>());

  const fetchProjects = async () => {
    const projects = await getProjects();
    setProjects(projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const projectListItems = projects.map((project: Project) => (
    <div
      className="card project-card shadow-sm bg-white rounded"
      key={project.name}
    >
      <Link
        href={`/explore/${project.name}`}
        className="text-center stretched-link"
      >
        <img className="card-img" src={project.logoPath} alt={project.name} />
      </Link>
    </div>
  ));
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-900 p-2">
      <h2 className="text-3xl mt-10">DeFi</h2>
      <div className="card-columns mt-10">{projectListItems}</div>
    </div>
  );
};

export default Explorer;
