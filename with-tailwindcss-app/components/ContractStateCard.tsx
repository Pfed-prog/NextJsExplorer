import React from "react";
import { ContractValue } from "./ContractValue";
import { generate } from "shortid";

interface ContractStateCardProps {
  members: any[];
}

export const ContractStateCard = (props: ContractStateCardProps) => {
  const renderMemberItems = props.members.map((member: any, i: number) => (
    <tr key={generate()}>
      <th scope="row">
        {member.name} <small>({member.type})</small>
      </th>
      <td>
        <ContractValue value={member.value} />
      </td>
    </tr>
  ));

  let renderTable;
  if (props.members?.length) {
    renderTable = (
      <table className="table">
        <tbody>{renderMemberItems}</tbody>
      </table>
    );
  } else {
    renderTable = <small>No state set for this contract..</small>;
  }

  return (
    <>
      <div className="mb-12">
        <h4 className="text-capitalize font-bold">Current state</h4>
        {renderTable}
      </div>
    </>
  );
};
