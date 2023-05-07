import { Address } from "../types";
import { getEtherscanLink } from "../utils/styling";

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
        <button className="bg-blue-500 hover:bg-blue-700 text-white mt-1  py-2 px-3 rounded">
          <a
            href={getEtherscanLink(i)}
            className="text-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i.address}
          </a>
        </button>{" "}
        {i.network === chain?.name ? "(current)" : ""}
      </div>
      <span key={i.network} className="ml-1">
        {i.network}
      </span>
    </li>
  ));

  return (
    <>
      <div className=" font-bold text-center">
        <h3>Other networks</h3>
      </div>
      <ul className="mt-2 list-group  text-gray-900">{renderListItems}</ul>
    </>
  );
};
