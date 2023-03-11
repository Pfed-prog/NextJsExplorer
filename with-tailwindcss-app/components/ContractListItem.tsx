import React, { useEffect, useState } from "react";
import { Contract, Address } from "../types";
import Link from "next/link";
import { useNetwork } from "wagmi";

import { getNetworkColor, getNetworkName } from "../utils/styling";

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
      className={`bg-${getNetworkColor(
        address.network
      )} text-${getNetworkColor(
        address.network
      )}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-${getNetworkColor(
        address.network
      )}-400 border border-pink-${getNetworkColor(address.network)} ml-1`}
    >
      {address.network}
    </span>
  ));

  if (address) {
    return (
      <tr className="align-items-center">
        <td>
          <Link href={`/contracts/${address}`}>{contract.name}</Link>
        </td>
        <td>
          <div>{networkBadges}</div>
        </td>
      </tr>
    );
  }

  return <></>;
};
