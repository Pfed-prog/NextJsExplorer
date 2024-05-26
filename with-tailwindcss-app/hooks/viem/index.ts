import { useQuery } from "@tanstack/react-query";

import { fetchBlockTransactions, fetchTransaction } from "./queries";

export const useBlockTransactions = (block: number, network: string) => {
  return useQuery({
    queryKey: ["blockTransactions", block, network],
    queryFn: () => fetchBlockTransactions(block, network),
  });
};

export const useTransaction = (hash: `0x${string}`, network: string) => {
  return useQuery({
    queryKey: ["transaction", hash, network],
    queryFn: () => fetchTransaction(hash, network),
  });
};
