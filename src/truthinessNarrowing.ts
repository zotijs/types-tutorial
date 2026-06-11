export function safeLength(value?: string | null): number {
  if (value) return value.length;
  return 0;
}
