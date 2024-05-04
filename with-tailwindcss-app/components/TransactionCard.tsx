import { useState, useEffect } from "react";
import { useAccount } from "wagmi";

import {
  CountersContract,
  getContractCountersOptimism,
  getContractCountersEthereum,
  getAddressTransactions,
  AddressTransaction,
} from "services/ContractService";

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
        ChainId-{chainId} Transaction Data:
      </div>
      <div>Gas usage count: {counters?.gas_usage_count}</div>
      <div>token transfers count: {counters?.token_transfers_count}</div>
      <div>transactions count: {counters?.transactions_count}</div>
      <div>validations count: {counters?.validations_count}</div>

      {addressTxs?.length > 0 && (
        <table className="mx-auto items-center mt-5 justify-center text-sm">
          <thead>
            <tr>
              <th className="text-base font-semibold leading-6 text-gray-900">
                Timestamp
              </th>
              <th className="text-base font-semibold leading-6 text-gray-900">
                From
              </th>
              <th className="text-base font-semibold leading-6 text-gray-900">
                To
              </th>
              <th className="text-base font-semibold leading-6 text-gray-900">
                Value
              </th>
              <th className="text-base font-semibold leading-6 text-gray-900">
                Gas used
              </th>
            </tr>
          </thead>
          <tbody>
            {addressTxs?.map((tx: AddressTransaction) => (
              <tr key={tx.hash}>
                <td className="ml-2">
                  {new Date(tx.timestamp).toLocaleString()}
                </td>
                <td className="ml-2">{tx.from.hash}</td>
                <td className="ml-2">{tx.to.hash}</td>
                <td className="ml-2">{tx.value}</td>
                <td className="ml-2">{tx.gas_used}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
