import Link from "next/link";
import { useState, useEffect } from "react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

import {
  CountersContract,
  getContractCountersOptimism,
  getContractCountersEthereum,
  getAddressTransactions,
  AddressTransaction,
} from "@/services/ContractService";
import { getNetworkName } from "@/utils/networks";
import { parseHash } from "@/utils/hashes";

interface ContractProps {
  address: string;
}

export const TransactionCard = (props: ContractProps) => {
  const { chain } = useAccount();

  const [loading, setLoading] = useState(true);

  const [counters, setCounters] = useState<CountersContract>();
  const [addressTxs, setAddressTxs] = useState<any>();

  const contractAddress = props.address;

  const chainId = chain?.id ?? 1;

  useEffect(() => {
    const fetchTransactionData = async () => {
      if (chainId === 1) {
        const dataCounters = await getContractCountersEthereum(contractAddress);
        setCounters(dataCounters);

        const txData = await getAddressTransactions(contractAddress);
        setAddressTxs(txData);
      }
      if (chainId === 10) {
        const dataCounters = await getContractCountersOptimism(contractAddress);
        setCounters(dataCounters);
      }
      setLoading(false);
    };

    fetchTransactionData();
  }, [loading]);

  return (
    <div>
      <div className="text-xl font-semibold">
        {getNetworkName(chainId)} Transaction Data:
      </div>
      <div>
        Gas usage count:{" "}
        {Number(counters?.gas_usage_count).toLocaleString("en-GB") ?? 0}
      </div>
      <div>Token transfers count: {counters?.token_transfers_count}</div>
      <div>
        Transactions count:{" "}
        {Number(counters?.transactions_count).toLocaleString("en-GB") ?? 0}
      </div>
      <div>Validations count: {counters?.validations_count}</div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 text-left mt-10 ring-1 ring-gray-300 sm:rounded-lg">
          {addressTxs?.length > 0 && (
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="text-gray-900">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-sm font-semibold sm:pl-6"
                  >
                    Timestamp
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-sm font-semibold sm:pl-6"
                  >
                    Hash
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-sm font-semibold lg:table-cell"
                  >
                    From To
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-sm font-semibold lg:table-cell"
                  >
                    Eth Value
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-sm font-semibold">
                    Gas used
                  </th>
                </tr>
              </thead>
              <tbody>
                {addressTxs?.map((tx: AddressTransaction) => (
                  <tr key={tx.hash}>
                    <td className="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                      {new Date(tx.timestamp).toLocaleString()}
                    </td>
                    <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                      {parseHash(tx.hash)}
                    </td>
                    <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                      <Link
                        href={`/contracts/${tx.from.hash}`}
                        className="bg-[#be369c] text-sm text-gray-300 hover:text-white font-medium mr-2 px-2.5 py-0.5 rounded ml-1"
                      >
                        {parseHash(tx.from.hash)}
                      </Link>{" "}
                      <div className="mt-2"></div>
                      <Link
                        href={`/contracts/${tx.to.hash}`}
                        className="bg-[#36be56] text-sm text-gray-300 hover:text-white font-medium mr-2 px-2.5 py-0.5 rounded ml-1"
                      >
                        {parseHash(tx.to.hash)}
                      </Link>
                    </td>
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                      {Number(
                        parseFloat(formatEther(BigInt(tx.value))).toFixed(3)
                      )}
                    </td>
                    <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                      {Number(tx.gas_used).toLocaleString("es-US") ?? 0}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
