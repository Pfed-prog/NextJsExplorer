import React, { useEffect, useState, useRef } from "react";
import { useProvider } from "wagmi";

import { isContractAddress, getEnsNameOrAddress } from "utils/web3";

export const ETHERSCAN_ADDRESS_LINK = "https://etherscan.io/address/";

interface ContractValueProps {
  value: any;
}

export const ContractValue = (props: ContractValueProps) => {
  const provider = useProvider();
  const isMounted = useRef(true);
  const [loading, setLoading] = useState(true);
  const [isContract, setIsContract] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");

  useEffect(() => {
    async function asyncEffect() {
      if (typeof props.value === "string" && props.value.length === 42) {
        const isContract = await isContractAddress(props.value, provider);

        if (isContract && isMounted.current) {
          setIsContract(isContract);
        } else {
          const nameOrAddress = await getEnsNameOrAddress(
            props.value,
            provider
          );
          if (isMounted.current) setAccountAddress(nameOrAddress);
        }
      }

      if (isMounted.current) setLoading(false);
    }

    asyncEffect();

    return () => {
      isMounted.current = false;
    };
  }, [props.value]);

  if (loading) {
    return null;
  }

  if (isContract) {
    return (
      <>
        <a href={`/contracts/${props.value}`}>{props.value}</a>
        <small className="ml-1">(contract)</small>
      </>
    );
  }

  if (accountAddress) {
    return (
      <a
        href={ETHERSCAN_ADDRESS_LINK + accountAddress}
        target="_blank"
        rel="noopener noreferrer"
      >
        {accountAddress}
      </a>
    );
  }

  return <div className="text-sm sm:text-xl p-1">{props.value.toString()}</div>;
};
