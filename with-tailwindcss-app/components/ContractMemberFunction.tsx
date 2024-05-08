import { useState } from "react";

import { ContractMemberForm } from "./ContractMemberForm";
import { FullContractWrapper } from "@/types/index";

interface ContractMemberFunctionProps {
  collapsible?: boolean;
  contract: FullContractWrapper;
  type:
    | "constructor"
    | "views"
    | "payable"
    | "functions"
    | "events"
    | "fallback";
  member: any;
}

export const ContractMemberFunction = (props: ContractMemberFunctionProps) => {
  const [show, setShow] = useState(false);

  let collapsablePanel = <div></div>;
  if (show) {
    collapsablePanel = (
      <ContractMemberForm
        contract={props.contract}
        name={props.member.name}
        inputs={props.member.inputs}
        readOnly={props.type === "views"}
        payable={props.type === "payable"}
      />
    );
  }

  let renderInputs = <div></div>;
  if (props.member.inputs) {
    renderInputs = props.member.inputs.map((input: any) => (
      <small key={input.name} className="mr-1">
        {input.name} ({input.type})
      </small>
    ));
  }

  if (props.collapsible) {
    return (
      <div className="p-1.5">
        <div onClick={() => setShow(true)} onKeyDown={() => setShow(true)}>
          {props.member.name ?? props.member.type} {renderInputs}
        </div>
        {collapsablePanel}
      </div>
    );
  }

  return (
    <div className="p-1.5">
      {props.member.name ?? props.member.type} {renderInputs}
    </div>
  );
};
