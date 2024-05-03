import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

import { ContractDetails } from "components/ContractDetails";
import { Loading } from "components/Loading";
import { FullContractWrapper } from "types";
import { getContract } from "services/ContractService";

import { BalanceCard } from "../../components/BalanceCard";
import { TransactionCard } from "../../components/TransactionCard";
import { useEthersSigner, useEthersProvider } from "../../services/ethers";

export const ContractPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const contractAddress = page as `0x${string}`;
  const { chain } = useAccount();

  const signer = useEthersSigner();
  const provider = useEthersProvider();

  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<FullContractWrapper>();

  useEffect(() => {
    async function asyncEffect() {
      try {
        const contract = await getContract(
          contractAddress,
          chain?.id,
          signer,
          provider
        );
        setContract(contract);
      } catch (e) {
        console.log("contract not found", e);
      }
      setLoading(false);
    }
    asyncEffect();
  }, [page]);

  return (
    <div>
      {contract && <ContractDetails contract={contract} />}
      {loading && <Loading />}
      <div className="text-xl items-center justify-center max-w-xs mx-auto flex font-semibold mt-2 rounded-lg bg-gray-50 shadow p-4">
        <BalanceCard address={contractAddress} />
      </div>
      <div className="mt-8 flow-root sm:px-6 lg:px-8 divide-y divide-gray-300">
        <TransactionCard address={contractAddress} />
      </div>
    </div>
  );
};

export default ContractPage;
