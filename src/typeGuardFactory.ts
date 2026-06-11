export function createGuard<T>(
  predicate: (value: unknown) => boolean,
): (value: unknown) => value is T {
  return (value): value is T => predicate(value);
}
