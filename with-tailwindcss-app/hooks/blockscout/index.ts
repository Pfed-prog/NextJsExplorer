import { useQuery } from "@tanstack/react-query";

import {
  fetchContractCounters,
  fetchAddressTransactions,
  fetchAddressInfo,
} from "./queries";

export const useContractCounters = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["addressCounters", address, chainId],
    queryFn: () => fetchContractCounters(address, chainId),
  });
};

export const useAddressTransactions = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["addressTxs", address, chainId],
    queryFn: () => fetchAddressTransactions(address, chainId),
  });
};

export const useAddressInfo = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["addressInfo", address, chainId],
    queryFn: () => fetchAddressInfo(address, chainId),
  });
};
