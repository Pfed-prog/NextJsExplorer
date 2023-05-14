import React, { useState, useEffect } from "react";
import { utils, Contract } from "ethers";

interface ContractProps {
  address: string;
  abi: Array<any>;
  provider: any;
}

export const TransactionCard = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  // const [transactionCount, setTransactionCount] = useState<number>(0);

  const provider = props.provider;

  useEffect(() => {
    const fetchTransaction = async () => {
      const contract = new Contract(props.address, props.abi, props.provider);

      /* setTransactionCount(
        await contract.provider.getTransactionCount(props.address, "latest")
      ); */

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
            value: utils.formatEther(transaction.value),
            gasPrice: utils.formatEther(transaction.gasPrice),
          };
        })
      );

      setTransactions(transactions as any);

      console.log(transactions);

      setLoading(false);
    };

    fetchTransaction();
  }, [loading]);

  return (
    <div>
      <div className="text-xl font-semibold">Latest transactions:</div>
      <table className="mx-auto items-center mt-5 justify-center text-sm">
        <thead>
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
        </thead>
        <tbody>
          {transactions.map((tx: any) => (
            <tr key={tx.hash}>
              <td>
                <div className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  {tx.hash}
                </div>
              </td>
              <td>
                <div className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  {tx.from}
                </div>
              </td>
              <td>
                <div className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  {tx.to}
                </div>
              </td>
              <td>
                <div className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  {tx.value}
                </div>
              </td>
              <td>
                <div className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  {tx.gasPrice}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
