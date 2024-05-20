import { useAccount } from "wagmi";

import { ContractData } from "@/types/index";

interface NetworkAddressesProps {
  availableAddresses: Array<ContractData>;
}

export const NetworkAddresses = (props: NetworkAddressesProps) => {
  const { chain } = useAccount();
  const renderListItems = props.availableAddresses.map((i) => (
    <li
      key={i.address}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span key={i.network} className="ml-1">
        {i.network}:{i.network === chain?.name ? "(current)" : null}
      </span>
      <div className="text-gray-700 mt-1 py-2 px-3 rounded">
        <a className="text-info" target="_blank">
          {i.address}
        </a>
      </div>
    </li>
  ));

  return (
    <div className="font-bold text-center">
      <h3>Networks</h3>
      <ul className="mt-2 list-group text-gray-900">{renderListItems}</ul>
    </div>
  );
};
