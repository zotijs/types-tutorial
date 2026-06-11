// Problem: Implement `RequireKeys<T, K>`.
// - K is a subset of keys of T.
// - Keys in K become required; others stay as in T.

export type RequireKeys<T, K extends keyof T> = unknown;
