import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSigner, useProvider } from "wagmi";

import { ContractDetails } from "components/ContractDetails";
import { Loading } from "components/Loading";
import { FullContractWrapper } from "types";
import { getContract } from "services/ContractService";

export const ContractPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const provider = useProvider();
  const { data: signer } = useSigner();

  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<FullContractWrapper>();

  useEffect(() => {
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
    <div>
      {contract && !loading ? (
        <ContractDetails contract={contract} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ContractPage;
