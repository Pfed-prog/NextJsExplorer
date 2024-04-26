import React from "react";
import { generate } from "shortid";

import { ContractMemberFunction } from "./ContractMemberFunction";
import { FullContractWrapper } from "types";

interface ContractMembersCardProps {
  contract: FullContractWrapper;
  type:
    | "constructor"
    | "views"
    | "payable"
    | "functions"
    | "events"
    | "fallback";
  members: any[];
}

export const ContractMembersCard = (props: ContractMembersCardProps) => {
  let renderMemberItems;
  if (props.members?.length) {
    renderMemberItems = props.members.map((member: any) => (
      <ContractMemberFunction
        key={generate()}
        contract={props.contract}
        member={member}
        type={props.type}
        collapsible={props.type !== "constructor" && props.type !== "events"}
      />
    ));
  } else {
    renderMemberItems = <small>No {props.type} for this contract..</small>;
  }

  return (
    <div className="font-bold text-center">
      <h4 className="py-2 text-2xl">{props.type}</h4>
      {renderMemberItems}
    </div>
  );
};
