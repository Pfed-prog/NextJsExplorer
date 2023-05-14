import { useNetwork } from "wagmi";

import { Address } from "types";
import { getEtherscanLink } from "utils/styling";

interface NetworkAddressesProps {
  availableAddresses: Array<Address>;
}

export const NetworkAddresses = (props: NetworkAddressesProps) => {
  const { chain } = useNetwork();
  const renderListItems = props.availableAddresses.map((i) => (
    <li
      key={i.address}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span key={i.network} className="ml-1">
        {i.network}:{i.network === chain?.name ? "(current)" : null}
      </span>
      <div className="text-gray-700 mt-1 py-2 px-3 rounded">
        <a
          href={getEtherscanLink(i)}
          className="text-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          {i.address}
        </a>
      </div>
    </li>
  ));

  return (
    <div className="font-bold text-center">
      <h3>Other networks</h3>
      <ul className="mt-2 list-group text-gray-900">{renderListItems}</ul>
    </div>
  );
};
