import Link from "next/link";

import { ContractData } from "@/types/index";
import { LocalContract } from "@/services/ProjectService";

interface ContractListItemProps {
  contract: LocalContract;
}

export const ContractListItem = (props: ContractListItemProps) => {
  const contract = props.contract;

  let backgroundColor = "bg-[#FF6D70]";

  const networkBadges = contract.addresses.map(
    (contractInstance: ContractData) => (
      <Link
        href={`/contracts/${contractInstance?.network}/${contractInstance?.address}`}
        key={contractInstance.network}
        className={
          "text-sm font-medium px-2.5 py-0.5 rounded ml-3 hover:bg-indigo-500 " +
          backgroundColor
        }
      >
        {contractInstance.network}
      </Link>
    )
  );

  return (
    <tr className="align-items-center mt-8">
      <td>
        <span className="italic rounded-full bg-indigo-600 py-1 px-2.5 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {contract.name}
        </span>
      </td>
      <td>{networkBadges}</td>
    </tr>
  );
};
