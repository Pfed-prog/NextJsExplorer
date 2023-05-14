import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useNetwork } from "wagmi";

import { getNetworkName } from "utils/styling";
import { Contract, Address } from "types";

interface ContractListItemProps {
  contract: Contract;
}

export const ContractListItem = (props: ContractListItemProps) => {
  const contract = props.contract;

  const { chain } = useNetwork();
  const [address, setAddress] = useState("");

  useEffect(() => {
    let networkName = "mainnet";

    if (chain) {
      networkName = getNetworkName(chain.id);
    }

    const address = contract.addresses.find(
      (i: Address) => i.network === networkName
    );
    if (address) {
      setAddress(address.address);
    }
  }, [contract.addresses]);

  const networkBadges = contract.addresses.map((address: Address) => (
    <span
      key={address.network}
      className="bg-[#FF6D70] text-sm font-medium mr-2 px-2.5 py-0.5 rounded border ml-1"
    >
      {address.network}
    </span>
  ));

  if (address) {
    return (
      <tr className="align-items-center">
        <td>
          <button
            type="button"
            className="rounded-full bg-indigo-600 py-1 px-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link href={`/contracts/${address}`}>
              <div className="italic">{contract.name}</div>
            </Link>
          </button>
        </td>
        <td>
          <div>{networkBadges}</div>
        </td>
      </tr>
    );
  }

  return <></>;
};
