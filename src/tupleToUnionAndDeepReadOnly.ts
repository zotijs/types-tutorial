// Problem 1: `TupleToUnion<T>`
// - [1, 2, 3] -> 1 | 2 | 3

export type TupleToUnion<T extends readonly any[]> = unknown;

// Problem 2: `DeepReadonly<T>`
// - Recursively make all properties readonly.

export type DeepReadonly<T> = unknown;
