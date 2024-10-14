export function parseTxTypes(txTypes: string[]) {
  if (txTypes.length === 0) {
    return {
      background: 'bg-[#e058]',
      placeholder: 'Empty',
    };
  }

  if (txTypes.length === 1) {
    if (txTypes.includes('coin_transfer')) {
      return {
        background: 'bg-[#e05875]',
        placeholder: '(coin transfer)',
      };
    }
    if (txTypes.includes('token_transfer')) {
      return {
        background: 'bg-[#cce058]',
        placeholder: '(token transfer)',
      };
    }
    if (txTypes.includes('contract_call')) {
      return {
        background: 'bg-[#5888e0]',
        placeholder: '(contract call)',
      };
    }

    return {
      background: 'bg-[#E88300]',
      placeholder: '(contract creation)',
    };
  }
  if (txTypes.length === 2) {
    if (
      txTypes.includes('contract_call') &&
      txTypes.includes('token_transfer')
    ) {
      return {
        background: 'bg-[#36be56]',
        placeholder: '(token transfer + contract call)',
      };
    }
    if (
      txTypes.includes('contract_call') &&
      txTypes.includes('coin_transfer')
    ) {
      return {
        background: 'bg-[#FDA737]',
        placeholder: '(coin transfer + contract call)',
      };
    }
    if (
      txTypes.includes('contract_creation') &&
      txTypes.includes('token_transfer')
    ) {
      return {
        background: 'bg-[#a9c400]',
        placeholder: '(contract creation + token transfer)',
      };
    }
  }
  if (txTypes.length === 3) {
    return {
      background: 'bg-[#FC05EC]',
      placeholder: '(coin transfer + token_transfer + contract call)',
    };
  }

  return {
    background: 'bg-[#e058]',
    placeholder: '???',
  };
}
