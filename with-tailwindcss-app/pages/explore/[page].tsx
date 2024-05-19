import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import { ContractListItem } from "@/components/ContractListItem";
import { PageSEO } from "@/components/SEO";
import { getProject, LocalContract } from "@/services/ProjectService";

const Explorer: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const project = getProject(page as string);

  const contractListItems = project?.contracts.map(
    (contract: LocalContract) => (
      <ContractListItem key={contract.name} contract={contract} />
    )
  );

  return (
    <div>
      <PageSEO />

      <div className="p-2">
        <h2 className="text-3xl mt-5 font-semibold">{project?.name}</h2>

        <div className="mt-10 mx-auto flex items-center justify-center">
          <Image
            src={"/" + project?.logoPath}
            alt={project?.name ?? ""}
            width={100}
            height={200}
            priority
          />
        </div>

        <table className="flex items-center justify-center border-separate border-spacing-y-3 mt-5">
          <tbody>{contractListItems}</tbody>
        </table>

        <div className="mx-auto max-w-2xl mt-4 flex flex-auto flex-col justify-between">
          <div className="text-lg mt-8 leading-8 text-center text-gray-900">
            {project?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
