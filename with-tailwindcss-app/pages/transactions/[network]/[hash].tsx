import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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

function addressMatchesSenderOrReciever(
  sender: string,
  reciever: string,
  address: string
) {
  if (sender === address) {
    return "text-red-700 hover:text-fuchsia-800";
  }
  if (reciever === address) {
    return "text-green-800 hover:text-fuchsia-800";
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

  return (
    <div>
      <PageSEO />
      {isFetched && transactionData && hashData ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 sm:pb-0 text-gray-900">
          <div className="text-2xl mt-2 sm:text-3xl mb-2 text-blue-950 font-mono">
            {parseHash(hashData.hash)}{" "}
            <span className="text-lg font-serif ">({hashData.type})</span>
          </div>

          <div className="font-serif mb-6 sm:mb-10">
            <p className="mt-1">
              <Link
                href={`/blocks/${networkName}/${hashData?.blockNumber}`}
                className="text-blue-900 hover:text-blue-700 font-semibold"
              >
                {Number(hashData.blockNumber).toLocaleString("en-GB")}
              </Link>
            </p>
            <p className="font-sans text-sm text-blue-900">
              {new Date(transactionData.timestamp).toLocaleString()}
            </p>
          </div>

          <div className="px-8 font-mono">
            <div className="mt-5">
              <p className="bg-emerald-200 pt-3 pb-3 pr-3 pl-3 rounded-lg mx-auto max-w-xs">
                From:{" "}
                <Link
                  href={`/contracts/${network}/${hashData.from ?? "0x0000000000000000000000000000000000000000"}`}
                  className="hover:text-pink-600 text-red-800"
                >
                  {transactionData.from.name && transactionData.from.name + " "}
                  {transactionData.from.ens_domain_name ??
                    transactionData.from.implementation_name}
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
              </p>
            </div>

            {transactionData.decoded_input && (
              <div className="mt-6 bg-green-200 pt-3 pb-3 pr-5 pl-5 rounded-lg">
                Method Call:
                <p className="mt-1 break-words">
                  {transactionData.decoded_input.method_call}
                </p>
                {transactionData.decoded_input.parameters.map(
                  (parameter: TransactionParameter) => (
                    <div key={parameter.name} className="mt-1 break-words">
                      {parameter.name}
                      {": "}
                      {parameter.type === "address" ? (
                        <Link
                          href={`/contracts/${network}/${parameter.value}`}
                          className="hover:text-teal-400 text-sm"
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
              <p className="bg-red-200 pt-3 pb-3 pr-3 pl-3 rounded-lg mx-auto max-w-xs">
                To:{" "}
                <Link
                  href={`/contracts/${network}/${hashData.to ?? "0x0000000000000000000000000000000000000000"}`}
                  className="text-green-800 hover:text-teal-400"
                >
                  {transactionData.to?.name &&
                    parseCamelCase(transactionData.to.name) + " "}

                  {transactionData.to?.ens_domain_name ??
                    parseCamelCase(transactionData.to?.implementation_name)}

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
              </p>
            </div>

            <div className="mt-6 bg-slate-300 rounded-lg max-w-xs mx-auto">
              <p className="pt-2">
                Fee:{" "}
                {parseWithER(
                  transactionData.fee?.value,
                  transactionData.exchange_rate
                )}{" "}
                USD
              </p>
              <p className="mt-2 pb-2">
                Value:{" "}
                {parseWithER(
                  transactionData.value,
                  transactionData.exchange_rate
                )}{" "}
                USD
              </p>
            </div>

            {transactionData.token_transfers && (
              <div className="container-grid-token-transfers mx-auto">
                {transactionData.token_transfers.map((token: TokenTransfer) => (
                  <div
                    key={token.log_index}
                    className="mt-4 sm:mt-6 bg-emerald-400 rounded-lg max-w-sm mx-auto pt-2 pb-2 pl-3 pr-3 text-white place-content-center"
                  >
                    <div>
                      From:{" "}
                      <Link
                        href={`/contracts/${network}/${token.from.hash ?? "0x0000000000000000000000000000000000000000"}`}
                        className={`${addressMatchesSenderOrReciever(transactionData.from.hash, transactionData.to?.hash ?? "0x0000000000000000000000000000000000000000", token.from.hash)}`}
                      >
                        {parseHash(token.from.hash)}
                      </Link>
                    </div>
                    <div>
                      To:{" "}
                      <Link
                        href={`/contracts/${network}/${token.to.hash ?? "0x0000000000000000000000000000000000000000"}`}
                        className={`${addressMatchesSenderOrReciever(transactionData.from.hash, transactionData.to?.hash ?? "0x0000000000000000000000000000000000000000", token.to.hash)}`}
                      >
                        {parseHash(token.to.hash)}
                      </Link>
                    </div>

                    <div className="mx-auto flex items-center justify-center fade-in mt-2">
                      {token.token.icon_url && (
                        <Image
                          src={token.token.icon_url}
                          alt={token.token.symbol}
                          width={20}
                          height={20}
                          className="mr-2 bg-white rounded-xl"
                        />
                      )}
                      <span>
                        <Link
                          href={`/contracts/${network}/${token.token.address ?? "0x0000000000000000000000000000000000000000"}`}
                          className="hover:text-fuchsia-300 font-semibold"
                        >
                          {token.token.name}{" "}
                          {token.token.symbol && (
                            <span>{"(" + token.token.symbol + ")"}</span>
                          )}
                          {!token.token.name && !token.token.symbol && (
                            <span>{parseHash(token.token.address)}</span>
                          )}
                        </Link>
                      </span>
                    </div>

                    {token.total.value && token.total.decimals && (
                      <div className="break-words">
                        {parseToken(token.total.value, token.total.decimals)}{" "}
                        {token.token.symbol}{" "}
                        {parseTokenWithER(
                          token.total.value,
                          token.total.decimals,
                          token.token.exchange_rate
                        )}{" "}
                        USD
                      </div>
                    )}
                  </div>
                ))}
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
