import type { AddressInfo } from "@evmexplorer/blockscout";
import type { Contract } from "ethers";
import { getQuoteUniswap } from "@evmexplorer/uniswap";
import {
  parseHash,
  deserializeWeiToEther,
  parseNumber,
  parseWithER,
  parseNumberFixed,
  parseTokenPrice,
  camelToFlat,
  getNetworkName,
  getNetworkNameUniswap,
} from "@evmexplorer/utility";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useToPng } from "@hugocxl/react-to-image";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { UniswapQuote } from "./UniswapQuote";
import { clientToProvider } from "@/services/ethers";
import { getPublicClient } from "@/services/client";

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

  const imageSrc = addressInfo.token?.icon_url ?? null;

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
    cacheBust: false,
    includeQueryParams: true,
    onSuccess: async (data) => {
      try {
        const response = await fetch(data);

        const blob = await response.blob();

        await window.navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
      } catch (e) {
        console.log(e);
      }

      setCopyPng(false);
    },
  });

  useEffect(() => {
    {
      if (addressInfo.token && addressInfo.token.name) {
        setReportCard(`${addressInfo.token.name} ${addressInfo.token.symbol ? `$${addressInfo.token.symbol}` : ""}
${addressInfo.token.holders && addressInfo.token.holders !== "0" ? `\nToken Holders ${parseNumber(addressInfo.token.holders)}` : ""}${addressInfo.token.exchange_rate && addressInfo.token.symbol ? "\n" : ""}${addressInfo.token.exchange_rate && addressInfo.token.symbol ? `1 $${addressInfo.token.symbol} = ${parseTokenPrice(addressInfo.token.exchange_rate)} USD` : ""}
${addressInfo.token.volume_24h ? `\n$${parseNumberFixed(addressInfo.token?.volume_24h)} 24h volume` : ""}${
          addressInfo.token.volume_24h &&
          addressInfo.token?.circulating_market_cap !== "0.0" &&
          addressInfo.token?.circulating_market_cap
            ? "\n"
            : ""
        }${
          addressInfo.token?.circulating_market_cap !== "0.0" &&
          addressInfo.token?.circulating_market_cap
            ? `which is ${parseNumberFixed(
                (Number(addressInfo.token?.volume_24h) /
                  Number(addressInfo.token?.circulating_market_cap)) *
                  100
              )}% of $${parseNumberFixed(addressInfo.token?.circulating_market_cap)} circulating market cap`
            : ""
        }${
          addressInfo.token.holders &&
          addressInfo.token.holders &&
          !addressInfo.token.volume_24h &&
          !(
            addressInfo.token?.circulating_market_cap !== "0.0" &&
            addressInfo.token?.circulating_market_cap
          )
            ? "\n"
            : ""
        }${
          addressInfo.token.volume_24h ||
          (addressInfo.token?.circulating_market_cap !== "0.0" &&
            addressInfo.token?.circulating_market_cap)
            ? "\n\n"
            : ""
        }https://evmexplorer.com${router.asPath}`);
      }
    }
  }, [addressInfo.token, router]);

  const [address, setAddress] = useState<string>();
  const [fee, setFee] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [poolContract, setPoolContract] = useState<Contract>();

  const networkNameUniswap = getNetworkNameUniswap(chainId);

  useEffect(() => {
    async function fetchData() {
      const networkName = getNetworkName(chainId);
      const client = getPublicClient(networkName);
      const provider = clientToProvider(client);
      const data = await getQuoteUniswap(addressInfo, chainId, provider);
      setAddress(data.address);
      setFee(data.fee);
      setPrice(data.price);
      setPoolContract(data.poolContract);
    }
    if (getNetworkNameUniswap(chainId) && addressInfo.token) {
      fetchData();
      const intervalId = setInterval(fetchData, 60000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [addressInfo, chainId, poolContract]);

  return (
    <div className="flex items-center justify-center">
      {copyPng ? (
        <div ref={ref}>
          <div className="transition-all items-center justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto font-semibold rounded-lg bg-gray-50 pl-4 pr-4 pb-2 pt-2">
            {addressInfo.token && imageSrc && (
              <Image
                src={imageSrc}
                height={36}
                width={36}
                alt={addressInfo.token.name}
                className="mx-auto rounded-sm mt-1 mb-1"
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
                <span className="text-xs ml-1 sm:inline-block">
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
                {parseTokenPrice(addressInfo.token.exchange_rate)}
              </div>
            )}

            {price && fee && address && networkNameUniswap && (
              <UniswapQuote
                symbol={addressInfo.token?.symbol ?? ""}
                price={price}
                fee={fee}
                networkNameUniswap={networkNameUniswap}
                address={address}
              />
            )}

            {addressInfo.token?.volume_24h && (
              <div className="text-xs sm:text-lg pr-5 pl-5 mt-2 font-bold tracking-wide text-cyan-800">
                ${parseNumberFixed(addressInfo.token?.volume_24h)}
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
                    {parseNumberFixed(
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
                  ${parseNumberFixed(addressInfo.token?.circulating_market_cap)}
                  <span className="ml-1 text-cyan-950 font-medium tracking-tight">
                    circ market cap
                  </span>
                </div>
              )}

            {parseWithER(
              addressInfo?.coin_balance,
              addressInfo?.exchange_rate
            ) !== "0" && (
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
              <div className="mt-1">
                <div className="text-xs tracking-tighter font-semibold text-cyan-800">
                  {addressInfo.hash}
                </div>
                <div className="text-xs tracking-tighter font-semibold text-cyan-800">
                  {addressInfo.block_number_balance_updated_at} block updated
                  chainId {chainId}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="pl-4 pr-4 fade-in-1s transition-all outline outline-offset-1 outline-4 hover:outline-2 outline-[#14892e] hover:outline-[#95ed81] mt-2 items-center justify-center min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[650px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto font-semibold rounded-lg bg-gray-50 pb-2 pt-2">
          {addressInfo.token && imageSrc && (
            <Image
              src={imageSrc}
              height={36}
              width={36}
              alt={addressInfo.token.name}
              className="mx-auto mb-2 rounded-sm mt-2 pl"
            />
          )}

          {addressInfo?.name && (
            <h1 className="text-3xl sm:text-4xl font-semibold pr-5 pl-5 mt-2 text-blue-950 break-all">
              {addressInfo.name}
            </h1>
          )}

          {addressInfo?.implementation_name && (
            <div>
              {!addressInfo?.name ? (
                <h1 className="text-2xl sm:text-3xl font-semibold pr-5 pl-5 mt-3 text-emerald-900">
                  {camelToFlat(addressInfo.implementation_name)}
                </h1>
              ) : (
                <div className="text-2xl sm:text-3xl font-semibold pr-5 pl-5 mt-3 text-emerald-900">
                  {camelToFlat(addressInfo.implementation_name)}
                </div>
              )}
            </div>
          )}

          {addressInfo?.token && (
            <div className="mt-2 text-xl sm:text-2xl font-semibold text-cyan-950 break-words">
              {addressInfo.token?.name}{" "}
              {addressInfo.token?.symbol && (
                <span>{"(" + String(addressInfo.token?.symbol) + ")"}</span>
              )}
              <span className="text-xs ml-1 inline-block">
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
              1 {addressInfo.token.symbol} = $
              {parseTokenPrice(addressInfo.token.exchange_rate)}
            </div>
          )}

          {price && fee && address && networkNameUniswap && (
            <UniswapQuote
              symbol={addressInfo.token?.symbol ?? ""}
              price={price}
              fee={fee}
              networkNameUniswap={networkNameUniswap}
              address={address}
            />
          )}

          {addressInfo.token?.volume_24h && (
            <div className="text-xs sm:text-lg pr-5 pl-5 mt-2 font-bold tracking-wide text-cyan-800">
              ${parseNumberFixed(addressInfo.token?.volume_24h)}
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
                  {parseNumberFixed(
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
                ${parseNumberFixed(addressInfo.token?.circulating_market_cap)}
                <span className="ml-1 text-cyan-950 font-medium tracking-tight">
                  circ market cap
                </span>
              </div>
            )}

          {!addressInfo.is_contract && (
            <div className="flex justify-center items-center pr-5 pl-5 mt-2">
              <h1 className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-cyan-800">
                {addressInfo?.ens_domain_name ?? addressInfo.hash}
              </h1>
              <button
                onClick={() => handleCopy(addressInfo.hash, "address")}
                className="ml-1"
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

          {Number(addressInfo?.coin_balance) > 1 && (
            <div className="has-tooltip mt-1 text-cyan-950">
              <span className="tooltip text-xs">
                {deserializeWeiToEther(addressInfo?.coin_balance)} ETH
              </span>
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
                      }, 500);
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
