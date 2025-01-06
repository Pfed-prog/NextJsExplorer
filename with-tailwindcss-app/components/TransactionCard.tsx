import type { TransactionBlockscout } from "@evmexplorer/blockscout";
import {
  parseHash,
  parseNumber,
  parseWithER,
  parseNumberFixed,
  getNetworkName,
  parseWei,
  ChainType,
} from "@evmexplorer/utility";
import { useState } from "react";
import Link from "next/link";

import { TransactionName } from "./TransactionName";
import { Loading } from "@/components/Loading";
import { useAddressCounters, useAddressTransactions } from "@/hooks/blockscout";
import { parseTxTypes } from "@/styles/parseTypes";

interface ContractProps {
  address: string;
  chainId: number;
}

export const TransactionCard = (props: ContractProps) => {
  const chainId = props.chainId;
  const contractAddress = props.address;

  const network: ChainType = getNetworkName(chainId) ?? "mainnet";

  const [transactionQueryParams, setTransactionQueryParams] =
    useState<string>("");
  const [transactionPages, setTransactionPages] = useState<{
    [key: number]: string;
  }>({
    0: "",
  });
  const [page, setPage] = useState(0);

  const [transactionsDisplay, setTransactionDisplay] = useState<
    "Transactions" | "Token Transfers"
  >("Transactions");

  const { data: counters, isFetched: isFetchedCounters } = useAddressCounters(
    contractAddress,
    chainId
  );
  const { data: addressTransactions, isFetched: isFetchedTxs } =
    useAddressTransactions(contractAddress, transactionQueryParams, chainId);

  return (
    <div>
      {isFetchedCounters && counters && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-16">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <p className="text-base sm:text-lg font-semibold from-purple-500 via-violet-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent">
                Transactions
              </p>
              <p className="order-first text-3xl sm:text-4xl font-extrabold from-purple-500 via-violet-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent">
                {parseNumber(counters.transactions_count)}
              </p>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <p className="text-base sm:text-lg font-semibold from-emerald-500 to-emerald-600 bg-gradient-to-r bg-clip-text text-transparent">
                Token transfers
              </p>
              <p className="order-first text-3xl sm:text-4xl font-extrabold from-emerald-500 to-emerald-600 bg-gradient-to-r bg-clip-text text-transparent">
                {parseNumber(counters.token_transfers_count)}
              </p>
            </div>

            {counters.transactions_count !== "0" && (
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <p className="text-base sm:text-lg font-semibold from-pink-500 to-pink-600 bg-gradient-to-r bg-clip-text text-transparent">
                  Average Gas per Transaction
                </p>
                <p className="order-first text-3xl sm:text-4xl font-extrabold from-pink-500 to-pink-600 bg-gradient-to-r bg-clip-text text-transparent">
                  {parseNumberFixed(
                    Number(counters.gas_usage_count) /
                      Number(counters.transactions_count)
                  )}
                </p>
              </div>
            )}

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <p className="text-base sm:text-lg font-semibold from-blue-500 via-cyan-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent">
                Gas usage
              </p>
              <p className="order-first text-2xl sm:text-3xl font-extrabold from-blue-500 via-cyan-600 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent">
                {parseNumber(counters.gas_usage_count)}
              </p>
            </div>

            {counters?.validations_count !== "0" && (
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <p className="text-base sm:text-lg text-zinc-500 brightness-90">
                  Validations
                </p>
                <p className="order-first text-3xl font-extrabold text-emerald-500 sm:text-4xl">
                  {parseNumber(counters.validations_count)}
                </p>
              </div>
            )}
          </dl>
        </div>
      )}

      {transactionsDisplay === "Transactions" &&
        isFetchedTxs &&
        addressTransactions?.items?.length !== 0 && (
          <div className="px-4 sm:px-6 lg:px-8 mt-5 sm:mt-8 md:mt-10 lg:mt-16 fade-in-1s">
            <div className="bg-slate-300 text-left sm:mt-10 ring-4 ring-slate-400 rounded-lg">
              <table className="min-w-full divide-y font-medium">
                <thead className="text-gray-800 bg-[#e5eaf0]">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-sm font-semibold sm:pl-6"
                    >
                      Hash
                      <p>Block</p>
                      <p>Timestamp</p>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-semibold lg:table-cell"
                    >
                      Method Call (Tx Type)
                      <p>From</p>
                      <p>To</p>
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-sm font-semibold lg:table-cell"
                    >
                      Gas Used
                      <p className="mt-1">Gas Price</p>
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-sm font-semibold lg:table-cell"
                    >
                      Value <p className="mt-1">Fee</p>
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-sm font-semibold lg:table-cell"
                    >
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {addressTransactions?.items?.map(
                    (tx: TransactionBlockscout) => (
                      <tr key={tx.hash}>
                        <td className="border-t border-gray-400 py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <Link
                            href={`/transactions/${network}/${tx.hash}`}
                            className="hover:text-teal-400 font-mono text-sm font-semibold"
                          >
                            {parseHash(tx.hash)}
                          </Link>

                          {tx.block_number && (
                            <p className="mt-2 font-base">
                              <Link
                                href={`/blocks/${network}/${tx.block_number}`}
                                className="hover:text-teal-400"
                              >
                                {parseNumber(tx.block_number)}
                              </Link>
                            </p>
                          )}

                          {tx.timestamp && (
                            <p className="mt-2 text-xs">
                              {new Date(tx.timestamp).toLocaleString()}
                            </p>
                          )}
                        </td>

                        <td className="border-t border-gray-400 px-3 py-3.5 text-sm text-gray-400 lg:table-cell">
                          {tx.method ? (
                            <span
                              className={
                                "px-2 sm:px-2.5 py-0.5 rounded font-bold mb-2 text-gray-100 hover:text-white break-all " +
                                parseTxTypes(tx.transaction_types).background
                              }
                            >
                              {tx.method}
                            </span>
                          ) : (
                            <span
                              className={
                                "px-2 sm:px-2.5 py-0.5 rounded font-bold mb-2 text-gray-100 hover:text-white break-words " +
                                parseTxTypes(tx.transaction_types).background
                              }
                            >
                              {parseTxTypes(tx.transaction_types).placeholder}
                            </span>
                          )}

                          <TransactionName
                            network={network}
                            transactionAddressData={tx.from}
                            isSender={true}
                          />

                          <TransactionName
                            network={network}
                            transactionAddressData={tx.to}
                            isSender={false}
                          />
                        </td>
                        <td className="border-t border-gray-400 hidden px-3 py-3.5 text-sm text-[#475569] lg:table-cell">
                          {parseNumber(tx.gas_used)}
                          <p className="mt-2">
                            {parseWei(tx.gas_price ?? "0")} Gwei
                          </p>
                        </td>
                        <td className="border-t border-gray-400 hidden px-3 py-3.5 text-sm text-[#475569] lg:table-cell">
                          {parseWithER(tx.value, tx.exchange_rate)} USD
                          <p className="mt-2">
                            {parseWithER(tx.fee?.value, tx.exchange_rate)} USD
                          </p>
                        </td>
                        <td className="border-t border-gray-400 hidden px-3 py-3.5 text-sm text-[#334155] lg:table-cell">
                          {tx.result}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end mt-4">
              <div className="relative inline-flex items-center px-2 py-2 mr-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white">
                Page: {page}
              </div>

              <button
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300"
                onClick={() => {
                  if (addressTransactions?.next_page_params) {
                    const _page = page - 1;
                    setPage(_page);

                    setTransactionQueryParams(transactionPages[_page]);
                  }
                }}
                disabled={page === 0}
              >
                Previous Page
              </button>

              <button
                className="relative inline-flex items-center ml-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300"
                onClick={() => {
                  if (addressTransactions?.next_page_params) {
                    const _page = page + 1;
                    setPage(_page);
                    if (!transactionPages[_page]) {
                      setTransactionPages({
                        ...transactionPages,
                        [_page]: `?page=0&block_number=${addressTransactions?.next_page_params?.block_number}&index=${addressTransactions?.next_page_params?.index}&items_count=${addressTransactions?.next_page_params?.items_count}`,
                      });
                    }
                    setTransactionQueryParams(
                      `?page=0&block_number=${addressTransactions?.next_page_params?.block_number}&index=${addressTransactions?.next_page_params?.index}&items_count=${addressTransactions?.next_page_params?.items_count}`
                    );
                  }
                }}
                disabled={!addressTransactions?.next_page_params}
              >
                Next Page
              </button>
            </div>
          </div>
        )}

      {transactionsDisplay === "Transactions" && !isFetchedTxs && (
        <div className="mt-10">
          <Loading />
        </div>
      )}
    </div>
  );
};
