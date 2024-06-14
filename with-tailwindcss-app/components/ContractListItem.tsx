import Link from "next/link";

import { ContractData } from "@/types/index";
import { LocalContract } from "@/services/ProjectService";

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
  }
  return "bg-[#FF6D70]";
}

interface ContractListItemProps {
  contract: LocalContract;
}

export const ContractListItem = (props: ContractListItemProps) => {
  const contract = props.contract;

  const networkBadges = contract.addresses.map(
    (contractInstance: ContractData) => (
      <Link
        href={`/contracts/${contractInstance?.network}/${contractInstance?.address}`}
        key={contractInstance.network}
      >
        <span
          className={
            "text-sm text-white font-medium px-2.5 py-1 rounded ml-3 md:ml-6 hover:bg-indigo-500 " +
            getColor(contractInstance.network)
          }
        >
          {contractInstance.network}
        </span>
      </Link>
    )
  );

  return (
    <tr>
      <td>
        <span className="italic rounded-full bg-indigo-600 py-1 px-2 text-xs font-bold text-gray-200 shadow-sm">
          {contract.name}
        </span>
      </td>
      <td>
        <div className="break-all">{networkBadges}</div>
      </td>
    </tr>
  );
};
