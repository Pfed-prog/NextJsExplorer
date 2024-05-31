import Link from "next/link";

import { Loading } from "@/components/Loading";
import {
  useContractCounters,
  useAddressTransactions,
} from "@/hooks/blockscout";
import {
  type AddressTransaction,
  type AddressInfo,
} from "@/hooks/blockscout/queries";
import { parseHash } from "@/utils/hashes";
import { getNetworkName } from "@/utils/networks";
import { parseNumber, parseWei, parseWithER } from "@/utils/parseNumbers";
import { parseTxTypes } from "@/utils/parseTypes";
import { TransactionName } from "./TransactionName";

interface ContractProps {
  address: string;
  addressInfo: AddressInfo;
  chainId: number;
}

export const TransactionCard = (props: ContractProps) => {
  const addressInfo = props.addressInfo;
  const chainId = props.chainId;
  const contractAddress = props.address;

  const network = getNetworkName(chainId);

  const { data: counters, isFetched: isFetchedCounters } = useContractCounters(
    contractAddress,
    chainId
  );
  const { data: addressTransactions, isFetched: isFetchedTxs } =
    useAddressTransactions(contractAddress, chainId);

  return (
    <div>
      {isFetchedCounters && counters && addressInfo?.is_contract && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-16">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">
                Token transfers
              </dt>
              <dd className="order-first text-3xl font-semibold text-emerald-500 sm:text-4xl">
                {parseNumber(counters?.token_transfers_count)}
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">
                Transactions
              </dt>
              <dd className="order-first text-3xl font-semibold text-emerald-500 sm:text-4xl">
                {parseNumber(counters?.transactions_count)}
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">Gas usage</dt>
              <dd className="order-first text-2xl font-semibold text-emerald-500 sm:text-4xl">
                {parseNumber(counters?.gas_usage_count)}
              </dd>
            </div>

            {counters?.transactions_count !== "0" && (
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base sm:text-lg text-gray-600">
                  Average Gas per Transaction
                </dt>
                <dd className="order-first text-3xl font-semibold text-emerald-500 sm:text-4xl">
                  {(
                    Number(counters?.gas_usage_count) /
                    Number(counters?.transactions_count)
                  ).toLocaleString("en-GB") ?? 0}
                </dd>
              </div>
            )}

            {counters?.validations_count !== "0" && (
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base sm:text-lg text-gray-600">
                  Validations
                </dt>
                <dd className="order-first text-3xl font-semibold text-emerald-500 sm:text-4xl">
                  {parseNumber(counters?.validations_count)}
                </dd>
              </div>
            )}
          </dl>
        </div>
      )}

      {isFetchedTxs && addressTransactions?.length !== 0 && (
        <div className="px-4 sm:px-6 lg:px-8 mt-5">
          <div className="bg-gray-100 text-left sm:mt-10 ring-1 ring-gray-300 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="text-gray-800">
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
                    Value <p>Fee</p>
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
                {addressTransactions?.map((tx: AddressTransaction) => (
                  <tr key={tx.hash}>
                    <td className="border-t border-gray-200 py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <Link
                        href={`/transactions/${network}/${tx.hash}`}
                        className="hover:text-teal-400 font-mono"
                      >
                        {parseHash(tx.hash)}
                      </Link>

                      {tx.block && (
                        <p className="mt-2">
                          <Link
                            href={`/blocks/${network}/${tx.block}`}
                            className="hover:text-teal-400"
                          >
                            {tx.block.toLocaleString("es-US")}
                          </Link>
                        </p>
                      )}

                      <p className="mt-2 font-medium">
                        {new Date(tx.timestamp).toLocaleString()}
                      </p>
                    </td>

                    <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-400 lg:table-cell">
                      {tx.method ? (
                        <span
                          className={
                            "px-2 sm:px-2.5 py-0.5 rounded font-bold mb-2 text-gray-100 hover:text-white break-all " +
                            parseTxTypes(tx.tx_types).background
                          }
                        >
                          {tx.method}
                        </span>
                      ) : (
                        <span
                          className={
                            "px-2 sm:px-2.5 py-0.5 rounded font-bold mb-2 text-gray-100 hover:text-white break-words " +
                            parseTxTypes(tx.tx_types).background
                          }
                        >
                          {parseTxTypes(tx.tx_types).placeholder}
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
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-600 lg:table-cell">
                      {Number(tx.gas_used).toLocaleString("es-US") ?? 0}
                      <p className="mt-2">{parseWei(tx.gas_price)} Gwei</p>
                    </td>
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                      {parseWithER(tx.value, tx.exchange_rate)} USD
                      <p className="mt-2">
                        {parseWithER(tx.fee?.value, tx.exchange_rate)} USD
                      </p>
                    </td>
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                      {tx.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
