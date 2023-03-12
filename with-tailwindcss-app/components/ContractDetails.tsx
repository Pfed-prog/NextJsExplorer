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
    <div className="bg-gradient-to-b from-sky-100 to-sky-400">
      <div className="text-xl max-w-4xl mx-auto grid grid-cols-1 lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2 bg-[#92cef6] rounded py-4 px-3.5 font-semibold text-[#f4fafe] shadow-sm">
        <h2>{props.contract?.name}</h2>
        <h3 className="small text-muted">{props.contract.address}</h3>
      </div>
      <div className="text-xl max-w-4xl mx-auto grid grid-cols-1 lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2 bg-[#92cef6] py-4 px-3.5 font-semibold text-[#f4fafe] shadow-sm rounded mt-4">
        {renderAddresses}
      </div>
      <div className="text-xl bg-[#92cef6] max-w-4xl mx-auto grid grid-cols-1 lg:max-w-4xl lg:gap-x-20 lg:grid-cols-2 py-2 px-3.5 font-semibold text-[#f4fafe] shadow-sm rounded mt-4">
        <BalanceCard address={props.contract.address} />
        <TransactionCard address={props.contract.address} />
      </div>

      <div className="mt-3 font-bold text-center">
        <a
          href="#copy"
          className="small text-info"
          onClick={() => copyToClipboard()}
        >
          Copy ABI to clipboard
        </a>
      </div>

      <div className="divide-y divide-gray-500 mt-7 text-xl text-center pl-15 max-w-4xl mx-auto grid grid-cols-1 lg:gap-x-20">
        <ContractStateCard members={contractState} />
        <ContractMembersCard
          type="constructor"
          contract={props.contract}
          members={functions.ctor}
        />
        <ContractMembersCard
          type="views"
          contract={props.contract}
          members={functions.constants.filter((i) => i.inputs?.length > 0)}
        />
        <ContractMembersCard
          type="functions"
          contract={props.contract}
          members={functions.functions.filter(
            (i) => !i.payable && i.stateMutability !== "payable"
          )}
        />
        <ContractMembersCard
          type="payable"
          contract={props.contract}
          members={functions.functions.filter(
            (i) => i.payable || i.stateMutability === "payable"
          )}
        />
        <ContractMembersCard
          type="events"
          contract={props.contract}
          members={functions.events}
        />
        <ContractMembersCard
          type="fallback"
          contract={props.contract}
          members={functions.fallback}
        />
      </div>
      <div className="mt-10">ㅤ</div>
    </div>
  );
};
