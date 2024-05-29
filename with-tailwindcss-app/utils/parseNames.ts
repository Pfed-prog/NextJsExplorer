export function camelToFlat(c: string) {
  c = c.replace(/([a-z])([A-Z0-9])/g, "$1 $2");
  c = c.replace(/(\d+)$/, " $1").replace(/(\d+)(\D)/g, "$1 $2");
  return c;
}

export function parseCamelCase(name: string | null | undefined) {
  if (name) return camelToFlat(name);
}
