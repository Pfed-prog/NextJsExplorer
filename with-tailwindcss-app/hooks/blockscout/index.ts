import { useQuery } from "@tanstack/react-query";

import {
  fetchContractCounters,
  fetchAddressTransactions,
  fetchAddressInfo,
  fetchTransactionBlockscout,
  fetchTransactionBlockscoutConditional,
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

export const useTransactionBlockscout = (hash: string, chainId?: number) => {
  return useQuery({
    queryKey: ["transaction", hash, chainId],
    queryFn: () => fetchTransactionBlockscout(hash, chainId),
  });
};

export const useTransactionBlockscoutConditional = (
  hash: string | undefined,
  chainId?: number
) => {
  return useQuery({
    queryKey: ["transaction", hash, chainId],
    queryFn: () => fetchTransactionBlockscoutConditional(hash, chainId),
    enabled: Boolean(hash),
  });
};
