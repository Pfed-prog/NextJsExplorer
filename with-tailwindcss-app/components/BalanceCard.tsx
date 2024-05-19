import { useState, useEffect } from "react";
import { formatUnits } from "viem";
import { mainnet, optimism } from "viem/chains";
import { getBalance } from "@wagmi/core";

import { type AddressInfo } from "@/hooks/blockscout/queries";
import { wagmiConfig } from "@/services/wagmiConfig";

interface ContractProps {
  address: `0x${string}`;
  addressInfo: AddressInfo;
}

export const BalanceCard = (props: ContractProps) => {
  const addressInfo = props.addressInfo;

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
    <div className="items-center justify-center max-w-xs mx-auto font-semibold mt-2 rounded-lg bg-gray-50 shadow p-4 mb-8">
      <div className="text-3xl sm:text-4xl font-semibold">
        {addressInfo?.implementation_name ??
          addressInfo?.name ??
          addressInfo?.ens_domain_name}
      </div>

      <div className="mt-2">
        <p>Optimism Balance: {balanceOP} ETH</p>
        <p>Mainnet Balance: {balanceMainnet} ETH</p>
      </div>
    </div>
  );
};
