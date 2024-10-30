import {
  fetchContractCounters,
  fetchAddressTransactions,
  fetchAddressInfo,
  fetchTransactionBlockscout,
  fetchTokenInfo,
  fetchBlockInfoBlockscout,
  fetchBlockTransactionsBlockscout,
} from "@evmexplorer/blockscout";
import { useQuery } from "@tanstack/react-query";

export const useContractCounters = (address: string, chainId: number) => {
  return useQuery({
    queryKey: ["addressCounters", address, chainId],
    queryFn: () => fetchContractCounters(address, chainId),
  });
};

export const useAddressTransactions = (address: string, chainId: number) => {
  return useQuery({
    queryKey: ["addressTxs", address, chainId],
    queryFn: () => fetchAddressTransactions(address, chainId),
  });
};

export const useAddressInfo = (address: string, chainId: number) => {
  return useQuery({
    queryKey: ["addressInfo", address, chainId],
    queryFn: () => fetchAddressInfo(address, chainId),
    retry: 3,
    retryDelay: 3000,
  });
};

export const useTokenInfo = (address: string, chainId: number) => {
  return useQuery({
    queryKey: ["tokenInfo", address, chainId],
    queryFn: () => fetchTokenInfo(address, chainId),
  });
};

export const useBlockInfoBlockscout = (chainId: number, block?: number) => {
  return useQuery({
    queryKey: ["blockInfo", chainId, block],
    queryFn: () => fetchBlockInfoBlockscout(chainId, block),
    enabled: Boolean(block),
  });
};

export const useBlockTransactionsBlockscout = (
  chainId: number,
  block?: number
) => {
  return useQuery({
    queryKey: ["blockTransactions", chainId, block],
    queryFn: () => fetchBlockTransactionsBlockscout(chainId, block),
    enabled: Boolean(block),
  });
};

export const useTransactionBlockscout = (hash: string, chainId?: number) => {
  return useQuery({
    queryKey: ["transaction", hash, chainId],
    queryFn: () => fetchTransactionBlockscout(hash, chainId),
  });
};
