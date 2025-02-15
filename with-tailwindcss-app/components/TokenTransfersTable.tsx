import type { TokenTransfersObject } from "@evmexplorer/blockscout";
import {
  parseHash,
  parseNumber,
  getNetworkName,
  ChainType,
} from "@evmexplorer/utility";
import { useState } from "react";
import Link from "next/link";

import { TransactionName } from "./TransactionName";
import { Loading } from "@/components/Loading";
import { useAddressTokenTransfers } from "@/hooks/blockscout";

interface ContractProps {
  chainId: number;
  contractAddress: string;
}

export const TokenTransfersTable = (props: ContractProps) => {
  const chainId = props.chainId;
  const contractAddress = props.contractAddress;

  const network: ChainType = getNetworkName(chainId) ?? "mainnet";

  const [transactionQueryParams, setTransactionQueryParams] =
    useState<string>("");
  const [transactionsPages, setTransactionsPages] = useState<{
    [key: number]: string;
  }>({
    0: "",
  });

  const { data: transactions, isFetched: isFetchedTxs } =
    useAddressTokenTransfers(contractAddress, transactionQueryParams, chainId);

  const [page, setPage] = useState(0);
  return (
    <div>
      {isFetchedTxs && transactions?.items?.length !== 0 && (
        <div className="px-4 sm:px-6 lg:px-8 fade-in-1s">
          <div className="bg-slate-300 text-left mt-8 sm:mt-10 ring-4 ring-slate-400 rounded-lg">
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
                    <p>Method Call</p>
                    <p>From</p>
                    <p>To</p>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-sm font-semibold">
                    <p>Token</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions?.items?.map((tx: TokenTransfersObject) => (
                  <tr
                    key={
                      "TokenTransfers" +
                      tx.log_index +
                      tx.transaction_hash +
                      tx.total.value
                    }
                  >
                    <td className="border-t border-gray-400 py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <Link
                        href={`/transactions/${network}/${tx.transaction_hash}`}
                        className="hover:text-teal-400 font-mono text-sm font-semibold"
                      >
                        {parseHash(tx.transaction_hash)}
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
                      <span className="px-0.5 sm:px-1 py-0.5 rounded-sm font-bold mb-2 text-gray-800 break-all">
                        {tx.method}
                      </span>

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

                    <td className="border-t border-gray-400 px-3 py-3.5 text-sm text-gray-700 lg:table-cell break-all">
                      {tx.total.decimals ? (
                        <span>
                          {Number(tx.total.value) / 10 ** tx.total.decimals}
                        </span>
                      ) : (
                        <span>{Number(tx.total.value) / 10 ** 18}</span>
                      )}
                      <Link href={`/contracts/${network}/${tx.token.address}`}>
                        <span className="ml-1 hover:text-teal-500">
                          {tx.token.symbol}
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end mt-4">
            <div className="relative inline-flex items-center px-2 py-2 mr-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white">
              Page: {page}
            </div>

            {page > 0 && (
              <button
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300"
                onClick={() => {
                  const _page = page - 1;
                  setPage(_page);

                  setTransactionQueryParams(transactionsPages[_page]);
                }}
                disabled={page === 0}
              >
                Previous Page
              </button>
            )}

            {transactions?.next_page_params && (
              <button
                className="relative inline-flex items-center ml-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300"
                onClick={() => {
                  if (transactions?.next_page_params) {
                    const _page = page + 1;
                    setPage(_page);
                    if (!transactionsPages[_page]) {
                      setTransactionsPages({
                        ...transactionsPages,
                        [_page]: `block_number=${transactions?.next_page_params?.block_number}&index=${transactions?.next_page_params?.index}`,
                      });
                    }
                    setTransactionQueryParams(
                      `block_number=${transactions?.next_page_params?.block_number}&index=${transactions?.next_page_params?.index}`
                    );
                  }
                }}
                disabled={!transactions?.next_page_params}
              >
                Next Page
              </button>
            )}
          </div>
        </div>
      )}
      {!isFetchedTxs && (
        <div className="mt-10">
          <Loading />
        </div>
      )}
    </div>
  );
};
