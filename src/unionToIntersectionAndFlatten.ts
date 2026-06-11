export type UnionToIntersection<U> = (
  U extends unknown ? (x: U) => void : never
) extends (x: infer I) => void
  ? I
  : never;

export type Flatten<T extends readonly unknown[]> = T extends [
  infer Head,
  ...infer Tail,
]
  ? Head extends readonly unknown[]
    ? [...Flatten<Head>, ...Flatten<Tail>]
    : [Head, ...Flatten<Tail>]
  : [];
