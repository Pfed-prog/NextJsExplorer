import {
  fetchAddressCounters,
  fetchAddressTransactions,
  fetchInternalTransactionsBlockscout,
  fetchAddressInfo,
  fetchTransactionBlockscout,
  fetchTokenInfo,
  fetchBlockInfoBlockscout,
  fetchBlockTransactionsBlockscout,
  fetchTokenTransfersBlockscout,
} from "@evmexplorer/blockscout";
import { useQuery } from "@tanstack/react-query";

export const useAddressCounters = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["addressCounters", address, chainId],
    queryFn: () => fetchAddressCounters(address, chainId),
  });
};

export const useAddressTransactions = (
  address: string,
  parameters?: string,
  chainId?: number
) => {
  return useQuery({
    queryKey: ["addressTxs", address, chainId, parameters],
    queryFn: () => fetchAddressTransactions(address, parameters, chainId),
  });
};

export const useAddressInternalTransactions = (
  address: string,
  parameters?: string,
  chainId?: number
) => {
  return useQuery({
    queryKey: ["addressInternalTxs", address, chainId, parameters],
    queryFn: () =>
      fetchInternalTransactionsBlockscout(address, parameters, chainId),
  });
};

export const useAddressTokenTransfers = (
  address: string,
  parameters?: string,
  chainId?: number
) => {
  return useQuery({
    queryKey: ["addressTokenTransfers", address, chainId, parameters],
    queryFn: () => fetchTokenTransfersBlockscout(address, parameters, chainId),
  });
};

export const useAddressInfo = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["addressInfo", address, chainId],
    queryFn: () => fetchAddressInfo(address, chainId),
    retry: 3,
    retryDelay: 3000,
  });
};

export const useTokenInfo = (address: string, chainId?: number) => {
  return useQuery({
    queryKey: ["tokenInfo", address, chainId],
    queryFn: () => fetchTokenInfo(address, chainId),
  });
};

export const useBlockInfoBlockscout = (block: number, chainId?: number) => {
  return useQuery({
    queryKey: ["blockInfo", block, chainId],
    queryFn: () => fetchBlockInfoBlockscout(block, chainId),
    enabled: Boolean(block),
  });
};

export const useBlockTransactionsBlockscout = (
  block: number,
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
