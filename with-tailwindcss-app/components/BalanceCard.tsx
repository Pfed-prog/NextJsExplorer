import { useState, useEffect } from "react";
import { formatUnits } from "viem";
import { getBalance } from "@wagmi/core";

import { wagmiConfig } from "services/wagmiConfig";

interface ContractProps {
  address: `0x${string}`;
}

export const BalanceCard = (props: ContractProps) => {
  const [balance, setBalance] = useState<string>("0");
  const [tokens, setTokens] = useState([]);

  const fetchBalance = async () => {
    const balance = await getBalance(wagmiConfig, {
      address: props.address,
    });

    const balanceString = formatUnits(balance.value, balance.decimals);
    setBalance(balanceString);
  };

  const fetchTokens = async () => {
    const response = await fetch(
      `https://api.ethplorer.io/getAddressInfo/${props.address}?apiKey=freekey`
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
      <p>Balance: {balance} ETH</p>
      <p>{tokenBalance}</p>
    </div>
  );
};
