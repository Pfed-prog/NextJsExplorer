import React, { useState, useEffect } from "react";
import { FullContractWrapper } from "../types";
import { BalanceCard } from "./BalanceCard";
import { TransactionCard } from "./TransactionCard";
import { Loading } from "./Loading";
import { ContractMembersCard } from "./ContractMembersCard";
import { ContractStateCard } from "./ContractStateCard";
import { NetworkAddresses } from "./NetworkAddresses";
import { utils } from "ethers";

interface ContractProps {
  contract: FullContractWrapper;
}

export const ContractDetails = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [contractState, setContractState] = useState(new Array<any>());
  const [functions, setFunctions] = useState({
    ctor: new Array<any>(),
    constants: new Array<any>(),
    functions: new Array<any>(),
    events: new Array<any>(),
    fallback: new Array<any>(),
  });

  const parseContract = async () => {
    const contract = props.contract.ethersContract;
    const ctor = contract.interface.fragments.filter(
      (member: any) => member.type === "constructor"
    );

    const constants = contract.interface.fragments.filter(
      (member: any) =>
        member.constant === true ||
        member.stateMutability === "view" ||
        member.stateMutability === "pure"
    );
    const functions = contract.interface.fragments.filter(
      (member: any) =>
        !member.constant &&
        member.stateMutability !== "view" &&
        member.stateMutability !== "pure" &&
        member.type !== "constructor" &&
        member.type !== "receive" &&
        member.type !== "event"
    );
    const events = contract.interface.fragments.filter(
      (member: any) => member.type === "event"
    );
    const fallback = contract.interface.fragments.filter(
      (member: any) => member.type === "receive"
    );

    const executableConstants = constants
      .filter((i: any) => i.inputs.length === 0)
      .map(async (i: any) => {
        let value, type;
        try {
          value = await contract.functions[i.name]();
          const functionFragment = i as utils.FunctionFragment;
          if (
            functionFragment &&
            functionFragment.outputs?.length &&
            functionFragment.outputs[0].type
          ) {
            type = functionFragment.outputs[0].type;
          }
        } catch (ex) {
          console.log("ERROR", ex);
          value = "[error retrieving value]";
        }
        return {
          name: i.name,
          value: value,
          type: type,
        };
      });

    const currentState = await Promise.all(executableConstants);

    setContractState(currentState);
    setFunctions({ ctor, constants, functions, events, fallback });
    setLoading(false);
  };

  useEffect(() => {
    parseContract();
  }, [props.contract]);

  const copyToClipboard = () => {
    const textElement = document.createElement(
      "textarea"
    ) as HTMLTextAreaElement;
    textElement.value = JSON.stringify(props.contract.abi);
    textElement.setAttribute("readonly", "");
    textElement.style.position = "absolute";
    textElement.style.left = "-9999px";
    document.body.appendChild(textElement);

    textElement.select();
    document.execCommand("copy");
    document.body.removeChild(textElement);
  };

  if (loading) {
    return <Loading />;
  }

  const renderAddresses =
    props.contract.availableAddresses.length > 1 ? (
      <NetworkAddresses
        availableAddresses={props.contract.availableAddresses}
      />
    ) : (
      <>No other Networks</>
    );

  return (
    <div className="bg-sky-100">
      <div className="text-xl items-center justify-center max-w-4xl mx-auto flex grid-cols-1 lg:max-w-4xl lg:gap-x-20 lg:grid-cols-2 py-2 px-6 font-semibold   rounded ">
        <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
          <dl className="flex flex-wrap ">
            <div className="flex-auto mt-3">
              <dt className="text-xl font-semibold leading-6 text-gray-900">
                <h2>{props.contract?.name}</h2>
              </dt>
            </div>
          </dl>
          <div className="mt-2 text-xl border-t border-gray-900/5 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
            <h3 className="text-sm sm:text-xl">{props.contract.address}</h3>
          </div>
          <div className="mt-2 text-xl border-t border-gray-900/5 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
            {renderAddresses}
          </div>
        </div>
      </div>
      <div className="text-xl items-center justify-center max-w-4xl mx-auto flex grid-cols-1 lg:max-w-4xl lg:gap-x-20 lg:grid-cols-2 py-2 px-6 font-semibold   rounded mt-2">
        <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
          <dl className="flex flex-wrap ">
            <div className="flex-auto mt-3">
              <dt className="text-xl font-semibold leading-6 text-gray-900">
                <BalanceCard address={props.contract.address} />
              </dt>
            </div>
          </dl>
          <div className="mt-2 text-xl border-t border-gray-900/5 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
            <TransactionCard address={props.contract.address} />
          </div>
        </div>
      </div>
      <div className="mt-2 font-bold text-center">
        <button
          type="button"
          onClick={() => copyToClipboard()}
          className="rounded-full bg-white px-2.5 py-1 text-info font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300"
        >
          Copy ABI to clipboard
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block  py-2  sm:px-6 lg:px-8">
              <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                <ContractStateCard members={contractState} />
              </td>
            </div>
          </div>
        </div>
      </div>
      <table className="table-auto w-full">
        <tbody className="text-gray-900 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-sky-200">
            <td className="py-2  px-3">
              <ContractMembersCard
                type="constructor"
                contract={props.contract}
                members={functions.ctor}
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-sky-200">
            <td className="py-2 px-3">
              <ContractMembersCard
                type="views"
                contract={props.contract}
                members={functions.constants.filter(
                  (i) => i.inputs?.length > 0
                )}
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-sky-200">
            <td className="py-2 px-3">
              {" "}
              <ContractMembersCard
                type="functions"
                contract={props.contract}
                members={functions.functions.filter(
                  (i) => !i.payable && i.stateMutability !== "payable"
                )}
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-sky-200">
            <td className="py-2 px-3">
              <ContractMembersCard
                type="payable"
                contract={props.contract}
                members={functions.functions.filter(
                  (i) => i.payable || i.stateMutability === "payable"
                )}
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-sky-200">
            <td className="py-2 px-3">
              <ContractMembersCard
                type="events"
                contract={props.contract}
                members={functions.events}
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-sky-200">
            <td className="py-2 px-3">
              <ContractMembersCard
                type="fallback"
                contract={props.contract}
                members={functions.fallback}
              />
            </td>
          </tr>
        </tbody>
        <div className="mt-10"></div>
      </table>
    </div>
  );
};
