import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ContractListItem } from "../../components/ContractListItem";
import { getProject } from "../../services/ProjectService";
import { Project, Contract } from "../../types";

const Explorer: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const [project, setProject] = useState<Project | undefined>(undefined);

  const fetchProject = async () => {
    if (page) {
      const project = await getProject(page as string);

      setProject(project);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [page]);

  const contractListItems = project?.contracts.map((contract: Contract) => (
    <ContractListItem key={contract.name} contract={contract} />
  ));

  return (
    <div className="min-h-screen bg-sky-100 p-2">
      <h2 className="text-3xl mt-5 font-semibold">{project?.name}</h2>
      <img
        className="h-12 mt-8 mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center"
        src={"/" + project?.logoPath}
        alt=""
      />
      <table className="flex items-center justify-center mt-12">
        <tbody>{contractListItems}</tbody>
      </table>
      <div className="mx-auto max-w-2xl mt-10 flex flex-auto flex-col justify-between">
        <div className="text-lg mt-8 leading-8 text-center text-gray-900">
          {project?.description}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
