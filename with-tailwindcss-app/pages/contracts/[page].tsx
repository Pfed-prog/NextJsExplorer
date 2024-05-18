import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BalanceCard } from "@/components/BalanceCard";
import { Loading } from "@/components/Loading";
import { PageSEO } from "@/components/SEO";
import { TransactionCard } from "@/components/TransactionCard";

export const ContractPage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const contractAddress = page as `0x${string}`;

  const [mounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div>
      <PageSEO />

      {!mounted && <Loading />}

      {/* <div className="text-xl items-center justify-center max-w-xs mx-auto flex font-semibold mt-2 rounded-lg bg-gray-50 shadow p-4">
        <BalanceCard address={contractAddress} />
      </div> */}

      <div className="mt-8 flow-root sm:px-6 lg:px-8 divide-y divide-gray-300">
        <TransactionCard address={contractAddress} />
      </div>
    </div>
  );
};

export default ContractPage;
