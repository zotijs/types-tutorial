export type TupleToUnion<T extends readonly unknown[]> = T[number];

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
