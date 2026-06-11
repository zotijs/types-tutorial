// Problem: Implement `ReturnTypeOrPromise<T>`.
// - If T is a function returning Promise<R>, produce R.
// - If T is a function returning R, produce R.
// - Otherwise, never.

export type ReturnTypeOrPromise<T> = unknown;
