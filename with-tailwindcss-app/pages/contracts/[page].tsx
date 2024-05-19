import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import { BalanceCard } from "@/components/BalanceCard";
import { PageSEO } from "@/components/SEO";
import { TransactionCard } from "@/components/TransactionCard";
import { useAddressInfo } from "@/hooks/blockscout";
import { Loading } from "@/components/Loading";

export const ContractPage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const contractAddress = page as `0x${string}`;

  const { chain } = useAccount();
  const chainId = chain?.id ?? 1;

  const [mounted, setMounted] = useState<boolean>(false);

  const { data: addressInfo, isFetched: isFetchedInfo } = useAddressInfo(
    contractAddress,
    chainId
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <PageSEO />

      {!mounted && <Loading />}

      {isFetchedInfo && addressInfo && (
        <BalanceCard address={contractAddress} addressInfo={addressInfo} />
      )}

      {addressInfo && (
        <div className="mt-8 flow-root sm:px-6 lg:px-8 divide-y divide-gray-300">
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
