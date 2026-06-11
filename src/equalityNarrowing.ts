export function bothStringsAndEqual(
  a: string | number,
  b: string | boolean,
): boolean {
  return typeof a === "string" && a === b;
}
