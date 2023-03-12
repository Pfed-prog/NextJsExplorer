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
      <div className="table-responsive">
        <table className="table">
          <tbody>{renderMemberItems}</tbody>
        </table>
      </div>
    );
  } else {
    renderTable = <small>No state set for this contract..</small>;
  }

  return (
    <>
      <div className="card mb-12 ">
        <div className="card-body ">
          <h4 className="card-title text-capitalize font-bold">Current state</h4>
          {renderTable}
        </div>
      </div>
    </>
  );
};
