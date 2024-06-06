export function parseHash(address?: string): string {
  if (address) {
    const begin: string = address.substring(0, 7);
    const end: string = address.substring(address.length - 3, address.length);
    const formatted: string = `${begin}...${end}`;
    return formatted;
  }
  return "0x00000...000";
}
