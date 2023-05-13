import React, { useState, useEffect } from "react";
import { Transaction } from "../types";
import { parseTimestampToMinutesAgo } from "../utils/time";

import { ethers } from "ethers";
interface ContractProps {
  address: string;
  abi: any;
  provider: any;
}

export const TransactionCard = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  /* const [transaction, setTransaction] = useState<Transaction | undefined>(
    undefined
  ); */
  const [transactions, setTransactions] = useState([]);
  const [transactionCount, setTransactionCount] = useState<number>(0);

  const provider = props.provider;

  useEffect(() => {
    const fetchTransaction = async () => {
      const contract = new ethers.Contract(
        props.address,
        props.abi,
        props.provider
      );

      setTransactionCount(
        await contract.provider.getTransactionCount(props.address, "latest")
      );

      const blockNumber = await props.provider.getBlockNumber();

      const transactionLogs = await provider.getLogs({
        fromBlock: blockNumber - 1,
        toBlock: blockNumber,
      });

      const transactions = await Promise.all(
        transactionLogs.slice(0, 10).map(async (log: any) => {
          const transaction = await provider.getTransaction(
            log.transactionHash
          );

          return {
            hash: transaction.hash,
            from: transaction.from,
            to: transaction.to,
            value: ethers.utils.formatEther(transaction.value),
            gasPrice: ethers.utils.formatEther(transaction.gasPrice),
          };
        })
      );

      console.log(transactions);

      setTransactions(transactions as any);

      setLoading(false);
    };

    fetchTransaction();
  }, [loading]);

  if (loading) {
    return null;
  }

  return (
    <p className="card-text">
      {transactionCount > 0 ? (
        <>
          {transactionCount ? (
            <small className="text-xl font-semibold">
              Latest transaction Count: {transactionCount}
            </small>
          ) : null}
        </>
      ) : (
        <small>No recent activity..</small>
      )}

      {transactions.map((tx: any) => (
        <tr key={tx.hash}>
          <div className="mx-auto  flex items-center mt-5 justify-center py-2 ">
            <div className="mt-2 border-t border-gray-900 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Hash
              </h1>
              <h3 className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                {tx.hash}
              </h3>
            </div>
            <div className="mt-2 border-t border-gray-900 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                From
              </h1>
              <h3 className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                {tx.from}
              </h3>
            </div>
            <div className="mt-2 border-t border-gray-900 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                To
              </h1>
              <h3 className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                {tx.to}
              </h3>
            </div>
            <div className="mt-2 border-t border-gray-900 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Value
              </h1>

              <h3 className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                {tx.value}
              </h3>
            </div>
            <div className="mt-2 border-t border-gray-900 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Gas price
              </h1>
              <h3 className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                {tx.gasPrice}
              </h3>
            </div>
          </div>
        </tr>
      ))}
    </p>
  );
};
