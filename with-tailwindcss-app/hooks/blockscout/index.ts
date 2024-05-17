import { useQuery } from "@tanstack/react-query";

import { fetchContractCounters, fetchAddressTransactions } from "./queries";

export const useContractCounters = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["addressCounters", address, chainId],
    queryFn: () => fetchContractCounters(address),
  });
};

export const useAddressTransactions = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["addressTxs", address, chainId],
    queryFn: () => fetchAddressTransactions(address),
  });
};
