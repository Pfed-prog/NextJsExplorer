import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ContractDetails } from "../../components/ContractDetails";

import { FullContractWrapper } from "../../types";
import { getContract } from "../../services/ContractService";
import { useSigner, useProvider } from "wagmi";

export const ContractPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const provider = useProvider();
  const { data: signer } = useSigner();

  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<FullContractWrapper>();

  useEffect(() => {
    setLoading(true);

    async function asyncEffect() {
      if (signer) {
        try {
          const contract = await getContract(page as string, provider, signer);
          setContract(contract);
        } catch (e) {
          console.log("contract not found", e);
        }
      } else {
        const contract = await getContract(page as string, provider);
        setContract(contract);
      }
      setLoading(false);
    }

    asyncEffect();
  }, [page, signer, provider]);

  return (
    <>
      {contract && !loading ? (
        <ContractDetails contract={contract} />
      ) : (
        <div className="h-screen bg-gradient-to-b from-sky-100 to-sky-900">
          <div className="flex justify-center items-center h-full">
            <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
              <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-64 w-64" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContractPage;
