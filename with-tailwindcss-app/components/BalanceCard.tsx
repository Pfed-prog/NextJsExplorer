import { type AddressInfo } from "@/hooks/blockscout/queries";
import { parseHash } from "@/utils/hashes";
import Image from "next/image";
import { parseWithER } from "@/utils/parseNumbers";
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
        <div className="mt-2 text-xl sm:text-2xl font-semibold text-cyan-950">
          {addressInfo.token?.name}{" "}
          {addressInfo.token?.symbol && (
            <span>{"(" + String(addressInfo.token?.symbol) + ")"}</span>
          )}
        </div>
      )}

      {addressInfo.is_contract ? (
        <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-1 text-cyan-800 hover:text-cyan-500">
          {addressInfo?.ens_domain_name ?? parseHash(addressInfo?.hash)}
        </div>
      ) : (
        <div className="text-base sm:text-xl font-semibold pr-5 pl-5 mt-1 text-cyan-800 hover:text-cyan-500">
          {addressInfo?.ens_domain_name ?? parseHash(addressInfo?.hash)}
        </div>
      )}

      {addressInfo.token?.symbol && addressInfo.token?.exchange_rate && (
        <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-2 text-cyan-900 hover:text-blue-800">
          1 {addressInfo.token.symbol} = ${addressInfo.token.exchange_rate}
        </div>
      )}

      {addressInfo.token?.holders && (
        <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-2 text-cyan-900 hover:text-blue-800">
          {Number(addressInfo.token?.holders).toLocaleString("en-US")} holders
        </div>
      )}

      {addressInfo.token?.volume_24h && (
        <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-1 text-cyan-900 hover:text-blue-900">
          ${Number(addressInfo.token?.volume_24h).toLocaleString("en-US")} 24h
          volume
        </div>
      )}

      {addressInfo.token?.volume_24h &&
        addressInfo.token?.circulating_market_cap !== "0.0" &&
        addressInfo.token?.circulating_market_cap && (
          <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-1 text-cyan-900 hover:text-blue-900">
            {(
              (Number(addressInfo.token?.volume_24h) /
                Number(addressInfo.token?.circulating_market_cap)) *
              100
            ).toLocaleString("en-US")}
            % of
          </div>
        )}

      {addressInfo.token?.circulating_market_cap &&
        addressInfo.token?.circulating_market_cap !== "0.0" && (
          <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-1 text-cyan-900 hover:text-blue-900">
            $
            {Number(addressInfo.token?.circulating_market_cap).toLocaleString(
              "en-US"
            )}{" "}
            circ market cap
          </div>
        )}

      <div className="mt-1 text-cyan-950">
        $
        {parseWithER(
          addressInfo?.coin_balance ?? 0,
          addressInfo?.exchange_rate
        )}{" "}
        in {getNativeCurrency(chainId)}
      </div>
    </div>
  );
};
