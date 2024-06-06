import Link from "next/link";

import { TransactionAddressData } from "@/hooks/blockscout/queries";
import { parseHash } from "@/utils/hashes";
import { parseCamelCase } from "@/utils/parseNames";

interface ContractProps {
  transactionAddressData: TransactionAddressData | null;
  network: string;
  isSender: boolean;
}

function getColor(isSender: boolean) {
  if (isSender) return "bg-[#5a628d] text-gray-300 hover:text-white";
  return "bg-[#bebbbb] text-[#5a628d] hover:text-gray-800";
}

export const TransactionName = (props: ContractProps) => {
  const network = props.network;
  const transactionAddressData = props.transactionAddressData;
  const isSender = props.isSender;
  return (
    <p className="mt-2">
      {transactionAddressData && (
        <div>
          {transactionAddressData.ens_domain_name ? (
            <Link
              href={`/contracts/${network}/${transactionAddressData.hash}`}
              className={`break-all text-sm ${getColor(isSender)} font-medium px-1 sm:px-2.5 py-0.5 rounded`}
            >
              {transactionAddressData.ens_domain_name}
            </Link>
          ) : (
            <Link
              href={`/contracts/${network}/${transactionAddressData?.hash ?? "0x0000000000000000000000000000000000000000"}`}
              className={`text-sm ${getColor(isSender)} font-medium px-1 sm:px-2.5 py-0.5 rounded`}
            >
              {parseCamelCase(transactionAddressData.implementation_name) ??
                parseCamelCase(transactionAddressData.name) ??
                parseHash(transactionAddressData.hash)}
            </Link>
          )}
        </div>
      )}
    </p>
  );
};
