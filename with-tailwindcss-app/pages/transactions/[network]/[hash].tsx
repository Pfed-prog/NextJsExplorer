import type { NextPage } from "next";
import {
  ArrowDownCircleIcon,
  ArrowUpOnSquareIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Loading } from "@/components/Loading";
import { PageSEO } from "@/components/SEO";
import { useTransactionBlockscout } from "@/hooks/blockscout";
import type {
  TokenTransfer,
  TransactionParameter,
} from "@/hooks/blockscout/queries";
import { useTransaction } from "@/hooks/viem";
import { parseHash } from "@/utils/hashes";
import { getNetworkId, getNetworkName } from "@/utils/networks";
import { parseCamelCase, parseStringToWords } from "@/utils/parseNames";
import {
  parseToken,
  parseTokenWithER,
  parseWithER,
} from "@/utils/parseNumbers";

function addressMatchesSenderOrReceiver(
  sender: string,
  receiver: string,
  address: string
) {
  if (sender === address) {
    return "text-red-700 hover:text-fuchsia-800";
  }
  if (receiver === address) {
    return "text-green-700 hover:text-fuchsia-800";
  }
  return "hover:text-fuchsia-200";
}

export const TransactionPage: NextPage = () => {
  const router = useRouter();
  const { hash, network } = router.query;

  const validatedHash = String(hash) as `0x${string}`;

  const chainId = getNetworkId(network as string);
  const networkName = getNetworkName(chainId);

  const { data: hashData, isFetched } = useTransaction(
    validatedHash,
    networkName
  );

  const { data: transactionData } = useTransactionBlockscout(
    validatedHash,
    chainId
  );

  const [isVisible, setIsVisible] = useState(false);
  const [copyStates, setCopyStates] = useState<{ [key: string]: boolean }>({});

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStates((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopyStates((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  return (
    <div>
      <PageSEO />

      {isFetched && transactionData && hashData ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-4 sm:mt-0 text-gray-900">
          <div className="text-2xl mt-2 sm:text-3xl md:text-4xl mb-2 text-blue-950 font-mono tracking-wide">
            {parseHash(hashData.hash)}{" "}
            <span className="text-lg md:text-xl font-serif tracking-tight">
              ({hashData.type})
            </span>
          </div>

          <div className="font-serif mb-6 sm:mb-10">
            <p className="mt-2">
              <Link
                href={`/blocks/${networkName}/${hashData.blockNumber}`}
                className="text-blue-900 hover:text-blue-700 font-semibold md:text-lg tracking-wide"
              >
                {Number(hashData.blockNumber).toLocaleString("en-GB")}
              </Link>
            </p>
            <p className="font-sans text-base md:text-lg text-blue-900 tracking-tighter mt-1">
              {new Date(transactionData.timestamp).toLocaleString()}
            </p>
          </div>

          <div className="px-8 font-mono">
            <div className="mt-5">
              <p className="flex items-center justify-center bg-emerald-300 pt-3 pb-3 pr-3 pl-3 rounded-lg mx-auto max-w-xs">
                From:
                <div className="ml-2 break-words">
                  <Link
                    href={`/contracts/${network}/${hashData.from ?? "0x0000000000000000000000000000000000000000"}`}
                    className="hover:text-pink-600 text-red-700 font-bold tracking-wide break-all"
                  >
                    {transactionData.from.name
                      ? parseCamelCase(transactionData.from.name) +
                          `${" " + transactionData.from.ens_domain_name}` ??
                        `${" " + transactionData.from.implementation_name}` ??
                        ""
                      : transactionData.from.ens_domain_name ??
                        parseCamelCase(
                          transactionData.from.implementation_name
                        ) ??
                        ""}

                    {!(
                      transactionData.from.name ||
                      transactionData.from.ens_domain_name ||
                      transactionData.from.implementation_name
                    ) && (
                      <span>
                        {parseHash(
                          hashData.from ??
                            "0x0000000000000000000000000000000000000000"
                        )}
                      </span>
                    )}
                  </Link>
                  <button
                    onClick={() =>
                      handleCopy(
                        hashData.from ??
                          "0x0000000000000000000000000000000000000000",
                        "from"
                      )
                    }
                    className="ml-1"
                  >
                    <DocumentDuplicateIcon className="w-4 h-4 text-gray-800 hover:text-gray-700" />
                  </button>

                  {copyStates["from"] && (
                    <span className="ml-2 text-xs font-semibold text-red-700">
                      Copied!
                    </span>
                  )}
                </div>
              </p>
            </div>

            {transactionData.decoded_input && (
              <button
                onClick={toggleVisibility}
                className="mt-6 bg-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-lg text-gray-200"
              >
                {isVisible ? (
                  <div className="flex items-center justify-center gap-3">
                    <ArrowUpOnSquareIcon className="h-6 w-4 text-gray-800" />
                    <span>Hide Method Call</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <ArrowDownCircleIcon className="h-6 w-5 text-gray-800" />
                    <span>Show Method Call</span>
                  </div>
                )}
              </button>
            )}

            {isVisible && transactionData.decoded_input && (
              <div className="mt-6 bg-gray-300 pt-3 pb-3 pr-5 pl-5 rounded-lg fade-in-1s">
                <p className="mt-1 break-words">
                  {parseStringToWords(
                    transactionData.decoded_input.method_call.replace("(", " (")
                  )}
                </p>
                {transactionData.decoded_input.parameters.map(
                  (parameter: TransactionParameter) => (
                    <div key={parameter.name} className="mt-1 break-words">
                      {parameter.name}
                      {": "}
                      {parameter.type === "address" ? (
                        <Link
                          href={`/contracts/${network}/${parameter.value}`}
                          className="hover:text-teal-400 text-sm text-teal-800"
                        >
                          {parameter.value}
                        </Link>
                      ) : (
                        <span className="text-sm sm:text-base">
                          {parameter.value}
                        </span>
                      )}{" "}
                      <span className="break-words text-xs">
                        {parseStringToWords(parameter.type)}
                      </span>
                    </div>
                  )
                )}
              </div>
            )}

            <div className="mt-6">
              <p className="flex items-center justify-center bg-[#e76e9e] pt-3 pb-3 pr-3 pl-3 rounded-lg mx-auto max-w-xs">
                To:
                <div className="ml-2 break-words">
                  <Link
                    href={`/contracts/${network}/${hashData.to ?? "0x0000000000000000000000000000000000000000"}`}
                    className="text-[#b6dc70] hover:text-[#bbee99] font-bold tracking-wide break-words"
                  >
                    {transactionData.to?.name &&
                      parseCamelCase(transactionData.to.name)}

                    {transactionData.to?.name ? (
                      <span className="ml-1">
                        {transactionData.to.ens_domain_name ??
                          transactionData.to.implementation_name ??
                          ""}
                      </span>
                    ) : (
                      transactionData.to?.ens_domain_name ??
                      transactionData.to?.implementation_name ??
                      ""
                    )}

                    {!(
                      transactionData.to?.name ||
                      transactionData.to?.ens_domain_name ||
                      transactionData.to?.implementation_name
                    ) && (
                      <span>
                        {parseHash(
                          hashData.to ??
                            "0x0000000000000000000000000000000000000000"
                        )}
                      </span>
                    )}
                  </Link>
                  <button
                    onClick={() =>
                      handleCopy(
                        hashData.to ??
                          "0x0000000000000000000000000000000000000000",
                        "to"
                      )
                    }
                    className="ml-1"
                  >
                    <DocumentDuplicateIcon className="w-4 h-4 text-gray-800 hover:text-gray-700" />
                  </button>

                  {copyStates["to"] && (
                    <span className="ml-2 text-xs font-semibold text-red-700">
                      Copied!
                    </span>
                  )}
                </div>
              </p>
            </div>

            <div className="mt-6 bg-[#6e9ee7] rounded-lg max-w-xs mx-auto">
              <p className="pt-3">
                Fee:{" "}
                <span className="text-[#c6e1f6]">
                  {parseWithER(
                    transactionData.fee?.value,
                    transactionData.exchange_rate
                  )}{" "}
                  USD
                </span>
              </p>
              <p className="mt-2 pb-2">
                Value:{" "}
                <span className="text-[#b0f2cd]">
                  {parseWithER(
                    transactionData.value,
                    transactionData.exchange_rate
                  )}{" "}
                  USD
                </span>
              </p>
            </div>

            {transactionData.token_transfers &&
              transactionData.token_transfers.length > 1 && (
                <div className="container-grid-token-transfers mx-auto">
                  {transactionData.token_transfers.map(
                    (token: TokenTransfer) => (
                      <div
                        key={token.log_index}
                        className="mt-4 sm:mt-6 bg-emerald-400 rounded-lg max-w-sm mx-auto pt-2 pb-2 pl-3 pr-3 text-white place-content-center"
                      >
                        <div>
                          From:{" "}
                          <Link
                            href={`/contracts/${network}/${token.from.hash ?? "0x0000000000000000000000000000000000000000"}`}
                            className={`${addressMatchesSenderOrReceiver(transactionData.from.hash, transactionData.to?.hash ?? "0x0000000000000000000000000000000000000000", token.from.hash)}`}
                          >
                            {parseCamelCase(token.from.implementation_name) ??
                              parseCamelCase(token.from?.name) ??
                              parseHash(token.from.hash)}
                          </Link>
                        </div>
                        <div>
                          To:{" "}
                          <Link
                            href={`/contracts/${network}/${token.to.hash ?? "0x0000000000000000000000000000000000000000"}`}
                            className={`${addressMatchesSenderOrReceiver(transactionData.from.hash, transactionData.to?.hash ?? "0x0000000000000000000000000000000000000000", token.to.hash)}`}
                          >
                            {parseCamelCase(token.to.implementation_name) ??
                              parseCamelCase(token.to?.name) ??
                              parseHash(token.to.hash)}
                          </Link>
                        </div>

                        <div className="mx-auto fade-in mt-2">
                          <div className="flex items-center justify-center">
                            {token.token.icon_url && (
                              <Image
                                src={token.token.icon_url}
                                alt={token.token.symbol}
                                width={20}
                                height={20}
                                className="mr-2 bg-white rounded-lg"
                              />
                            )}

                            <Link
                              href={`/contracts/${network}/${token.token.address ?? "0x0000000000000000000000000000000000000000"}`}
                              className="hover:text-fuchsia-300 text-base font-semibold"
                            >
                              {token.token.name}{" "}
                              {token.token.symbol && (
                                <span>{"(" + token.token.symbol + ")"}</span>
                              )}
                              {!token.token.name && !token.token.symbol && (
                                <span>{parseHash(token.token.address)}</span>
                              )}
                            </Link>
                          </div>
                          <div className="text-xs mt-1">{token.token.type}</div>
                        </div>

                        {token.total.value && token.total.decimals && (
                          <div className="mt-1 break-words">
                            {parseToken(
                              token.total.value,
                              token.total.decimals
                            )}{" "}
                            {token.token.symbol}{" "}
                            {token.token.exchange_rate && (
                              <span>
                                {" = "}
                                {parseTokenWithER(
                                  token.total.value,
                                  token.total.decimals,
                                  token.token.exchange_rate
                                )}{" "}
                                USD
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TransactionPage;
