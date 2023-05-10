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
  const [transaction, setTransaction] = useState<Transaction | undefined>(
    undefined
  );
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

      /* const blockNumber = await props.provider.getBlockNumber();
      const transactionLogs = await provider.getLogs({
        fromBlock: blockNumber - 1,
        toBlock: blockNumber,
      });

      const transactions = await Promise.all(
        transactionLogs.map(async (log: any) => {
          const transaction = await provider.getTransaction(
            log.transactionHash
          );
          console.log(transaction);
          return {
            hash: transaction.hash,
            from: transaction.from,
            to: transaction.to,
            value: ethers.utils.formatEther(transaction.value),
            gasPrice: ethers.utils.formatEther(transaction.gasPrice),
          };
        })
      );

      setTransactions(transactions as any); */

      setLoading(false);
    };

    fetchTransaction();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <p className="card-text">
      {transactionCount > 0 ? (
        <>
          {transactionCount ? (
            <small>transaction Count: {transactionCount}</small>
          ) : null}
        </>
      ) : (
        <small>No recent activity..</small>
      )}

      {/*transactions.map((tx: any) => (
        <tr key={tx.hash}>
          <td>{tx.hash}</td>
          <td>{tx.from}</td>
          <td>{tx.to}</td>
          <td>{tx.value}</td>
          <td>{tx.gasPrice}</td>
        </tr>
      ))*/}
    </p>
  );
};
