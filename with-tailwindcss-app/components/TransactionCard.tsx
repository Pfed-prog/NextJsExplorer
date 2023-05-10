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
  const [transactionCount, setTransactionCount] = useState<number>(0);

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
          Latest activity:{" "}
          {/*parseTimestampToMinutesAgo(transaction.timestamp)*/}
          <br />
          {transactionCount ? (
            <small>transaction Count: {transactionCount}</small>
          ) : null}
        </>
      ) : (
        <small>No recent activity..</small>
      )}
    </p>
  );
};
