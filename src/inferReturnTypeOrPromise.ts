export type ReturnTypeOrPromise<T> = T extends (
  ...args: unknown[]
) => Promise<infer R>
  ? R
  : T extends (...args: unknown[]) => infer R
    ? R
    : never;
