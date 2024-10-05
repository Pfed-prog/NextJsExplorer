import type { NextPage } from "next";
import { useRouter } from "next/router";

import { BalanceCard } from "@/components/BalanceCard";
import { Loading } from "@/components/Loading";
import { PageSEO } from "@/components/SEO";
import { TransactionCard } from "@/components/TransactionCard";
import { useAddressInfo } from "@/hooks/blockscout";
import { getNetworkId } from "@/utils/networks";

export const ContractPage: NextPage = () => {
  const router = useRouter();
  const { network, page } = router.query;
  const path = "/contracts/" + String(network) + "/" + String(page);

  const chainId = getNetworkId(network as string);
  const contractAddress = page as `0x${string}`;

  const { data: addressInfo, isFetched: isFetchedInfo } = useAddressInfo(
    contractAddress,
    chainId
  );

  return (
    <div>
      {network && page ? <PageSEO path={path} /> : <PageSEO />}

      {!isFetchedInfo && <Loading />}

      {isFetchedInfo && addressInfo && (
        <BalanceCard addressInfo={addressInfo} chainId={chainId} />
      )}

      {addressInfo && (
        <div className="sm:px-6 lg:px-8 divide-y divide-gray-300 fade-in-text">
          <TransactionCard
            address={contractAddress}
            addressInfo={addressInfo}
            chainId={chainId}
          />
        </div>
      )}
    </div>
  );
};

export default ContractPage;
