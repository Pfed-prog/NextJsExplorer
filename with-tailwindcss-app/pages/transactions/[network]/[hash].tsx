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
import {
  parseToken,
  parseTokenWithER,
  parseWithER,
} from "@/utils/parseNumbers";

export const ContractPage: NextPage = () => {
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

  console.log(transactionData);

  return (
    <div>
      <PageSEO />
      {isFetched && transactionData && hashData ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 sm:pb-0">
          <div className="font-serif text-2xl mt-2 sm:text-3xl mb-2">
            {parseHash(hashData.hash)}{" "}
            <span className="text-lg">({hashData.type})</span>
          </div>

          <div className="font-serif mb-6 sm:mb-10">
            <p>{new Date(transactionData.timestamp).toLocaleString()}</p>
            <p>
              Block:{" "}
              <Link
                href={`/blocks/${networkName}/${hashData?.blockNumber}`}
                className="hover:text-teal-400"
              >
                {Number(hashData.blockNumber).toLocaleString("en-GB")}
              </Link>
            </p>

            <p className="mt-5">
              From:{" "}
              <Link
                href={`/contracts/${network}/${hashData.from ?? "0x0000000000000000000000000000000000000000"}`}
                className="hover:text-teal-400"
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

            {transactionData.decoded_input && (
              <div className="mt-2">
                Method Call:
                <p className="mt-1">
                  {transactionData.decoded_input.method_call}
                </p>
                {transactionData.decoded_input.parameters.map(
                  (parameter: TransactionParameter) => (
                    <div>
                      {parameter.name}
                      {": "}
                      {parameter.type === "address" ? (
                        <Link
                          href={`/contracts/${network}/${parameter.value}`}
                          className="break-all hover:text-teal-400 text-sm"
                        >
                          {parameter.value}
                        </Link>
                      ) : (
                        <span className="break-all text-sm sm:text-base">
                          {parameter.value}
                        </span>
                      )}{" "}
                      <span className="text-xs">{parameter.type}</span>
                    </div>
                  )
                )}
              </div>
            )}

            <p className="mt-3">
              To:{" "}
              <Link
                href={`/contracts/${network}/${hashData.to ?? "0x0000000000000000000000000000000000000000"}`}
                className="hover:text-teal-400"
              >
                {transactionData.to?.name && transactionData.to.name + " "}
                {transactionData.to?.ens_domain_name ??
                  transactionData.to?.implementation_name}
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
            <p className="mt-2">
              Fee:{" "}
              {parseWithER(
                transactionData.fee?.value,
                transactionData.exchange_rate
              )}{" "}
              USD
            </p>
            <p className="mt-2">
              Value:{" "}
              {parseWithER(
                transactionData.value,
                transactionData.exchange_rate
              )}{" "}
              USD
            </p>

            {transactionData.token_transfers &&
              transactionData.token_transfers.map((token: TokenTransfer) => (
                <div className="mt-4">
                  <div>
                    From:{" "}
                    <Link
                      href={`/contracts/${network}/${token.from.hash ?? "0x0000000000000000000000000000000000000000"}`}
                      className="hover:text-teal-400"
                    >
                      {parseHash(token.from.hash)}
                    </Link>
                  </div>
                  <div>
                    To:{" "}
                    <Link
                      href={`/contracts/${network}/${token.to.hash ?? "0x0000000000000000000000000000000000000000"}`}
                      className="hover:text-teal-400"
                    >
                      {parseHash(token.to.hash)}
                    </Link>
                  </div>
                  <div className="mx-auto flex items-center justify-center fade-in">
                    {token.token.icon_url && (
                      <Image
                        src={token.token.icon_url}
                        alt={token.token.symbol}
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                    )}
                    <span>
                      <Link
                        href={`/contracts/${network}/${token.token.address ?? "0x0000000000000000000000000000000000000000"}`}
                        className="hover:text-teal-400"
                      >
                        {token.token.name} ({token.token.symbol})
                      </Link>
                    </span>
                  </div>

                  <div>
                    {parseToken(token.total.value, token.total.decimals)}{" "}
                    {token.token.symbol}{" "}
                    {parseTokenWithER(
                      token.total.value,
                      token.total.decimals,
                      token.token.exchange_rate
                    )}{" "}
                    USD
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ContractPage;
