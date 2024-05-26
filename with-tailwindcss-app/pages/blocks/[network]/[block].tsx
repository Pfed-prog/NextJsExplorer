import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { Loading } from "@/components/Loading";
import { PageSEO } from "@/components/SEO";
import { useBlockTransactions } from "@/hooks/viem";
import { parseHash } from "@/utils/hashes";
import { getNetworkId, getNetworkName } from "@/utils/networks";

export const ContractPage: NextPage = () => {
  const router = useRouter();
  const { block, network } = router.query;

  const blockNumber: number = Number(block);

  const chainId = getNetworkId(network as string);
  const networkName = getNetworkName(chainId);

  const { data: blockData, isFetched } = useBlockTransactions(
    blockNumber,
    networkName
  );

  return (
    <div>
      <PageSEO />
      {isFetched ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 sm:pb-0">
          <div className="font-serif text-2xl sm:text-3xl mb-2">
            {Number(blockData?.number).toLocaleString("en-GB")} Block
          </div>

          <div className="font-serif mb-6 sm:mb-10">
            <p>
              {new Date(Number(blockData?.timestamp) * 1000).toLocaleString()}
            </p>
            Miner:{" "}
            <Link href={`/contracts/${networkName}/${blockData?.miner}`}>
              {parseHash(blockData?.miner)}
            </Link>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-2">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">Gas usage</dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                {Number(blockData?.gasUsed).toLocaleString("en-GB") ?? 0}
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base sm:text-lg text-gray-600">
                Transactions
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                {Number(blockData?.transactions.length).toLocaleString(
                  "en-GB"
                ) ?? 0}
              </dd>
            </div>
          </dl>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ContractPage;
