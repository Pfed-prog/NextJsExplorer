export const camelToFlat = (c: string) => (
  (c = c.replace(/(?<=[a-z])([A-Z])/g, " $1")), c[0].toUpperCase() + c.slice(1)
);

export function parseCamelCase(name: string | null | undefined) {
  if (name) return camelToFlat(name);
}
