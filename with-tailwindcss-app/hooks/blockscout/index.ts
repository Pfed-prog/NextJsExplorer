import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import {
  fetchContractCounters,
  fetchAddressTransactions,
  fetchAddressInfo,
  fetchTransactionBlockscout,
  fetchTransactionBlockscoutConditional,
  fetchTransactionsBlockscoutConditional,
  fetchTokenInfo,
  fetchBlockInfoBlockscout,
  fetchBlockTransactionsBlockscout,
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

export const useTokenInfo = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["tokenInfo", address, chainId],
    queryFn: () => fetchTokenInfo(address, chainId),
  });
};

export const useBlockInfoBlockscout = (
  block: number | null,
  chainId?: number
) => {
  return useQuery({
    queryKey: ["blockInfo", block, chainId],
    queryFn: () => fetchBlockInfoBlockscout(block, chainId),
    enabled: Boolean(block),
  });
};

export const useBlockTransactionsBlockscout = (
  block: number | null,
  chainId?: number
) => {
  return useQuery({
    queryKey: ["blockTransactions", block, chainId],
    queryFn: () => fetchBlockTransactionsBlockscout(block, chainId),
    enabled: Boolean(block),
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

export const useTransactionsBlockscoutConditional = (
  transactions: any,
  block: number,
  chainId?: number
) => {
  return useInfiniteQuery({
    queryKey: ["transactionsBlock", block],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const data = await fetchTransactionsBlockscoutConditional(
        transactions,
        { pageParam },
        chainId
      );
      return data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: any, allPages: any) => {
      if (allPages.length < transactions.length) return allPages.length;
    },
    enabled: !!transactions,
  });
};
