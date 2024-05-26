import { useQuery } from "@tanstack/react-query";

import { fetchBlockTransactions } from "./queries";

export const useBlockTransactions = (block: number, network: string) => {
  return useQuery({
    queryKey: ["blockTransactions", block, network],
    queryFn: () => fetchBlockTransactions(block, network),
  });
};
