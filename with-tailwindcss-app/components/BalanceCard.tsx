import { formatEther } from "viem";

import { type AddressInfo } from "@/hooks/blockscout/queries";
import { parseHash } from "@/utils/hashes";
import Image from "next/image";

interface ContractProps {
  addressInfo: AddressInfo;
  chainId: number;
}

function getNativeCurrency(chainId?: number) {
  if (chainId === 137) return "MATIC";
  return "ETH";
}

export const BalanceCard = (props: ContractProps) => {
  const addressInfo = props.addressInfo;
  const chainId = props.chainId;
  const etherValue = formatEther(BigInt(addressInfo?.coin_balance ?? 0));
  return (
    <div className="fade-in-1s items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto font-semibold pt-2 pb-2 rounded-lg drop-shadow-md bg-gray-50 sm:p-6 mt-2 sm:mb-8">
      {addressInfo.token?.icon_url && (
        <Image
          src={addressInfo.token?.icon_url}
          height={36}
          width={36}
          alt={addressInfo.token?.name}
          className="mx-auto mb-2 rounded-sm"
        />
      )}

      <div className="break-all text-3xl sm:text-4xl font-semibold">
        {addressInfo?.implementation_name ??
          addressInfo?.name ??
          addressInfo?.ens_domain_name ??
          parseHash(addressInfo?.hash)}
      </div>

      {addressInfo?.token && (
        <div className="mt-2 text-xl sm:text-2xl font-semibold">
          {addressInfo.token?.name} ({addressInfo.token?.symbol})
        </div>
      )}
      <div className="sm:mt-2">
        Balance: $
        {Number(
          (Number(etherValue) * Number(addressInfo?.exchange_rate)).toFixed(2)
        ).toLocaleString("en-GB")}{" "}
        in {getNativeCurrency(chainId)}
      </div>
    </div>
  );
};
