export type Dog = { bark: () => void };
export type Cat = { meow: () => void };

export function speak(animal: Dog | Cat): void {
  if ("bark" in animal) animal.bark();
  else animal.meow();
}

export function toTimestamp(value: Date | string): number {
  return value instanceof Date ? value.getTime() : Date.parse(value);
}
