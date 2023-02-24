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
      className={`badge badge-${getNetworkColor(address.network)} ml-1`}
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
