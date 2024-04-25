import React, { useState, useEffect } from "react";
import { Contract } from "ethers";
import {
  CountersContract,
  getContractCountersOptimism,
} from "services/ContractService";

interface ContractProps {
  address: string;
  abi: string;
  provider: any;
}

export const TransactionCard = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [transactionCount, setTransactionCount] = useState<number>(0);
  const [counters, setCounters] = useState<CountersContract>();
  const transactions = [] as any;

  const abi = props.abi;
  const provider = props.provider;
  const contractAddress = props.address;

  useEffect(() => {
    const fetchTransactionData = async () => {
      const contract = new Contract(contractAddress, abi, provider);

      const fetchedTxLatestCount = await contract.provider.getTransactionCount(
        contractAddress
      );

      const dataCounters = await getContractCountersOptimism(contractAddress);

      setCounters(dataCounters);
      setTransactionCount(fetchedTxLatestCount);
      setLoading(false);
    };

    fetchTransactionData();
  }, [loading]);

  return (
    <div>
      <div className="text-xl font-semibold">Transaction Data:</div>
      <div>Nonce Tx Count: {transactionCount}</div>
      <div>Gas usage count: {counters?.gas_usage_count}</div>
      <div>token transfers count: {counters?.token_transfers_count}</div>
      <div>transactions count: {counters?.transactions_count}</div>
      <div>validations count: {counters?.validations_count}</div>
      <table className="mx-auto items-center mt-5 justify-center text-sm">
        <thead>
          <tr>
            <th className="text-base font-semibold leading-6 text-gray-900">
              Hash
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
              Gas price
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx: any) => (
            <tr key={tx.hash}>
              <td className="ml-2">{tx.hash}</td>
              <td className="ml-2">{tx.from}</td>
              <td className="ml-2">{tx.to}</td>
              <td className="ml-2">{tx.value}</td>
              <td className="ml-2">{tx.gasPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
