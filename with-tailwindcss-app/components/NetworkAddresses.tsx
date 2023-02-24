import { Address } from "../types";
import { getNetworkColor, getEtherscanLink } from "../utils/styling";

import { useNetwork } from "wagmi";

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
      <div>
        <a
          href={getEtherscanLink(i)}
          className="text-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          {i.address}
        </a>{" "}
        {i.network === chain?.name ? "(current)" : ""}
      </div>
      <span
        key={i.network}
        className={`badge badge-${getNetworkColor(i.network)} ml-1`}
      >
        {i.network}
      </span>
    </li>
  ));

  return (
    <>
      <h3>Other networks</h3>
      <ul className="list-group">{renderListItems}</ul>
    </>
  );
};
