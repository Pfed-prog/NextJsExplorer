import Image from "next/image";

import { type AddressInfo } from "@/hooks/blockscout/queries";
import { parseHash } from "@/utils/hashes";
import { parseNumber, parseWithER } from "@/utils/parseNumbers";
import { camelToFlat } from "@/utils/parseNames";

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
    <div className="fade-in outline outline-offset-1 outline-4 hover:outline-2 outline-emerald-900 hover:outline-sky-400 fade-in-1s mt-2 items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto font-semibold pb-2 rounded-lg bg-gray-50 pt-2 pl-2 pr-2">
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
        <div className="text-3xl sm:text-4xl font-semibold pr-5 pl-5 mt-2 text-blue-950">
          {camelToFlat(addressInfo?.name)}
        </div>
      )}

      {addressInfo?.implementation_name && (
        <div className="text-2xl sm:text-3xl font-semibold pr-5 pl-5 mt-3 text-emerald-900">
          {camelToFlat(addressInfo?.implementation_name)}
        </div>
      )}

      {addressInfo?.token && (
        <div className="mt-2 text-xl sm:text-2xl font-semibold text-cyan-950 break-words">
          {addressInfo.token?.name}{" "}
          {addressInfo.token?.symbol && (
            <span>{"(" + String(addressInfo.token?.symbol) + ")"}</span>
          )}
          <span className="text-xs"> {addressInfo.token?.type}</span>
        </div>
      )}

      {addressInfo.token?.holders && (
        <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-2 text-cyan-900">
          {parseNumber(addressInfo.token?.holders)} holders
        </div>
      )}

      {addressInfo.token?.symbol && addressInfo.token?.exchange_rate && (
        <div className="underline underline-offset-2	decoration-indigo-500 hover:decoration-pink-400 decoration-2 hover:decoration-1 text-xs sm:text-lg font-semibold pr-5 pl-5 mt-2 text-cyan-900 tracking-wide">
          1 {addressInfo.token.symbol} = ${addressInfo.token.exchange_rate}
        </div>
      )}

      {addressInfo.token?.volume_24h && (
        <div className="text-xs sm:text-lg pr-5 pl-5 mt-2 font-bold tracking-wide text-cyan-800">
          ${parseNumber(addressInfo.token?.volume_24h)}{" "}
          <span className="text-cyan-950 font-medium tracking-tighter">
            24h volume
          </span>
        </div>
      )}

      {addressInfo.token?.volume_24h &&
        addressInfo.token?.circulating_market_cap !== "0.0" &&
        addressInfo.token?.circulating_market_cap && (
          <div className="text-xs sm:text-lg pr-5 pl-5 mt-1 text-cyan-950">
            <span className="text-cyan-800 font-semibold tracking-wide">
              {(
                (Number(addressInfo.token?.volume_24h) /
                  Number(addressInfo.token?.circulating_market_cap)) *
                100
              ).toLocaleString("en-US")}
              %
            </span>{" "}
            of
          </div>
        )}

      {addressInfo.token?.circulating_market_cap &&
        addressInfo.token?.circulating_market_cap !== "0.0" && (
          <div className="text-xs sm:text-lg font-bold tracking-wide pr-5 pl-5 mt-1 text-cyan-800">
            ${parseNumber(addressInfo.token?.circulating_market_cap)}
            <span className="text-cyan-950 font-medium tracking-tight">
              {" "}
              circ market cap
            </span>
          </div>
        )}

      {!addressInfo.is_contract && (
        <div className="text-base sm:text-xl font-semibold pr-5 pl-5 mt-2 text-cyan-800">
          {addressInfo?.ens_domain_name ?? parseHash(addressInfo?.hash)}
        </div>
      )}

      {(Number(addressInfo?.coin_balance) > 1 ||
        addressInfo?.is_contract === false) && (
        <div className="mt-1 text-cyan-950">
          ${parseWithER(addressInfo?.coin_balance, addressInfo?.exchange_rate)}{" "}
          in {getNativeCurrency(chainId)}
        </div>
      )}

      {addressInfo.is_contract && (
        <div className="text-xs sm:text-base font-semibold pr-5 pl-5 mt-1 text-cyan-800 tracking-wide">
          {addressInfo?.ens_domain_name ?? parseHash(addressInfo?.hash)}
        </div>
      )}
    </div>
  );
};
