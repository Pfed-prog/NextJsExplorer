import React, { useState, useEffect } from "react";
import { Contract } from "ethers";

interface ContractProps {
  address: string;
  abi: Array<any>;
  provider: any;
}

export const TransactionCard = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [transactionCount, setTransactionCount] = useState<number>(0);
  const transactions = [] as any;

  const provider = props.provider;

  useEffect(() => {
    const fetchTransaction = async () => {
      const contract = new Contract(props.address, props.abi, provider);

      setTransactionCount(
        await contract.provider.getTransactionCount(props.address, "latest")
      );

      setLoading(false);
    };

    fetchTransaction();
  }, [loading]);

  return (
    <div>
      <div className="text-xl font-semibold">Latest transactions:</div>
      <div>Tx Count: {transactionCount}</div>
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
