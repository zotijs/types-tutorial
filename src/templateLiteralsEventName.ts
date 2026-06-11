export type EventName<T extends string> = `on${Capitalize<T>}`;
