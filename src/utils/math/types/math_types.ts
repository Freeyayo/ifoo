export type Factorial<T extends number> = (n : T) => T | bigint;

export type Union<T extends number> = (...sets: T[]) =>T[];