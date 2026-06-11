export type DeepMerge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A
    ? K extends keyof B
      ? A[K] extends object
        ? B[K] extends object
          ? DeepMerge<A[K], B[K]>
          : B[K]
        : B[K]
      : A[K]
    : K extends keyof B
      ? B[K]
      : never;
};

export type OmitNever<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K];
};
