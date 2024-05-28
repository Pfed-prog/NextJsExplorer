import { formatEther, formatUnits } from "viem";

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
  const formattedString = Number(parsedERString).toLocaleString("es-US");
  return formattedString;
}

export function parseToken(tokenValue: string, tokenDecimals: string): string {
  const tokenDecimalsformattedTokenValue = formatUnits(
    BigInt(tokenValue),
    Number(tokenDecimals)
  );
  const parsedTokenString = Number(tokenDecimalsformattedTokenValue).toFixed(2);
  const formattedTokenValue = Number(parsedTokenString).toLocaleString("es-US");
  return formattedTokenValue;
}

export function parseTokenWithER(
  tokenValue: string,
  tokenDecimals: string,
  exchangeRate: string
): string {
  const formattedTokenValue = formatUnits(
    BigInt(tokenValue),
    Number(tokenDecimals)
  );
  const parsedERNumber = Number(
    (Number(formattedTokenValue) * Number(exchangeRate)).toFixed(2)
  );
  const formattedString = parsedERNumber.toLocaleString("es-US");
  return formattedString;
}
