import Link from "next/link";
import { formatEther } from "viem";

import { Loading } from "@/components/Loading";
import {
  useContractCounters,
  useAddressTransactions,
} from "@/hooks/blockscout";
import {
  type AddressTransaction,
  type AddressInfo,
} from "@/hooks/blockscout/queries";
import { getNetworkName } from "@/utils/networks";
import { parseHash } from "@/utils/hashes";

interface ContractProps {
  address: string;
  addressInfo: AddressInfo;
  chainId: number;
}

export const TransactionCard = (props: ContractProps) => {
  const addressInfo = props.addressInfo;
  const chainId = props.chainId;
  const contractAddress = props.address;

  const { data: counters, isFetched: isFetchedCounters } = useContractCounters(
    contractAddress,
    chainId
  );
  const { data: addressTxs, isFetched: isFetchedTxs } = useAddressTransactions(
    contractAddress,
    chainId
  );

  return (
    <div>
      {isFetchedCounters && addressInfo?.is_contract && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="font-serif text-2xl sm:text-3xl mb-8 sm:mb-12">
            {getNetworkName(chainId)} Transaction Data:
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">Gas usage</dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                {Number(counters?.gas_usage_count).toLocaleString("en-GB") ?? 0}
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">
                Token transfers
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                {Number(counters?.token_transfers_count).toLocaleString(
                  "en-GB"
                ) ?? 0}
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">
                Transactions
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                {Number(counters?.transactions_count).toLocaleString("en-GB") ??
                  0}
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">
                Validations
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                {Number(counters?.validations_count).toLocaleString("en-GB") ??
                  0}
              </dd>
            </div>
          </dl>
        </div>
      )}

      {isFetchedTxs && (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 text-left mt-10 ring-1 ring-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="text-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-sm font-semibold sm:pl-6"
                  >
                    Hash Timestamp
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-sm font-semibold lg:table-cell"
                  >
                    Method Call
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-sm font-semibold lg:table-cell"
                  >
                    Gas used
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-sm font-semibold lg:table-cell"
                  >
                    Eth Value
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
                {addressTxs?.map((tx: AddressTransaction) => (
                  <tr key={tx.hash}>
                    <td className="border-t border-gray-200 py-4 pl-4 pr-3 text-sm sm:pl-6">
                      {parseHash(tx.hash)}
                      <div className="mt-2"></div>
                      <div className="font-medium">
                        {new Date(tx.timestamp).toLocaleString()}
                      </div>
                    </td>

                    <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-400 lg:table-cell">
                      <p className="break-all rounded text-gray-500 hover:text-gray-600 mb-2">
                        {tx.method}
                      </p>
                      <Link
                        href={`/contracts/${tx.from.hash}`}
                        className="break-all bg-[#be369c] text-sm text-gray-300 hover:text-white font-medium px-1 sm:px-2.5 py-0.5 rounded"
                      >
                        {tx.from.ens_domain_name ??
                          tx.from.implementation_name ??
                          tx.from.name ??
                          parseHash(tx.from.hash)}
                      </Link>
                      <div className="mt-2"></div>
                      <Link
                        href={`/contracts/${tx.to?.hash}`}
                        className="break-all bg-[#36be56] text-sm text-gray-300 hover:text-white font-medium px-1 sm:px-2.5 py-0.5 rounded"
                      >
                        {tx.to?.ens_domain_name ??
                          tx.to?.implementation_name ??
                          tx.to?.name ??
                          parseHash(tx.to?.hash)}
                      </Link>
                    </td>
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-600 lg:table-cell">
                      {Number(tx.gas_used).toLocaleString("es-US") ?? 0}
                    </td>
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                      {Number(
                        parseFloat(formatEther(BigInt(tx.value))).toFixed(3)
                      )}
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
