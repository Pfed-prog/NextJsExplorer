import { formatEther, formatUnits } from "viem";

export function parseNumber(
  variable: string | bigint | number | undefined
): string {
  if (variable) return Number(variable).toLocaleString("en-GB");
  return "0";
}

export function deserializeWeiToGwei(serializedWei: string): number {
  const gweiNumber: number = Number(formatEther(BigInt(serializedWei), "gwei"));
  return gweiNumber;
}

export function parseWei(serializedWei: string): string {
  const gweiNumber: number = deserializeWeiToGwei(serializedWei);
  const parsedGweiNumber: string = gweiNumber.toFixed(2);
  return parsedGweiNumber;
}

export function deserializeWeiToEther(serializedWei: string): number {
  const etherNumber: number = Number(formatEther(BigInt(serializedWei)));
  return etherNumber;
}

export function parseWithER(
  serializedWei: string,
  exchangeRate: string
): string {
  const etherNumber = deserializeWeiToEther(serializedWei);
  const parsedERString = Number(etherNumber * Number(exchangeRate)).toFixed(2);
  const formattedString = parseNumber(parsedERString);
  return formattedString;
}

export function parseToken(
  tokenValue: string | undefined,
  tokenDecimals: string | undefined | null
): string {
  if (tokenValue && tokenDecimals) {
    const tokenDecimalsformattedTokenValue = formatUnits(
      BigInt(tokenValue),
      Number(tokenDecimals)
    );
    const parsedTokenString = Number(tokenDecimalsformattedTokenValue).toFixed(
      2
    );
    const formattedTokenValue = parseNumber(parsedTokenString);
    return formattedTokenValue;
  }
  if (tokenValue) {
    return tokenValue;
  }
  return "NaN";
}

export function parseTokenWithER(
  tokenValue: string,
  tokenDecimals: string,
  exchangeRate: string
): string {
  const formattedTokenValue: string = formatUnits(
    BigInt(tokenValue),
    Number(tokenDecimals)
  );
  const parsedERString: string = (
    Number(formattedTokenValue) * Number(exchangeRate)
  ).toFixed(2);
  const formattedString: string = parseNumber(parsedERString);
  return formattedString;
}
