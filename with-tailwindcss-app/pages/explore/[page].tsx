import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ContractListItem } from "../../components/ContractListItem";
import { getProject } from "../../services/ProjectService";
import { Project, Contract } from "../../types";

const Explorer: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<Project | undefined>(undefined);

  const fetchProject = async () => {
    if (page) {
      const project = await getProject(page as string);

      setProject(project);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [page]);

  const contractListItems = project?.contracts.map((contract: Contract) => (
    <ContractListItem key={contract.name} contract={contract} />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-900 p-2">
      <h2 className="text-3xl mt-10">{project?.name}</h2>
      <h3 className="text-xl mt-10">Contracts</h3>
      <table className="flex items-center justify-center">
        <tbody>{contractListItems}</tbody>
      </table>
    </div>
  );
};

export default Explorer;
