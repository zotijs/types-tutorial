// Problem 1: `speak` using `in` narrowing.

export type Dog = { bark: () => void };
export type Cat = { meow: () => void };

export function speak(animal: Dog | Cat): void {
  // TODO: use "in" to narrow and call the correct method
  throw new Error("Not implemented");
}

// Problem 2: `toTimestamp` using `instanceof` narrowing.

export function toTimestamp(value: Date | string): number {
  // TODO: use instanceof Date
  throw new Error("Not implemented");
}
