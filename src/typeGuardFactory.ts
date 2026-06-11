// Problem: Implement `createGuard<T>`.
// - Takes a predicate (unknown -> boolean).
// - Returns a function that is a type guard: (v: unknown) => v is T.

export function createGuard<T>(
  predicate: (value: unknown) => boolean,
): (value: unknown) => value is T {
  // TODO: implement
  throw new Error("Not implemented");
}
