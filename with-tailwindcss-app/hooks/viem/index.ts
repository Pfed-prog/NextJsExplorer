import type { ChainType } from "@evmexplorer/utility";
import { useQuery } from "@tanstack/react-query";

import { fetchBlockTransactions, fetchTransaction } from "./queries";

export const useBlockTransactions = (network: ChainType, block?: number) => {
  return useQuery({
    queryKey: ["blockTransactions", network, block],
    queryFn: () => fetchBlockTransactions(network, block),
    enabled: Boolean(block),
  });
};

export const useTransaction = (hash: `0x${string}`, network: ChainType) => {
  return useQuery({
    queryKey: ["transaction", hash, network],
    queryFn: () => fetchTransaction(hash, network),
  });
};
