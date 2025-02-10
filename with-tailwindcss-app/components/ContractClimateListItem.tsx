import Link from "next/link";

import { ContractData } from "@/types/index";
import { ClimateProject } from "@/services/ProjectService";

function getColor(network?: string) {
  switch (network) {
    case "mainnet":
      return "bg-[#323232]";
    case "optimism":
      return "bg-[#DC3545]";
    case "base":
      return "bg-[#2151F5]";
    case "arbitrum":
      return "bg-[#213147]";
    case "zora":
      return "bg-[#417DFA]";
    case "polygon":
      return "bg-[#6101FE]";
    case "mode":
      return "bg-[#E1FE01]";
    case "redstone":
      return "bg-[#F34242]";
    case "filecoin":
      return "bg-[#0090FF]";
  }
  return "bg-[#FF6D70]";
}

interface ContractListItemProps {
  contract: ClimateProject;
}

export const ContractClimateListItem = (props: ContractListItemProps) => {
  const contract = props.contract;

  const networkBadges = contract.addresses.map(
    (contractInstance: ContractData) => (
      <Link
        href={`/contracts/${contractInstance?.network}/${contractInstance?.address}`}
        key={contractInstance.network}
        className="items-center tracking-wide"
      >
        <span
          className={
            "text-sm text-white font-medium px-2.5 py-1 rounded-sm hover:bg-indigo-500 " +
            getColor(contractInstance.network)
          }
        >
          {contractInstance.network}
        </span>{" "}
      </Link>
    )
  );

  return (
    <tr>
      <td>
        <span className="text-xs md:text-sm font-bold text-gray-800 px-2">
          {contract.website ? (
            <Link href={contract.website}>{contract.title}</Link>
          ) : (
            contract.title
          )}
        </span>
      </td>
      <td>
        <span className="text-xs md:text-sm font-bold text-gray-800 px-2">
          {contract.name}
        </span>
      </td>
      <td>
        <div className="flex flex-1 p-6 flex-col justify-between">
          <p className="flex-wrap break-words leading-loose">{networkBadges}</p>
        </div>
      </td>
    </tr>
  );
};
