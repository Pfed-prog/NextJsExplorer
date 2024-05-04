import { useState, useEffect } from "react";
import { useAccount } from "wagmi";

import {
  CountersContract,
  getContractCountersOptimism,
  getContractCountersEthereum,
  getAddressTransactions,
  AddressTransaction,
} from "services/ContractService";
import { getNetworkName } from "utils/networks";

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
      <div>Gas usage count: {counters?.gas_usage_count}</div>
      <div>token transfers count: {counters?.token_transfers_count}</div>
      <div>transactions count: {counters?.transactions_count}</div>
      <div>validations count: {counters?.validations_count}</div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
          {addressTxs?.length > 0 && (
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Timestamp
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    From
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
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
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                      {tx.from.hash}
                    </td>
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                      {tx.to.hash}
                    </td>
                    <td className="border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                      {tx.value}
                    </td>
                    <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                      {tx.gas_used}
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
