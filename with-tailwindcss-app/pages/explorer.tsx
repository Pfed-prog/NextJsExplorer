import type { NextPage } from "next";
import React, { useState, useEffect } from "react";

import { getProjects } from "../services/ProjectService";
import { Project } from "../types";
import Link from "next/link";

const Explorer: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(new Array<Project>());

  const fetchProjects = async () => {
    const projects = await getProjects();

    setProjects(projects);
    setLoading(false);
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
    <>
      <h2 className="text-3xl mt-10">DeFi</h2>
      <div className="card-columns mt-10">{projectListItems}</div>
    </>
  );
};

export default Explorer;
