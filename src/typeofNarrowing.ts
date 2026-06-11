export function describe(value: string | number | boolean): string {
  if (typeof value === "string") return `string: ${value}`;
  if (typeof value === "number") return `number: ${value.toFixed(2)}`;
  return value ? "boolean: true" : "boolean: false";
}
