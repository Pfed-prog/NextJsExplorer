import { useQuery } from "@tanstack/react-query";

import { fetchBlockTransactions, fetchTransaction } from "./queries";

export const useBlockTransactions = (network: string, block?: number) => {
  return useQuery({
    queryKey: ["blockTransactions", network, block],
    queryFn: () => fetchBlockTransactions(network, block),
    enabled: Boolean(block),
  });
};

export const useTransaction = (hash: `0x${string}`, network: string) => {
  return useQuery({
    queryKey: ["transaction", hash, network],
    queryFn: () => fetchTransaction(hash, network),
  });
};
