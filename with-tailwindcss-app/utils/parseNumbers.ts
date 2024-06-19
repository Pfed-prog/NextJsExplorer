import { formatEther, formatUnits } from "viem";

export function parseNumber(
  variable: string | bigint | number | undefined
): string {
  if (variable) return Number(variable).toLocaleString("en-GB");
  return "0";
}

export function parseNumberFixed(
  variable: string | bigint | number | undefined
): string {
  const fixedNumber: string = Number(variable).toFixed(2);
  return parseNumber(fixedNumber);
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
  const formattedString = parseNumberFixed(etherNumber * Number(exchangeRate));
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
    const formattedTokenValue = parseNumberFixed(
      tokenDecimalsformattedTokenValue
    );
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
  const formattedString: string = parseNumberFixed(
    Number(formattedTokenValue) * Number(exchangeRate)
  );
  return formattedString;
}

export function parseTokenPrice(token: string | number) {
  const numberTokenPrice: number = Number(token);
  if (numberTokenPrice >= 1000) return parseNumberFixed(numberTokenPrice);
  if (numberTokenPrice >= 0.98 && numberTokenPrice <= 1.02)
    return Number(numberTokenPrice).toLocaleString("en-GB", {
      maximumSignificantDigits: 6,
    });
  if (numberTokenPrice >= 0.0001)
    return Number(numberTokenPrice).toLocaleString("en", {
      maximumSignificantDigits: 4,
    });
  return Number(numberTokenPrice).toLocaleString("en", {
    maximumSignificantDigits: 5,
  });
}
