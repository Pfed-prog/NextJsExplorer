import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { formatEther, formatUnits } from "viem";

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
                          className="hover:text-teal-400"
                        >
                          {parameter.value}
                        </Link>
                      ) : (
                        <span>{parameter.value}</span>
                      )}{" "}
                      {parameter.type}
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
                {transactionData.to.name && transactionData.to.name + " "}
                {transactionData.to.ens_domain_name ??
                  transactionData.to.implementation_name}
                {!(
                  transactionData.to.name ||
                  transactionData.to.ens_domain_name ||
                  transactionData.to.implementation_name
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
              {(
                Number(formatEther(BigInt(transactionData.fee?.value))) *
                Number(transactionData.exchange_rate)
              ).toFixed(2)}{" "}
              USD
            </p>
            <p className="mt-2">
              Value:{" "}
              {Number(
                (
                  Number(formatEther(BigInt(transactionData.value))) *
                  Number(transactionData.exchange_rate)
                ).toFixed(2)
              ).toLocaleString("es-US")}{" "}
              USD
            </p>

            {transactionData.token_transfers &&
              transactionData.token_transfers.map((token: TokenTransfer) => (
                <div className="mt-4">
                  <div>From {token.from.hash}</div>
                  <div>To {token.to.hash}</div>
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
                    {token.token.name} ({token.token.symbol})
                  </div>

                  <div>
                    {Number(
                      formatUnits(
                        BigInt(token.total.value),
                        Number(token.total.decimals)
                      )
                    ).toFixed(2)}{" "}
                    {token.token.symbol}{" "}
                    {(
                      Number(
                        formatUnits(
                          BigInt(token.total.value),
                          Number(token.total.decimals)
                        )
                      ) * Number(token.token.exchange_rate)
                    ).toFixed(2)}{" "}
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
