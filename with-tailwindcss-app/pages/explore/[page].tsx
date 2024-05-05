import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { ContractListItem } from "components/ContractListItem";
import { getProject } from "services/ProjectService";

const Explorer: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const [project, setProject] = useState<any>();

  const fetchProject = async () => {
    if (page) {
      const project = await getProject(page as string);
      setProject(project);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [page]);

  const contractListItems = project?.contracts.map((contract: any) => (
    <ContractListItem key={contract.name} contract={contract} />
  ));

  return (
    <div className="p-2">
      <h2 className="text-3xl mt-5 font-semibold">{project?.name}</h2>
      <Image
        className="mt-10 mx-auto flex items-center justify-center"
        src={"/" + project?.logoPath}
        alt={project?.name ?? ""}
        width={100}
        height={400}
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
