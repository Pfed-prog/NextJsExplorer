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
    <div key={member.name}>
      <div className="text-xs sm:text-sm mt-1 font-bold text-center">
        {member.name} <span>({member.type}): </span>
      </div>
      <ContractValue value={member.value} />
    </div>
  ));

  return (
    <div className="text-center mx-auto mt-8 bg-sky-200 rounded">
      <h4 className="text-2xl mb-4 font-bold text-center">Current state</h4>

      {props.members?.length ? (
        renderMemberItems
      ) : (
        <div>No state set for this contract..</div>
      )}
    </div>
  );
};
