import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useToPng } from "@hugocxl/react-to-image";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
  const router = useRouter();
  const addressInfo = props.addressInfo;
  const chainId = props.chainId;

  const [reportCard, setReportCard] = useState<string | null>();

  const [copyPng, setCopyPng] = useState<boolean>(false);

  const [copyStates, setCopyStates] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStates((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopyStates((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  const [_, convert, ref] = useToPng<HTMLDivElement>({
    quality: 1,
    backgroundColor: undefined,
    onSuccess: async (data) => {
      const response = await fetch(data);
      const blob = await response.blob();

      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      setCopyPng(false);
    },
  });

  useEffect(() => {
    {
      if (
        addressInfo.token &&
        addressInfo.token.name &&
        addressInfo.token.symbol
      ) {
        setReportCard(`${addressInfo.token.name} $${addressInfo.token.symbol}\n
${addressInfo.token.holders ? `Token Holders ${parseNumber(addressInfo.token.holders)}` : ""}
${addressInfo.token.exchange_rate ? `1 $${addressInfo.token.symbol} = ${addressInfo.token.exchange_rate} USD` : ""}
\n${addressInfo.token.volume_24h ? `$${parseNumber(addressInfo.token?.volume_24h)} 24h volume` : ""} ${
          addressInfo.token?.volume_24h &&
          addressInfo.token?.circulating_market_cap !== "0.0" &&
          addressInfo.token?.circulating_market_cap
            ? `which is ${parseNumber(
                (Number(addressInfo.token?.volume_24h) /
                  Number(addressInfo.token?.circulating_market_cap)) *
                  100
              )} % of $${parseNumber(addressInfo.token?.circulating_market_cap)} circulating market cap`
            : ""
        }
\nhttps://evmexplorer.com${router.asPath}`);
      }
    }
  }, [addressInfo.token]);

  return (
    <div className="flex items-center justify-center">
      {copyPng ? (
        <div ref={ref}>
          <div className="pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28 fade-in-1s transition-all outline outline-offset-1 outline-4 outline-emerald-900 hover:outline-2 hover:outline-sky-400 fade-in-1s mt-2 items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto font-semibold pb-2 rounded-lg bg-gray-50 pt-2">
            {addressInfo.token?.icon_url && (
              <Image
                src={addressInfo.token?.icon_url}
                height={36}
                width={36}
                alt={addressInfo.token?.name}
                className="mx-auto mb-2 rounded-sm mt-2 pl"
              />
            )}

            {addressInfo?.name && (
              <div className="text-3xl sm:text-4xl font-semibold pr-5 pl-5 mt-2 text-blue-950">
                {camelToFlat(addressInfo.name)}
              </div>
            )}

            {addressInfo?.implementation_name && (
              <div className="text-2xl sm:text-3xl font-semibold pr-5 pl-5 mt-3 text-emerald-900">
                {camelToFlat(addressInfo.implementation_name)}
              </div>
            )}

            {addressInfo?.token && (
              <div className="mt-2 text-xl sm:text-2xl font-semibold text-cyan-950 break-words">
                {addressInfo.token?.name}{" "}
                {addressInfo.token?.symbol && (
                  <span>{"(" + String(addressInfo.token?.symbol) + ")"}</span>
                )}
                <span className="text-xs ml-1 break-keep">
                  {addressInfo.token?.type}
                </span>
              </div>
            )}

            {addressInfo.token?.holders &&
              addressInfo.token?.holders !== "0" && (
                <div className="text-xs sm:text-lg font-semibold pr-5 pl-5 mt-2 text-cyan-900">
                  {parseNumber(addressInfo.token?.holders)} holders
                </div>
              )}

            {addressInfo.token?.symbol && addressInfo.token?.exchange_rate && (
              <div className="underline underline-offset-2	decoration-indigo-500 hover:decoration-pink-400 decoration-2 hover:decoration-1 text-xs sm:text-lg font-semibold pr-5 pl-5 mt-2 text-cyan-900 tracking-wide">
                1 {addressInfo.token.symbol} = $
                {addressInfo.token.exchange_rate}
              </div>
            )}

            {addressInfo.token?.volume_24h && (
              <div className="text-xs sm:text-lg pr-5 pl-5 mt-2 font-bold tracking-wide text-cyan-800">
                ${parseNumber(addressInfo.token?.volume_24h)}
                <span className="ml-1 text-cyan-950 font-medium tracking-tighter">
                  24h volume
                </span>
              </div>
            )}

            {addressInfo.token?.volume_24h &&
              addressInfo.token?.circulating_market_cap !== "0.0" &&
              addressInfo.token?.circulating_market_cap && (
                <div className="text-xs sm:text-lg pr-5 pl-5 mt-1 text-cyan-950">
                  <span className="mr-1 text-cyan-800 font-semibold tracking-wide">
                    {parseNumber(
                      (Number(addressInfo.token?.volume_24h) /
                        Number(addressInfo.token?.circulating_market_cap)) *
                        100
                    )}
                    %
                  </span>
                  of
                </div>
              )}

            {addressInfo.token?.circulating_market_cap &&
              addressInfo.token?.circulating_market_cap !== "0.0" && (
                <div className="text-xs sm:text-lg font-bold tracking-wide pr-5 pl-5 mt-1 text-cyan-800">
                  ${parseNumber(addressInfo.token?.circulating_market_cap)}
                  <span className="ml-1 text-cyan-950 font-medium tracking-tight">
                    circ market cap
                  </span>
                </div>
              )}

            {!addressInfo.is_contract && (
              <div className="flex justify-center items-center pr-5 pl-5 mt-2">
                <p className="text-base sm:text-xl font-semibold text-cyan-800 sm:ml-3 md:ml-6">
                  {addressInfo?.ens_domain_name ?? parseHash(addressInfo.hash)}
                </p>
                <button
                  onClick={() => handleCopy(addressInfo.hash, "address")}
                  className="ml-1 sm:ml-2"
                >
                  <DocumentDuplicateIcon className="w-4 h-4 text-gray-600 hover:text-gray-400" />
                </button>
                {copyStates["address"] && (
                  <span className="ml-2 text-xs font-semibold text-red-500">
                    Copied!
                  </span>
                )}
              </div>
            )}

            {(Number(addressInfo?.coin_balance) > 1 ||
              addressInfo?.is_contract === false) && (
              <div className="mt-1 text-cyan-950">
                $
                {parseWithER(
                  addressInfo?.coin_balance,
                  addressInfo?.exchange_rate
                )}{" "}
                in {getNativeCurrency(chainId)}
              </div>
            )}

            {addressInfo.is_contract && (
              <div>
                <div className="flex items-center justify-center pr-5 pl-5 mt-1">
                  <div className="has-tooltip text-xs sm:text-base font-semibold sm:ml-3 md:ml-5 text-cyan-800 tracking-wide">
                    <div className="tooltip -ml-10">{addressInfo.hash}</div>
                    {addressInfo?.ens_domain_name ??
                      parseHash(addressInfo.hash)}
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(addressInfo.hash, "contractAddress")
                    }
                    className="ml-1 sm:ml-2"
                  >
                    <DocumentDuplicateIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-gray-400" />
                  </button>

                  {copyStates["contractAddress"] && (
                    <span className="ml-2 text-xs font-semibold text-red-500">
                      Copied!
                    </span>
                  )}
                </div>
                {reportCard && !copyPng && (
                  <button
                    className="hover:text-red-500 mt-1 mb-1 text-sm"
                    onClick={() => {
                      setTimeout(function () {
                        convert();
                      }, 1000);
                    }}
                  >
                    copy card
                    {copyStates["balanceCard"] && (
                      <span className="ml-2 text-xs font-semibold text-red-500">
                        Copied!
                      </span>
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28 fade-in-1s transition-all outline outline-offset-1 outline-4 hover:outline-2 outline-emerald-900 hover:outline-sky-400 fade-in-1s mt-2 items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto font-semibold pb-2 rounded-lg bg-gray-50 pt-2">
          {addressInfo.token?.icon_url && (
            <Image
              src={addressInfo.token?.icon_url}
              height={36}
              width={36}
              alt={addressInfo.token?.name}
              className="mx-auto mb-2 rounded-sm mt-2 pl"
            />
          )}

          {addressInfo?.name && (
            <div className="text-3xl sm:text-4xl font-semibold pr-5 pl-5 mt-2 text-blue-950">
              {camelToFlat(addressInfo.name)}
            </div>
          )}

          {addressInfo?.implementation_name && (
            <div className="text-2xl sm:text-3xl font-semibold pr-5 pl-5 mt-3 text-emerald-900">
              {camelToFlat(addressInfo.implementation_name)}
            </div>
          )}

          {addressInfo?.token && (
            <div className="mt-2 text-xl sm:text-2xl font-semibold text-cyan-950 break-words">
              {addressInfo.token?.name}{" "}
              {addressInfo.token?.symbol && (
                <span>{"(" + String(addressInfo.token?.symbol) + ")"}</span>
              )}
              <span className="text-xs ml-1 break-keep">
                {addressInfo.token?.type}
              </span>
            </div>
          )}

          {addressInfo.token?.holders && addressInfo.token?.holders !== "0" && (
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
              ${parseNumber(addressInfo.token?.volume_24h)}
              <span className="ml-1 text-cyan-950 font-medium tracking-tighter">
                24h volume
              </span>
            </div>
          )}

          {addressInfo.token?.volume_24h &&
            addressInfo.token?.circulating_market_cap !== "0.0" &&
            addressInfo.token?.circulating_market_cap && (
              <div className="text-xs sm:text-lg pr-5 pl-5 mt-1 text-cyan-950">
                <span className="mr-1 text-cyan-800 font-semibold tracking-wide">
                  {parseNumber(
                    (Number(addressInfo.token?.volume_24h) /
                      Number(addressInfo.token?.circulating_market_cap)) *
                      100
                  )}
                  %
                </span>
                of
              </div>
            )}

          {addressInfo.token?.circulating_market_cap &&
            addressInfo.token?.circulating_market_cap !== "0.0" && (
              <div className="text-xs sm:text-lg font-bold tracking-wide pr-5 pl-5 mt-1 text-cyan-800">
                ${parseNumber(addressInfo.token?.circulating_market_cap)}
                <span className="ml-1 text-cyan-950 font-medium tracking-tight">
                  circ market cap
                </span>
              </div>
            )}

          {!addressInfo.is_contract && (
            <div className="flex justify-center items-center pr-5 pl-5 mt-2">
              <p className="text-base sm:text-xl font-semibold text-cyan-800 sm:ml-3 md:ml-6">
                {addressInfo?.ens_domain_name ?? parseHash(addressInfo.hash)}
              </p>
              <button
                onClick={() => handleCopy(addressInfo.hash, "address")}
                className="ml-1 sm:ml-2"
              >
                <DocumentDuplicateIcon className="w-4 h-4 text-gray-600 hover:text-gray-400" />
              </button>
              {copyStates["address"] && (
                <span className="ml-2 text-xs font-semibold text-red-500">
                  Copied!
                </span>
              )}
            </div>
          )}

          {(Number(addressInfo?.coin_balance) > 1 ||
            addressInfo?.is_contract === false) && (
            <div className="mt-1 text-cyan-950">
              $
              {parseWithER(
                addressInfo?.coin_balance,
                addressInfo?.exchange_rate
              )}{" "}
              in {getNativeCurrency(chainId)}
            </div>
          )}

          {addressInfo.is_contract && (
            <div>
              <div className="flex items-center justify-center pr-5 pl-5 mt-1">
                <div className="has-tooltip text-xs sm:text-base font-semibold sm:ml-3 md:ml-5 text-cyan-800 tracking-wide">
                  <div className="tooltip -ml-10">{addressInfo.hash}</div>
                  {addressInfo?.ens_domain_name ?? parseHash(addressInfo.hash)}
                </div>

                <button
                  onClick={() =>
                    handleCopy(addressInfo.hash, "contractAddress")
                  }
                  className="ml-1 sm:ml-2"
                >
                  <DocumentDuplicateIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-gray-400" />
                </button>

                {copyStates["contractAddress"] && (
                  <span className="ml-2 text-xs font-semibold text-red-500">
                    Copied!
                  </span>
                )}
              </div>

              {reportCard && (
                <div>
                  <button
                    className="hover:text-red-500 mt-1 mb-1 text-xs"
                    onClick={() => handleCopy(`${reportCard}`, "balanceCard")}
                  >
                    copy data
                  </button>{" "}
                  <button
                    className="hover:text-red-500 mt-1 mb-1 text-xs"
                    onClick={() => {
                      setCopyPng(true);
                      setTimeout(function () {
                        convert();
                      }, 1000);
                    }}
                  >
                    copy Png
                  </button>
                  {copyStates["balanceCard"] && (
                    <span className="ml-2 text-xs font-semibold text-red-500">
                      Copied!
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
