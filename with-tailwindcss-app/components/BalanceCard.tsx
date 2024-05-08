import { useState, useEffect } from "react";
import { formatUnits } from "viem";
import { mainnet, optimism } from "viem/chains";
import { getBalance } from "@wagmi/core";

import { wagmiConfig } from "@/services/wagmiConfig";

interface ContractProps {
  address: `0x${string}`;
}

export const BalanceCard = (props: ContractProps) => {
  const [balanceMainnet, setMainnetBalance] = useState<string>("0");
  const [balanceOP, setOPBalance] = useState<string>("0");

  const fetchBalance = async () => {
    const balanceOPCrude = await getBalance(wagmiConfig, {
      address: props.address,
      chainId: optimism.id,
    });

    const balanceOpString = formatUnits(
      balanceOPCrude.value,
      balanceOPCrude.decimals
    );
    setOPBalance(balanceOpString);

    const balanceMainnetCrude = await getBalance(wagmiConfig, {
      address: props.address,
      chainId: mainnet.id,
    });

    const balanceMainnetString = formatUnits(
      balanceMainnetCrude.value,
      balanceMainnetCrude.decimals
    );
    setMainnetBalance(balanceMainnetString);
  };

  useEffect(() => {
    if (props.address) fetchBalance();
  }, [props]);

  return (
    <div className="text-center">
      <p>Optimism Balance: {balanceOP} ETH</p>
      <p>Mainnet Balance: {balanceMainnet} ETH</p>
    </div>
  );
};
