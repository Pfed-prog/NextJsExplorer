import { formatEther, formatUnits } from "viem";

export function parseNumber(variable: string | undefined): string {
  if (variable) return Number(variable).toLocaleString("en-GB");
  return "0";
}

export function deserializeWeiToGwei(serializedWei: string): number {
  const gweiNumber = Number(formatEther(BigInt(serializedWei), "gwei"));
  return gweiNumber;
}

export function parseWei(serializedWei: string): string {
  const gweiNumber = deserializeWeiToGwei(serializedWei);
  const parsedGweiNumber = gweiNumber.toFixed(2);
  return parsedGweiNumber;
}

export function deserializeWeiToEther(serializedWei: string): number {
  const etherNumber = Number(formatEther(BigInt(serializedWei)));
  return etherNumber;
}

export function parseWithER(
  serializedWei: string,
  exchangeRate: string
): string {
  const etherNumber = deserializeWeiToEther(serializedWei);
  const parsedERString = Number(etherNumber * Number(exchangeRate)).toFixed(2);
  const formattedString = Number(parsedERString).toLocaleString("en-GB");
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
    const formattedTokenValue =
      Number(parsedTokenString).toLocaleString("en-GB");
    return formattedTokenValue;
  }
  if (tokenValue) {
    return tokenValue;
  }
  return "NaN";
}

export function parseTokenWithER(
  tokenValue: string | undefined,
  tokenDecimals: string | undefined | null,
  exchangeRate: string | null
): string {
  if (tokenValue && tokenDecimals && exchangeRate) {
    const formattedTokenValue = formatUnits(
      BigInt(tokenValue),
      Number(tokenDecimals)
    );
    const parsedERNumber = Number(
      (Number(formattedTokenValue) * Number(exchangeRate)).toFixed(2)
    );
    const formattedString = parsedERNumber.toLocaleString("en-GB");
    return formattedString;
  }
  return "NaN";
}
