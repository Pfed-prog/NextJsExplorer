import { fetchMarketDebtDovu } from "@evmexplorer/climate";
import { useQuery } from "@tanstack/react-query";

export const useMarketDebt = () => {
  return useQuery({
    queryKey: ["MarketDebt"],
    queryFn: () => fetchMarketDebtDovu(),
  });
};
