import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { Loading } from "@/components/Loading";
import { PageSEO } from "@/components/SEO";
import { useTransaction } from "@/hooks/viem";
import { parseHash } from "@/utils/hashes";
import { getNetworkId, getNetworkName } from "@/utils/networks";

export const ContractPage: NextPage = () => {
  const router = useRouter();
  const { hash, network } = router.query;

  const validatedHash = String(hash) as `0x${string}`;

  const chainId = getNetworkId(network as string);
  const networkName = getNetworkName(chainId);

  const { data: hashData, isFetched } = useTransaction(
    validatedHash,
    networkName
  );

  return (
    <div>
      <PageSEO />
      {isFetched ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 sm:pb-0">
          <div className="font-serif text-2xl mt-2 sm:text-3xl mb-2">
            {parseHash(hashData?.hash)}
          </div>

          <div className="font-serif mb-6 sm:mb-10">
            <p>Gas: {Number(hashData?.gas)}</p>
            <p>
              Block:{" "}
              <Link href={`/blocks/${networkName}/${hashData?.blockNumber}`}>
                {Number(hashData?.blockNumber)}
              </Link>
            </p>
            <p>Gas Price: {Number(hashData?.gasPrice)}</p>
            <p>
              From:{" "}
              <Link
                href={`/contracts/${network}/${hashData?.from ?? "0x0000000000000000000000000000000000000000"}`}
              >
                {parseHash(hashData?.from)}
              </Link>
            </p>
            <p>
              To:{" "}
              <Link
                href={`/contracts/${network}/${hashData?.to ?? "0x0000000000000000000000000000000000000000"}`}
              >
                {parseHash(
                  hashData?.to ?? "0x0000000000000000000000000000000000000000"
                )}
              </Link>
            </p>
            <p>type: {hashData?.type}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ContractPage;
