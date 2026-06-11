export type PathValue<
  T,
  P extends string,
> = P extends `${infer Head}.${infer Tail}`
  ? Head extends keyof T
    ? PathValue<T[Head], Tail>
    : never
  : P extends keyof T
    ? T[P]
    : never;

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, any]>;

export type Add<A extends number, B extends number> = [
  ...BuildTuple<A>,
  ...BuildTuple<B>,
]["length"];
