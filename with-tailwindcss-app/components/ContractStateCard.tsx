import React from "react";
import { generate } from "shortid";
import { ContractValue } from "./ContractValue";
import { InformationCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";

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
      <div className="text-sm mt-1 font-bold text-center">
        {member.name} <small>({member.type}): </small>
      </div>
      <ContractValue value={member.value} />
    </div>
  ));

  return (
    <div className="mb-12 text-center mx-auto">
      <h4 className="text-2xl mb-4 font-bold text-center">Current state</h4>

      {props.members?.length ? (
        renderMemberItems
      ) : (
        <small>No state set for this contract..</small>
      )}
    </div>
  );
};
