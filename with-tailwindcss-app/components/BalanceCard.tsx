import { utils } from "ethers";
import { useState, useEffect } from "react";
import { useProvider } from "wagmi";

interface ContractProps {
  address: string;
}

export const BalanceCard = (props: ContractProps) => {
  const [balance, setBalance] = useState<number>(0);
  const [tokens, setTokens] = useState([]);
  const provider = useProvider();

  const fetchBalance = async () => {
    const balance = await provider.getBalance(props.address);
    setBalance(Number(utils.formatEther(balance)));
  };

  const fetchTokens = async () => {
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
