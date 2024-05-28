import { type AddressInfo } from "@/hooks/blockscout/queries";
import { parseHash } from "@/utils/hashes";
import Image from "next/image";
import { parseWithER } from "@/utils/parseNumbers";
import { camelToFlat } from "@/utils/parseNames";
import { getNetworkNameTitle } from "@/utils/networks";

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
  return (
    <div className="fade-in-1s mt-2 items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto font-semibold pb-2 rounded-lg drop-shadow-md bg-gray-50 pt-2 pl-2 pr-2">
      {addressInfo.token?.icon_url && (
        <Image
          src={addressInfo.token?.icon_url}
          height={36}
          width={36}
          alt={addressInfo.token?.name}
          className="mx-auto mb-2 rounded-sm mt-2"
        />
      )}

      {addressInfo?.name && (
        <div className="text-3xl sm:text-4xl font-semibold pr-5 pl-5 mt-2 text-blue-800">
          {camelToFlat(addressInfo?.name)}
        </div>
      )}

      {addressInfo?.implementation_name && (
        <div className="text-2xl sm:text-3xl font-semibold pr-5 pl-5 mt-3 text-cyan-900">
          {camelToFlat(addressInfo?.implementation_name)}
        </div>
      )}

      {addressInfo?.token && (
        <div className="mt-2 text-xl sm:text-2xl font-semibold">
          {addressInfo.token?.name} ({addressInfo.token?.symbol})
        </div>
      )}

      <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-1 text-cyan-800 hover:text-cyan-500">
        {addressInfo?.ens_domain_name ?? parseHash(addressInfo?.hash)}
      </div>

      <div className="mt-1">
        {getNetworkNameTitle(chainId)} Balance:{" "}
        {parseWithER(
          addressInfo?.coin_balance ?? 0,
          addressInfo?.exchange_rate
        )}{" "}
        USD in {getNativeCurrency(chainId)}
      </div>
    </div>
  );
};
