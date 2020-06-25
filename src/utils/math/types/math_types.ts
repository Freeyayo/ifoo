export type Factorial<T> = (n : T) => T | bigint;

export type Union<T extends number> = (...sets: T[]) =>T[];