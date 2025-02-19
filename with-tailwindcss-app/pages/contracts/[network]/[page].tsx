import type { NextPage } from "next";
import { getNetworkId } from "@evmexplorer/utility";
import { useRouter } from "next/router";

import { BalanceCard } from "@/components/BalanceCard";
import { Loading } from "@/components/Loading";
import { PageSEO } from "@/components/SEO";
import { TransactionCard } from "@/components/TransactionCard";
import { useAddressInfo } from "@/hooks/blockscout";

export const ContractPage: NextPage = () => {
  const router = useRouter();
  const { network, page } = router.query;
  const networkQuery: string = String(network);
  const path: string = "/contracts/" + networkQuery + "/" + String(page);
  const chainId: number = getNetworkId(networkQuery) ?? 1;

  const address: string = page as `0x${string}`;

  const { data: addressInfo, isFetched: isFetchedInfo } = useAddressInfo(
    address,
    chainId
  );

  return (
    <div>
      {network && page ? <PageSEO path={path} /> : <PageSEO />}

      {!isFetchedInfo && <Loading />}

      {isFetchedInfo && !addressInfo && (
        <div className="pl-4 pr-4 fade-in-1s transition-all outline outline-offset-1 outline-4 hover:outline-2 outline-[#14892e] hover:outline-[#95ed81] mt-2 items-center justify-center min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[650px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto font-semibold rounded-lg bg-gray-50 pb-2 pt-2">
          <h1 className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-cyan-800">
            {address}
          </h1>
        </div>
      )}

      {isFetchedInfo && addressInfo && (
        <BalanceCard
          address={address}
          addressInfo={addressInfo}
          chainId={chainId}
        />
      )}

      {addressInfo && (
        <div className="sm:px-6 lg:px-8 divide-y divide-gray-300 fade-in-text">
          <TransactionCard address={address} chainId={chainId} />
        </div>
      )}
    </div>
  );
};

export default ContractPage;
