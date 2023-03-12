import React from "react";
import { generate } from "shortid";
import { ContractValue } from "./ContractValue";

interface ContractStateCardProps {
  members: any[];
}

interface Member {
  type: string;
  value: string;
  name: string;
}

export const ContractStateCard = (props: ContractStateCardProps) => {
  const renderMemberItems = props.members.map((member: Member) => (
    <div key={generate()}>
      {member.name} <small>({member.type}): </small>
      <ContractValue value={member.value} />
    </div>
  ));

  return (
    <div className="mb-12 text-center m-auto">
      <h4 className="text-capitalize font-bold text-center">Current state</h4>
      {props.members?.length ? (
        renderMemberItems
      ) : (
        <small>No state set for this contract..</small>
      )}
    </div>
  );
};
