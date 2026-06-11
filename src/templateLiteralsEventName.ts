// Problem: Implement `EventName<T>`.
// - Given "click" | "hover" -> "onClick" | "onHover".

export type EventName<T extends string> = unknown;
