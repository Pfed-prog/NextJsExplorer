import React, { useState, useEffect } from "react";
import { utils } from "ethers";
import { useProvider } from "wagmi";

interface ContractProps {
  address: string;
}

export const BalanceCard = (props: ContractProps) => {
  const [balance, setBalance] = useState(0);
  const [tokens, setTokens] = useState([]);
  const provider = useProvider();

  const fetchBalance = async () => {
    const balance = await provider.getBalance(props.address);

    setBalance(Number(utils.formatEther(balance)));
  };

  const fetchTokens = async () => {
    try {
      const response = await fetch(
        `https://api.ethplorer.io/getAddressInfo/${utils.getAddress(
          props.address
        )}?apiKey=freekey`
      );

      const body = await response.json();
      if (body.tokens) {
        const tokens = body.tokens.map((token: any) => {
          return {
            address: token.tokenInfo.address,
            name: token.tokenInfo.name ?? token.tokenInfo.address,
            symbol: token.tokenInfo.symbol ?? token.tokenInfo.address,
            decimals: parseFloat(token.tokenInfo.decimals),
            balance: parseFloat(token.balance || 0),
          };
        });

        setTokens(tokens);
      }
    } catch {
      console.log("Unable get token balance..");
    }
  };

  useEffect(() => {
    fetchBalance();
    fetchTokens();
  }, []);

  let tokenBalance = null;
  if (tokens?.length) {
    tokenBalance = <span>Tokens: {tokens.length}</span>;
  }
  return (
    <div className="text-center">
      <p>Balance: {Number(balance) ?? 0} ETH</p>
      <p>{tokenBalance}</p>
    </div>
  );
};
