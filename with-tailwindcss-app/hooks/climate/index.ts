import { fetchAddressDovu, fetchMarketDebtDovu } from "@evmexplorer/climate";
import { useQuery } from "@tanstack/react-query";

export const useMarketDebt = () => {
  return useQuery({
    queryKey: ["MarketDebt"],
    queryFn: () => fetchMarketDebtDovu(),
  });
};

export const useAddressDovu = (address: string) => {
  return useQuery({
    queryKey: ["AddressDovu", address],
    queryFn: () => fetchAddressDovu(address),
  });
};