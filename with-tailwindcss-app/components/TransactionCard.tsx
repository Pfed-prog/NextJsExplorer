import React, { useState, useEffect } from "react";
import { getLatestTransaction } from "../services/ContractService";
import { Transaction } from "../types";
import { parseTimestampToMinutesAgo } from "../utils/time";
import { ETHERSCAN_TX_LINK } from "../constants";

interface ContractProps {
  address: string;
}

export const TransactionCard = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState<Transaction | undefined>(
    undefined
  );

  const fetchTransaction = async () => {
    const tx = await getLatestTransaction(props.address);

    setTransaction(tx);
    setLoading(false);
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  if (loading) {
    return null;
  }

  let renderTransactionCard;
  if (transaction) {
    renderTransactionCard = (
      <>
        Latest activity: {parseTimestampToMinutesAgo(transaction.timestamp)}
        <br />
        {transaction ? (
          <small>
            <button className="bg-blue-500 hover:bg-blue-700 text-white mt-2 font-bold py-2 px-4 rounded">
              <a
                href={`${ETHERSCAN_TX_LINK}${transaction.hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                View transaction
              </a>
            </button>
          </small>
        ) : null}
      </>
    );
  } else {
    renderTransactionCard = <small>No recent activity..</small>;
  }

  return <p className="card-text">{renderTransactionCard}</p>;
};
