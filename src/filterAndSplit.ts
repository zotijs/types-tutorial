// Problem 1: `Filter<T, Condition>`
// - Keep only union members that extend Condition.

export type Filter<T, Condition> = unknown;

// Problem 2: `Split<S, D>`
// - Split a string literal by a delimiter into a tuple.

export type Split<S extends string, D extends string> = unknown;
