export function parseHash(address: string): string {
  const begin = address.substring(0, 7);
  const end = address.substring(address.length - 3, address.length);
  const formatted = `${begin}...${end}`;
  return formatted;
}
