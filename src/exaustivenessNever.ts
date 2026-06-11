// Problem: Implement `area` with exhaustive checking using `never`.

export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

export function area(shape: Shape): number {
  // TODO: implement switch and use a `never` check in default
  throw new Error("Not implemented");
}
