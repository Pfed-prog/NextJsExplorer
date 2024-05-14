interface ContractValueProps {
  value: string | number | Array<string | number>;
}

export const ContractValue = (props: ContractValueProps) => {
  const contractValue = props.value.toString().substring(0, 80);
  return <div className="text-xs sm:text-sm p-1">{contractValue}</div>;
};
