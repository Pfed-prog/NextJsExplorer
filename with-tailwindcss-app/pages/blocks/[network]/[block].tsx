import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { Loading } from "@/components/Loading";
import { PageSEO } from "@/components/SEO";
import { useBlockTransactions } from "@/hooks/viem";
import { parseHash } from "@/utils/hashes";
import { getNetworkId, getNetworkName } from "@/utils/networks";
import { parseWithER, parseWei } from "@/utils/parseNumbers";
import { useTransactionBlockscoutConditional } from "@/hooks/blockscout";

export const BlocksPage: NextPage = () => {
  const router = useRouter();
  const { block, network } = router.query;

  const blockNumber: number = Number(block);

  const chainId = getNetworkId(network as string);
  const networkName = getNetworkName(chainId);

  const { data: blockData, isFetched: isBlockFetched } = useBlockTransactions(
    blockNumber,
    networkName
  );

  const { data: transactionData, isFetched: isTransactionFetched } =
    useTransactionBlockscoutConditional(
      blockData?.transactions[0].hash,
      chainId
    );

  return (
    <div>
      <PageSEO />

      {isBlockFetched && isTransactionFetched && transactionData ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 pb-4 sm:pb-0">
          <div className="font-serif text-2xl sm:text-3xl mb-2">
            {Number(blockData?.number).toLocaleString("en-GB")}
          </div>

          <div className="font-serif mb-6 sm:mb-10">
            Miner{" "}
            <Link
              href={`/contracts/${networkName}/${blockData?.miner}`}
              className="hover:text-green-400"
            >
              {parseHash(blockData?.miner)}
            </Link>
            <p className="font-sans text-sm">
              {new Date(Number(blockData?.timestamp) * 1000).toLocaleString()}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-2">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">Gas usage</dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                {Number(blockData?.gasUsed).toLocaleString("en-GB") ?? 0}
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">
                Transactions
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                {Number(blockData?.transactions.length).toLocaleString(
                  "en-GB"
                ) ?? 0}
              </dd>
            </div>
          </dl>

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-100 text-left mt-3 sm:mt-10 ring-1 ring-gray-300 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="text-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-sm font-semibold sm:pl-6"
                    >
                      Hash
                      <p>Type</p>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-semibold lg:table-cell"
                    >
                      <p>From</p>
                      To
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-sm font-semibold lg:table-cell"
                    >
                      Gas Used
                      <p>Gas Price</p>
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-sm font-semibold lg:table-cell"
                    >
                      Value
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {blockData?.transactions.map((tx) => (
                    <tr key={tx.hash}>
                      <td className="border-t border-gray-200 py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <Link
                          href={`/transactions/${network}/${tx.hash}`}
                          className="hover:text-teal-400"
                        >
                          {parseHash(tx.hash)}
                        </Link>
                        <p>{tx.type}</p>
                      </td>

                      <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-400 lg:table-cell">
                        <p className="mt-2">
                          <Link
                            href={`/contracts/${network}/${tx.from}`}
                            className="break-all bg-[#5a628d] text-sm text-gray-300 hover:text-white font-medium px-1 sm:px-2.5 py-0.5 rounded"
                          >
                            {parseHash(tx.from)}
                          </Link>
                        </p>

                        <p className="mt-2">
                          <Link
                            href={`/contracts/${network}/${tx.to ?? "0x0000000000000000000000000000000000000000"}`}
                            className="break-all bg-[#bebbbb] text-sm text-[#5a628d] hover:text-gray-800 font-medium px-1 sm:px-2.5 py-0.5 rounded"
                          >
                            {parseHash(
                              tx.to ??
                                "0x0000000000000000000000000000000000000000"
                            )}
                          </Link>
                        </p>
                      </td>
                      <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-600 lg:table-cell">
                        {Number(tx.gas).toLocaleString("es-US") ?? 0}
                        <p className="mt-2">
                          {parseWei(String(tx.gasPrice))} Gwei
                        </p>
                      </td>
                      <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                        {parseWithER(
                          String(tx.value),
                          transactionData.exchange_rate
                        )}{" "}
                        USD
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BlocksPage;
